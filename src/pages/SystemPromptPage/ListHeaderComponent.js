
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 16:03:17
 * @LastEditTime: 2019-10-28 16:40:19
 * @LastEditors: Please set LastEditors
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
