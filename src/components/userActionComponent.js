/*
 * @Descripttion: 用户操作组件
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-14 18:06:33
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-18 17:01:23
 */

import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableHighlight,
    View,
    TouchableOpacity
} from 'react-native';
import {borderColor,greyBG,headerRightMarginRight} from '../assets/css/common';
import PropTypes from  'prop-types';

export default class UserActionComponent extends React.Component {
    static propTypes ={
        contentDetailInfo:PropTypes.object,
        routeName:PropTypes.string
    }
    static defaultProps = {
        contentDetailInfo:{},
        routeName:'homePage'
    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {


    }
    
    
    render() {
        const { } = this.state;
        const {contentDetailInfo,routeName,navigation } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.showCommentInput()} style={styles.commentBtn}  >
                    <Text style={{color:'#999'}}>抢占沙发！</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",alignItems:"center",flex:1}}>
                    <TouchableOpacity style={styles.actionItem} 
                        underlayColor={greyBG}
                        onPress={()=>this.props.showComment()}>
                        <View style={styles.actionItemInner}>
                            <Text style={styles.actionItemIcon}>{'\ue603'}</Text>
                            <Text style={styles.commentNum}>1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionItem} 
                        underlayColor={greyBG}
                        onPress={()=>this.props.collection()}>
                        <View style={styles.actionItemInner}>
                            <Text style={styles.actionItemIcon}>{'\ue609'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 55,
        backgroundColor: '#fff',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        borderTopColor:borderColor,
        borderTopWidth:1,
        flexDirection:"row",
        alignItems:"center",
        elevation:5,
        paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight
    },
    commentBtn:{
        width:180,
        height:40,
        borderColor:borderColor,
        borderRadius:10,
        borderWidth:1,
        marginRight:15,
        paddingLeft:10,
        justifyContent:"center",
    },
    actionItem:{
        flex:1,
        height:'100%',
        borderLeftColor: borderColor,
    },
    actionItemInner:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        height:'100%'
    },
    actionItemIcon:{
        fontFamily: 'iconfont',
        fontSize:21,
        marginRight:5,
        color:'#333'
    },
    actionItemText:{
        fontSize:18,
        color:'#333'
    },
    //评论的数量显示
    commentNum:{
        backgroundColor:'#F8534D',
        color:'#fff',
        borderRadius:50,
        paddingLeft:5,
        paddingRight:5,
        textAlignVertical:"center",
        textAlign:"center",
        position:"absolute",
        top:8,
        left:35
    }
});
