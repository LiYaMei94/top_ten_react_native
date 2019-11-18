/*
 * @Descripttion: 添加评论
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-15 14:13:14
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-18 15:57:05
 */



import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {headerRightMarginRight,themeColor} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        width:'100%',
        justifyContent:"flex-end",
        backgroundColor:"rgba(255,255,255,0)"
        
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
        fontSize:18,
        color:"#666",
        fontFamily:'iconfont'
    },
    textInput:{
        textAlignVertical:"top",
        width:"100%",
        flex:1,
    },
    selectBtn: {
        width: 280,
        height: 45,
        backgroundColor: themeColor,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        marginBottom:20
    },
    selectBtnText:{
        color:'#fff',
        fontSize:16,
    }
});
