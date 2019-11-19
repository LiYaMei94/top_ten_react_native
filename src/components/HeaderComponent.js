/*
 * @Descripttion: 标题栏组件
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-06 18:43:39
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-19 11:57:23
 */

import React from 'react';
import {
    TouchableHighlight,
    Text,
    StyleSheet,
    View,
    StatusBar
} from 'react-native';
import PropTypes from  'prop-types';
import { themeColor, headerRightMarginRight, headerHeight, headerPaddingTop, borderColor } from '../assets/css/common';
export default class HeaderComponent extends React.Component {
    static propTypes ={
        rightText:PropTypes.string,
        leftText: PropTypes.string,
        titie: PropTypes.string,
        isHeaderRight:PropTypes.bool,
        headerButtonTextLeft:PropTypes.object,
        headerButtonTextRight:PropTypes.object,
        headerStyle:PropTypes.object,
        headerTitle:PropTypes.object,
        //headerLeft:PropTypes.Component,
        //headerRight:PropTypes.Component,
        rightPress:PropTypes.func,
        leftPress:PropTypes.func,
        barStyle:PropTypes.string
    }
    static defaultProps = {
        rightText: "保存",
        leftText: '\ue613',
        titie: '标题',
        isHeaderRight:false,
        headerButtonTextLeft:{},
        headerButtonTextRight:{},
        headerStyle:{},
        headerTitle:{},
        barStyle:"dark-content"
    }
    _headerLeftRender() {
        const { leftText,barStyle,navigation} = this.props;
        if (this.props.headerLeft) {
            return this.props.headerLeft;
        }
        return (
            <TouchableHighlight
                onPress={() => {
                    StatusBar.setBarStyle(barStyle);
                    navigation.goBack();
                }}
                underlayColor='rgba(0,0,0,0.2)'
                style={[styles.headerLeftButtonBox]}
            >
                <Text style={[styles.headerButtonTextLeft,styles.headerButtonTextLeft,this.props.headerButtonTextLeft]} >{leftText}</Text>
            </TouchableHighlight>
        )
    }

    _headerRightRender() {
        const {rightText} = this.props;
        if (this.props.isHeaderRight) {
            if (this.props.headerRight) {
                return this.props.headerRight;
            }
            return (
                <TouchableHighlight
                    onPress={() => this.props.rightPress()}
                    underlayColor={themeColor}
                    style={[styles.headerRightButtonBox,this.props.headerRightButtonBox]}
                >
                    <Text style={[styles.headerButtonTextRight,styles.headerButtonTextRight,this.props.headerButtonTextRight]} >{rightText}</Text>
                </TouchableHighlight>
            )
        }
        return null;
        
    }
    render() {
        const {titie} = this.props;
        return (
            <View style={[styles.headerStyle,this.props.headerStyle]}>
                {this._headerLeftRender()}
                <Text style={[styles.headerTitle,this.props.headerTitle]}>{titie}</Text>
                {this._headerRightRender()}
            </View>

        )
    }
}

const styles = StyleSheet.create({

    headerStyle: {
        flexDirection: "row",
        paddingTop: headerPaddingTop,
        height: headerHeight,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: borderColor,
        position:"absolute",
        top:0,
        left:0,
        right: 0,
        backgroundColor:'#fff'
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        textAlign:"left"
    },
    headerLeftButtonBox: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        borderRadius: 50,
        marginRight: 15
    },
    headerRightButtonBox: {
        width: 60,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: themeColor,
        marginRight: headerRightMarginRight
    },
    headerButtonTextLeft:{
        fontFamily: "iconfont", 
        color: "#666", 
        fontSize: 22
    },
    headerButtonTextRight:{
        fontSize:14,
        color:'#fff'
    }
});
