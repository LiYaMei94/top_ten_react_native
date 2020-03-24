/*
 * @Descripttion: 新增个榜
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 12:00:23
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-19 14:43:39
 */


import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {headerRightMarginRight,borderColor,themeColor} from '../../assets/css/common';
export const styles = StyleSheet.create({
    //头部标题栏
    headerRightButtonBox: {
        marginRight: headerRightMarginRight,
        width: 60,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
        backgroundColor: themeColor,
    },
    headerRightButton:{
        fontSize:15,
        color:"#fff",
        fontFamily:'iconfont'
    },
    container: {
        flex: 1,
        position: "relative",
        //paddingBottom:20,
        alignItems:"center"
    },
    //标题和简介
    line: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
    },
    lineLable:{
        fontSize: 20, 
        width: 60, 
        height: 49, 
        textAlignVertical: "center"
    },
    lineInput:{
        fontSize:16,
        flex:1,
        borderBottomColor: borderColor,
    },
    //选项
    lineTitle: {
        fontSize: 20,
        height: 50,
        textAlignVertical: "center",
        fontFamily: "iconfont",
        color: 'red',
        width: 25
    },
    //图片添加
    imgContainer:{
        flexDirection:"row",
        alignItems:"center",
    },
    addImgBtn:{
        width:110,
        height:110,
        borderRadius:12,
        borderColor:borderColor,
        justifyContent:"center",
        alignItems:"center",
        marginRight:10,
        position:"relative",
        marginBottom:15,
        marginTop:10
    },
    addImgBtnIcon:{
        fontFamily: "iconfont",
        fontSize:50,
        color:borderColor
    },
    deleteImgBtn:{
        position:"absolute",
        width:20,
        height:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'red',
        borderRadius:50,
        top:5,
        right: 5,
    },
    deleteImg:{
        fontFamily: "iconfont",
        fontSize:13,
        color:'#fff'
    },
    
    /*contentLine:{
        flexDirection:"row",
        alignItems:"flex-start",
        borderBottomWidth:1,
        borderBottomColor:borderColor,
        paddingTop:10,
        paddingBottom:10

    },
    lineLabel:{
        fontSize:15,
        textAlignVertical:"top"
    },
    labelContent:{
        flex:1,
        textAlignVertical:"top",
    },
    
    //选项内容
    listItem:{
        width:'100%'
    },
    listContent:{
        fontSize:15,
        lineHeight:20
    },
    listContentImg:{
        width:'100%',
        marginTop:10,
        height:200
    }*/
    
});
