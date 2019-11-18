/*
 * @Author: your name
 * @Date: 2019-11-04 11:51:03
 * @LastEditTime: 2019-11-18 18:51:04
 * @LastEditors: liyamei
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\HomePage\style.js
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
        paddingBottom:20,
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
    },
    //选项
    optionLineTop:{
        flexDirection:'row',
        alignItems:"center"
    }
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
    selectBtn: {
        width: 100,
        height: 45,
        backgroundColor: themeColor,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        marginTop:15
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
