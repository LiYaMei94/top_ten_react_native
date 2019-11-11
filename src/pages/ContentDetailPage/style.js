/*
 * @Author: your name
 * @Date: 2019-11-04 11:51:03
 * @LastEditTime: 2019-11-06 16:25:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\HomePage\style.js
 */

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {headerRightMarginRight} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container:{
        flex:1,
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
    
});
