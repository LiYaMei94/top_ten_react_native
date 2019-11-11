/*
 * @Author: your name
 * @Date: 2019-11-04 11:14:46
 * @LastEditTime: 2019-11-11 15:12:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\App.js
 */


import React, { Component } from 'react';
import { DeviceEventEmitter, StyleSheet, StatusBar, View } from 'react-native';


import { YellowBox } from 'react-native';

//引入路由组件
import { AppContainer } from './src/router';
//启动页
import SplashScreen from 'react-native-splash-screen';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
            'Warning: componentWillMount has been renamed',
            'Warning: componentWillReceiveProps has been renamed',
        ]);
        this.state = {
            msg: 3
        }
    }

    componentDidMount() {
        // 组件加载完毕之后，隐藏启动页
        this.timer = setTimeout(() => {
            SplashScreen.hide();
        }, 900)
        StatusBar.setBarStyle('dark-content');
        //监听个榜是否有新的消息
        DeviceEventEmitter.addListener("navigation_msgChange", (params) => {
            this.setState({
                msg: 0
            })
        })
    }
    //卸载计时器
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);//同时为真的才执行卸载
    }
    render() {
        const { msg } = this.state;
        return (
            <AppContainer screenProps={{ msg: msg }} />
        );
    }
}

const styles = StyleSheet.create({

});
