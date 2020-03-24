/*
 * @Descripttion: 返回顶部
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-19 13:55:25
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-21 14:57:42
 */




import React, { Component } from 'react';
import { headerRightMarginRight, StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { borderColor,themeColor,themeColorGgba } from '../assets/css/common';
import PropTypes from  'prop-types';
export default class BackToTop extends React.Component {
    static propTypes={
        optionContainer:PropTypes.object,
        goBackTop:PropTypes.func
    }
    static defaultProps = {
        optionContainer:{}
    }
    render() {
        const { optionContainer } = this.props;
        return (
            <TouchableHighlight onPress={()=>this.props.goBackTop()} underlayColor={themeColor} style={[styles.container,optionContainer]}>
                <Text style={styles.backToTopIcon}>{'\ue608'}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position:"absolute",
        width:50,
        height:50,
        borderRadius:50,
        backgroundColor:themeColorGgba,
        bottom:70,
        right: 15,
        justifyContent:"center",
        alignItems:"center",
        //borderWidth:1,
        borderColor:'#666',
    },
    backToTopIcon:{
        fontFamily: 'iconfont',
        color:'#fff',
        fontSize:34
    }
});
