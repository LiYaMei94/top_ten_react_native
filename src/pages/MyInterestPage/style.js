/*
 * @Author: your name
 * @Date: 2019-11-04 11:51:03
 * @LastEditTime: 2019-11-07 15:28:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\HomePage\style.js
 */

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {greyBG,headerRightMarginRight,themeColor,ScreenHeight,ScreenWidth,borderColor} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        position:"relative",
        justifyContent:"flex-end"
    },
    labelContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        paddingLeft:9,
        paddingRight:9,
        paddingTop:20,
        width:'100%'
    },
    labelItem:{
        borderRadius:10,
        borderWidth:1,
        borderColor:'#423F41',
        padding:5,
        paddingLeft:8,
        paddingRight:8,
        marginLeft:6,
        marginRight:6,
        marginBottom:10
    },
    labelItemText:{

    },
    selectedLabelItem:{
        borderWidth:1,
        backgroundColor:themeColor,
        borderColor:themeColor
    },
    selectedLabelItemText:{
        color:'#fff'
    },
    //新增标签弹窗
    AddLabelContainer:{
        backgroundColor:"rgba(0,0,0,0.5)",
        width:ScreenWidth,
        height:ScreenHeight,
        justifyContent:"center",
        alignItems:"center"
    },
    AddLabel:{
        width:300,
        height:200,
        borderRadius:15,
        backgroundColor:"#fff",
        alignItems:"center",
        //marginTop:150
    },
    addLableTitle:{
        height:60,
        lineHeight:60,
        fontSize:16
    },
    addLableInput:{
        borderColor:borderColor,
        borderWidth:1,
        width:260,
        borderRadius:12
    },
    addCancelBtn:{
        width:60,
        height:40,
        borderRadius:12,
        backgroundColor:themeColor,
        justifyContent:"center",
        alignItems:"center",
    }
});
