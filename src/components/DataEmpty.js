/*
 * @Descripttion: 列表为空时的组件
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-06 17:16:10
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 16:51:48
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

import {ScreenWidth,ScreenHeight,greyBG,themeColor,headerHeight} from '../assets/css/common';
export default class DataEmpty extends React.Component {
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
                <Text style={styles.Icon}>{'\ue60b'}</Text>
                <Text style={{fontSize:15}}>{promptText}</Text>
                {
                    /*navigation?
                    <TouchableHighlight
                        underlayColor={greyBG}
                        onPress={()=>navigation.push('PostMessage')}
                    >
                        <Text style={styles.reloadBtn}>去发帖吧</Text>
                    </TouchableHighlight>:null*/
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems:"center",
        height:ScreenHeight-headerHeight-80,
        width:ScreenWidth
    },
    Icon:{
        fontSize:80,
        fontFamily:"iconfont",
        color:themeColor,
        marginBottom:10
    },
    reloadBtn:{
        borderColor:"#717173",
        borderWidth:1,
        borderRadius:12,
        fontSize:16,
        width:95,
        height:35,
        textAlign:"center",
        textAlignVertical:"center",
        marginTop:10,
        //backgroundColor:themeColor
    }
});
