/*
 * @Descripttion: 列表尾部组件
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-06 17:16:10
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-19 14:47:17
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
import Loading from '../../components/Loading';

export default class ListFooterComponent extends React.Component {
    static defaultProps = {
        isLoadMore:false
    }
    constructor(props) {
        super(props);
        this.state = {
            isMore:true
        }
    }
    componentDidMount(){
        
    }
    componentWillUnmount() {
       
      }
    render() {
        const {isLoadMore,navigation}=this.props;
        if(isLoadMore){
            return (
                <View style={styles.container} >
                    <Loading spinkerSize={25} spinkerColor='#666'></Loading>
                </View>
            );
        }else{
            return(
                <View style={styles.container} >
                    <Text style={{height:40,lineHeight:40}}>没有更多了~</Text>
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent:"flex-start",
        alignItems:"center",
        width:ScreenWidth,
        paddingBottom:25,
    },
    Icon:{
        fontFamily: 'iconfont',
        fontSize:24,
        color:'#666'
    }
});