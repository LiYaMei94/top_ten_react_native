/*
 * @Descripttion: 
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-05 19:16:55
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-15 14:29:06
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
