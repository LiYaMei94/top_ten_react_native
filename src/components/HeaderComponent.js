/*
 * @Author: your name
 * @Date: 2019-11-06 14:14:57
 * @LastEditTime: 2019-11-06 15:40:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\components\HeaderLeftRight.js
 */
import React from 'react';
import {
    TouchableHighlight,
    Text,
    StyleSheet,
    View
} from 'react-native';
import { themeColor, headerRightMarginRight,headerHeight,headerPaddingTop,borderColor} from '../assets/css/common';
export default class HeaderComponent extends React.Component {
    static defaultProps = {
        rightText: "保存",
        leftText: '\ue613',
        titie: ''
    }
    render() {
        const { navigation,rightText, leftText, titie } = this.props;
        //console.log(this.props)
        return (
            <View style={styles.header}>
                <TouchableHighlight
                    onPress={() => navigation.goBack()}
                    underlayColor='rgba(0,0,0,0.2)'
                    style={[styles.headerLeftButtonBox]}
                >
                    <Text style={[styles.headerRightButton,{fontFamily:"iconfont",color:"#666",fontSize:22}]} >{leftText}</Text>
                </TouchableHighlight>
                <Text style={styles.headerTitle}>{titie}</Text>
                <TouchableHighlight
                    onPress={()=>this.props.rightPress()}
                    underlayColor={themeColor}
                    style={[styles.headerRightButtonBox]}
                >
                    <Text style={[styles.headerRightButton]} >{rightText}</Text>
                </TouchableHighlight>
            </View>

        )
    }
}

const styles = StyleSheet.create({

    header:{
        flexDirection:"row",
        paddingTop:headerPaddingTop,
        height:headerHeight,
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:borderColor,
    },
    headerTitle:{
        flex:1,
        fontSize:15,
        textAlign:"left"
    },
    headerLeftButtonBox:{
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: headerRightMarginRight,
        borderRadius:50,
        marginRight:headerRightMarginRight
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
    headerRightButton: {
        fontSize: 15,
        color: "#fff",
        
    },
});
