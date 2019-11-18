/*
 * @Descripttion: 文章列表样式表
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 18:39:34
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-14 16:58:55
 */


import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {borderColor,headerRightMarginRight,themeColor} from './common';
export const listStyles = StyleSheet.create({
    collectionItem:{
        paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight,
        paddingTop:12,
        paddingBottom:12,
        position:"relative",
        backgroundColor:'#fff',
        marginBottom:10
    },
    title:{
        color:'#000',
        fontSize:18,
        marginBottom:10,
        flex:1,
    },
    collectionItemLeft:{
        width:120,
        height:90,
        borderRadius:10
    },
    dateTime:{
        flex:1,
        fontSize:14,
        color:'#999'
    },
    likeBtn:{
        width:25,
        height:25,
        justifyContent:"center",
        alignItems:"center",
    },
    likeBtnIcon:{
        fontFamily: 'iconfont',
        fontSize:19,
    },
    label:{
        color:themeColor,
        marginRight:10,
        fontSize:14,
    },
    content:{
        fontSize:15,
        lineHeight:20,
        marginBottom:5
    },
    /*collectionItem:{
        borderBottomWidth:1,
        borderBottomColor:borderColor,
        paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight,
        paddingTop:12,
        paddingBottom:12,
        position:"relative",
    },
    title:{
        color:'#000',
        fontSize:16,
        marginBottom:10
    },
    collectionItemLeft:{
        width:120,
        height:90,
        borderRadius:10
    },
    collectionItemRight:{
        flex:1,
        paddingLeft:10
    },
    content:{
        fontSize:15
    },
    collectionItemBottom:{
        flexDirection: 'row',
        position:"absolute",
        bottom:0,
        left:10,
    },
    label:{
        padding:5,
        paddingLeft:8,
        paddingRight:8,
        backgroundColor:themeColor,
        borderRadius:5,
        color:'#fff'
    },
    detailBtn:{
        flex: 1,
        justifyContent:"center",
        alignItems:"flex-end"
    },
    dateTime:{
        flex:1,
        fontSize:15
    },
    likeBtn:{
        width:45,
        height:45,
        justifyContent:"center",
        alignItems:"center"
    },
    likeBtnIcon:{
        fontFamily: 'iconfont',
        fontSize:20
    }*/
});
