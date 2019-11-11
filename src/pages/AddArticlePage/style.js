/*
 * @Author: your name
 * @Date: 2019-11-04 11:51:03
 * @LastEditTime: 2019-11-07 15:56:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\HomePage\style.js
 */

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {headerRightMarginRight,borderColor,themeColor} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        paddingBottom:20,
        alignItems:"center"
    },
    contentLine:{
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
        width: 280,
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
    }
    
});
