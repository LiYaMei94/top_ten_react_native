/*
 * @Descripttion: 主题色按钮
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-20 11:22:29
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 11:54:13
 */

import React, { Component } from 'react';
import { headerRightMarginRight, StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { borderColor,themeColor } from '../assets/css/common';
import PropTypes from  'prop-types';
export default class ThemeColorButton extends React.Component {
    static propTypes={
        buttonPress:PropTypes.func,
        optionButton:PropTypes.object,
        buttonIcon:PropTypes.string
    }
    static defaultProps = {
        buttonIcon:'确定'
    }
    render() {
        const { optionButton,buttonIcon } = this.props;
        return (
            <TouchableHighlight onPress={()=>this.props.buttonPress()} underlayColor={themeColor} style={[styles.button,optionButton]}>
                <Text style={styles.buttonIcon}>{buttonIcon}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        width:280,
        height:45,
        backgroundColor:themeColor,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center",
        elevation:5,
        //position:'absolute',
        //bottom:30
    },
    buttonIcon:{
        color:'#fff',
        fontSize:16,
    }
});
