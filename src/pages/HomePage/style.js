/*
 * @Author: your name
 * @Date: 2019-11-04 11:51:03
 * @LastEditTime: 2019-11-07 11:34:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\HomePage\style.js
 */

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {headerHeight,headerPaddingTop,themeColor,borderColor,greyBG} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        position: "relative",
        backgroundColor:greyBG
    },
    headerConatiner:{
        height:headerHeight,
        paddingTop:headerPaddingTop,
        width:'100%',
        backgroundColor:"#fff",
        borderBottomWidth:1,
        borderBottomColor:borderColor,
        flexDirection: 'row',
        alignItems:"flex-end",
        justifyContent:"flex-start"
    },
    classifyItem:{
        width:60,
        height:'100%',
        justifyContent:"flex-end",
        paddingBottom:10,
    },
    classifyItemText:{
        fontSize:18,
        textAlign:"center",
    },
    classifyItemTextActive:{
        color:themeColor
    },
    InvitationContainer:{
        width:'100%',
    },
    HomePageLable:{
        color:'#fff',
        backgroundColor:themeColor,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5,
        height:18,
        fontSize:11,
        textAlignVertical:"center"
    },
    likeNum:{
        flex:1,
        textAlign:"right",
        color:'#999',
        fontSize:11,
    }
});
