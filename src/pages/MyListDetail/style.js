/*
 * @Descripttion: 首页文章详情
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 18:25:45
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 13:33:56
 */


import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {headerRightMarginRight,borderColor,themeColor} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:55,
        position:"relative"
    },
    //头部标题栏
    headerRightButtonBox: {
        marginRight: headerRightMarginRight,
        width: 60,
        height: 30,
        justifyContent: "center",
        alignItems: "flex-end",
        borderRadius:10,
    },
    headerRightButton:{
        fontSize:22,
        color:"#666",
        fontFamily:'iconfont'
    },
    
    //评论列表
    commentListContainer:{
        width:'100%',
        paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight,
        borderTopColor:borderColor,
        borderTopWidth:7,
        marginTop:10,
        paddingBottom:20
    },
    commentList:{
        width:'100%',
        height:200,
        borderWidth:1
    },
    //评论输入框
    commentBar:{
        width:'100%',
        paddingBottom:10,
        paddingTop:10,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:headerRightMarginRight,
        backgroundColor:'#fff',
        paddingRight:headerRightMarginRight,
        borderTopColor:borderColor,
        borderTopWidth:1,
    },
    commentTextInput:{
        borderColor:borderColor,
        borderWidth:1,
        flex:1,
        borderRadius:12,
        marginRight:20,
        textAlignVertical:"top"
    },
    publish_button:{
        width:50,
        height:30,
        backgroundColor:themeColor,
        color:'#fff',
        textAlign:"center",
        textAlignVertical:"center",
        borderRadius:10
    },
    //喜欢按钮
    likeButton:{
        width:100,
        height:35,
        borderRadius:20,
        borderWidth:1,
        borderColor:borderColor,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:'auto',
        marginRight:"auto",
        marginTop:20
    },
    likeButtonText:{
        fontFamily:'iconfont',
    }
});
