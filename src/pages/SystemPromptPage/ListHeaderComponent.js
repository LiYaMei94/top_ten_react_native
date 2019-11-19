/*
 * @Descripttion: 列表头部组件
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-06 17:16:10
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-19 14:47:29
 */


import React, { Component } from 'react';
import { 
    Text, 
    StyleSheet, 
    TouchableHighlight, 
    View, 
    Image, 
    LayoutAnimation,
    Modal, 
    UIManager,
    Animated } from 'react-native';

import {ScreenWidth,ScreenHeight,greyBG,themeColor,headerHeight} from '../../assets/css/common';
export default class ListHeaderComponent extends React.Component {
    static defaultProps = {
        promptText:"暂无数据"
    }
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        
    }
    render() {
        const {promptText,navigation}=this.props;
        return (
            <View style={styles.container} >
                <Text>记载中</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems:"center",
        height:80,
        width:ScreenWidth
    },
    
});
