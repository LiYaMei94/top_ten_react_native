/*
 * @Descripttion: 登录、注册样式表
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 14:44:17
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-14 17:57:30
 */

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {themeColor,borderColor,headerRightMarginRight} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    //头部标题栏
    headerRightButtonBox: {
        marginLeft: headerRightMarginRight,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:50,
    },
    headerRightButton:{
        fontSize:27,
        fontFamily: "iconfont",
        color:"#fff"
    },
    pageTop:{
        height:150,
        //backgroundColor:'red',
        justifyContent:"center",
        alignItems:"center"
    },
    loginPageTop:{
        backgroundColor:themeColor,
        width:'100%',
        //borderRadius:200,
        borderBottomRightRadius:110,
        borderBottomLeftRadius:110,
        marginBottom:30
    },
    pageTopContent:{
        justifyContent:"center",
        alignItems:"center"
    },
    pageTopIconBg:{
        width:80,
        height:80,
        borderRadius:50,
        backgroundColor:themeColor,
        justifyContent:"center",
        alignItems:"center"
    },
    pageTopIcon:{
        fontFamily:"iconfont",
        color:"#fff",
        fontSize:50
    },
    pageTopText:{
        color:themeColor,
        fontSize:16,
        marginTop:10
    },
    pageCenter:{

    },
    pageCenterLine:{
        width:280,
        height:50,
        borderWidth:1,
        borderRadius:30,
        borderColor:borderColor,
        marginBottom:10,
        flexDirection:"row",
        alignItems:"center"
    },
    ipageCenterIcon:{
        fontFamily:"iconfont",
        width:50,
        height:50,
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:20,
        color:"#999",
        borderRightColor:borderColor,
        borderRightWidth:1,
    },
    pageCenterInput:{
        flex:1,
        paddingLeft:15
    },
    registerBtn:{
        backgroundColor:themeColor,
        justifyContent:"center",
        alignItems:"center",
        marginTop:25,
        borderWidth:0,
    },
    registerText:{
        color:'#fff',
        fontSize:16
    },
    codeBtn:{
        width:100,
        height:50,
        backgroundColor:themeColor,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    codeBtnText:{
        color:'#fff',
        fontSize:16
    },
    pageBottom:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    },
    pageBottomText:{
        color:'#9D9D9D',
        fontSize:15
    },
    pageBottomBtnText:{
        color:themeColor,
        fontSize:15
    },
    forgotPasswordText:{
        width:280,
        height:30,
        color:'#999',
        textAlignVertical:"center",
        textAlign:"right",
    }
});