/*
 * @Descripttion: 榜友推荐
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-19 16:22:04
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-19 18:19:52
 */




import React, { Component } from 'react';
import { 
    Text, 
    StatusBar, 
    ScrollView, 
    View, 
    TouchableHighlight, 
    FlatList, 
    Animated, 
    DeviceEventEmitter, 
    PanResponder,
    TouchableOpacity,
    NativeModules } from 'react-native';
import {styles} from './style';
import ArticleList from '../../components/ArticleList';
import ArticleListComponent from '../../components/ArticleListComponent';
import {data} from '../HomePage/data.js';
import {headerStyle} from '../../assets/css/common';
export default class RecommePage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: '榜友推荐',//navigation.getParam('title', '')
        headerStyle: headerStyle,
    })
    constructor(props) {
        super(props);
        this.state={
            
            
        }
    }
    componentDidMount() {
        
        
    }
   
    render() {
        return (
            <View style={styles.container}>
                <Text>作者排行：第一</Text>
            </View>

        );
    }
}
