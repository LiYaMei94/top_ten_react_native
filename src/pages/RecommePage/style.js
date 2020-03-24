/*
 * @Descripttion: 榜友推荐
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-19 16:22:14
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 15:55:14
 */



import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {headerRightMarginRight,greyBG,borderColor} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor:greyBG
    },
    //推荐输入框
    rank_recommend_conatiner:{
        marginTop:10,
        backgroundColor:'#fff',
        paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight,
        paddingTop:10,
        paddingBottom:30
    },
    rank_recommend_title:{
        fontSize:18,
        color:'#333',
        marginBottom:10
    },
    rank_recommend_line:{
        flexDirection:"row",
        alignItems:"flex-start",
        marginBottom:10
    },
    rank_recommend_line_name:{
        fontSize:15,
        height:49,
        textAlignVertical:"top",
        paddingTop:10,
        paddingBottom:10,
        marginRight:10
    },
    rank_recommend_line_input:{
        borderColor:borderColor,
        fontSize:15,
        borderWidth:1,
        paddingTop:10,
        paddingBottom:10,
        textAlignVertical:"top",
        flex:1,
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
});
