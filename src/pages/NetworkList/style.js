/*
 * @Author: your name
 * @Date: 2019-11-11 10:28:46
 * @LastEditTime: 2019-11-18 17:31:01
 * @LastEditors: liyamei
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\pages\MyList\style.js
 */



import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {headerRightMarginRight,greyBG} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor:greyBG
    },
    //列表组件
    networkItem:{
        paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight,
        paddingBottom:10,
        paddingTop:10,
        marginBottom:10,
        backgroundColor:'#fff'
    },
    ranking_list_title:{
        fontSize:18,
        color:'#333',
        marginBottom:5
    },
    ranking_list_desc:{
        marginBottom:10
    },
    ranking_list_label:{
        marginRight:15,
        color:'#999'
    }
});
