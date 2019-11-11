
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 16:03:17
 * @LastEditTime: 2019-11-06 17:23:03
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

import {ScreenWidth,ScreenHeight,greyBG} from '../../assets/css/common';
export default class DataLoadFailure extends React.Component {
    static defaultProps = {
        
    }
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        
    }
    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.wifi}>
                        <Image style={styles.wifiIocn} source={require('../../assets/images/wifi.png')}></Image>
                    </View>
                    <Text style={styles.lineText1}>数据加载失败</Text>
                    <Text style={styles.lineText2}>请检查你的手机是否联网</Text>
                    <TouchableHighlight>
                        <Text style={styles.reloadBtn}>重新加载</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: "absolute",
        top: 0,
        justifyContent: 'center',
        alignItems:"center",
        width:ScreenWidth,
        height:ScreenHeight,
        backgroundColor:greyBG
    },
    content:{
        alignItems:"center",
    },
    wifi:{
        width:70,
        height:70,
        backgroundColor:"#D0D1D3",
        borderRadius:50,
        justifyContent: 'center',
        alignItems:"center",
    },
    wifiIocn:{
        width:45,
        height:45
    },
    lineText1:{
        marginTop:10
    },
    lineText2:{
        marginTop:10,
        color:'#989898'
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
        marginTop:10
    }
});
