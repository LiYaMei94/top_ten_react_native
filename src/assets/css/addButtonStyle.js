/*
 * @Author: your name
 * @Date: 2019-11-05 19:16:55
 * @LastEditTime: 2019-11-07 15:00:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\assets\css\addButtonStyle.js
 */

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {greyBG,headerRightMarginRight,themeColor} from './common';
export const addButtonStyle = StyleSheet.create({
    selectBtn:{
        width:280,
        height:45,
        backgroundColor:themeColor,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center",
        elevation:5,
        position:'absolute',
        bottom:30
    },
    selectBtnText:{
        color:'#fff',
        fontSize:16,
    }
});
