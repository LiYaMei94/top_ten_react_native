/*
 * @Author: your name
 * @Date: 2019-11-04 11:55:53
 * @LastEditTime: 2019-11-11 15:11:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\pages\MinePage\html.js
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
    ImageBackground,
    NativeModules } from 'react-native';
import {styles} from './style';
import ArticleList from '../../components/articleList';
import {data} from '../HomePage/data.js';
export default class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }
    componentDidMount() {
        //进入当前页修改个榜消息通知取消
        DeviceEventEmitter.emit('navigation_msgChange', {});
        
    }
    _renderItem({item},index){
        return <ArticleList item={item} index={index} navigation={this.props.navigation}></ArticleList>
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={this._renderItem.bind(this)}
                    keyExtractor={(item, index) => index + ''}
                    showsVerticalScrollIndicator={false}
                    //ListEmptyComponent={<DataEmpty navigation={this.props.navigation} promptText={'没有' + tab[classifyIndex] + '类的文章哦~'}></DataEmpty>}
                    //ListFooterComponent={<ListFooterComponent isLoadMore={isLoadMore}></ListFooterComponent>}
                    //onRefresh={()=>this._onRefresh()}
                    //refreshing={this.state.isRefresh}
                    //onEndReached={()=>this._onLoadMore()}
                    // onEndReachedThreshold={0.1}
                >
                </FlatList>
            </View>

        );
    }
}

