/*
 * @Descripttion:个榜 
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-11 10:28:46
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-19 14:45:47
 */



import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {greyBG,headerHeight,headerRightMarginRight} from '../../assets/css/common';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor:greyBG
    },
    //列表
    araftPageItem:{
        paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight ,
        paddingTop:15,
        paddingBottom:20,
        backgroundColor:'#fff',
        marginBottom:10  
    },
    artilce_detail_btn:{
        fontFamily: 'iconfont',
        fontSize:22,
        color:'#999'
    },
    itemTop:{
        flexDirection:'row',
        marginBottom:10,
        alignItems:"center"
    },
    article_title:{
        flex:1,
        fontSize:16,
        color:'#333'
    },
    article_content:{
        flexDirection: 'row',
        alignItems:"center"
    },
    article_content_Img:{
        width:90,
        height:70,
        borderRadius:12
    },
    article_content_Text:{
        flex:1,
        marginLeft:10
    },
    article_content_Img_item:{
        width:'100%',
        height:'100%',
        borderRadius:12
    },
    article_content_Text_item:{

    },
    bottom_infoItem:{
        marginTop:10,
        color:'#999'
    }
});
