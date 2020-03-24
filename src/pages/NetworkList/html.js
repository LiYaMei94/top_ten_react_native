/*
 * @Descripttion: 网榜
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-11 10:29:56
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-21 14:49:01
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
    RefreshControl,
    TouchableOpacity,
    NativeModules
} from 'react-native';
import { styles } from './style';
import DataEmpty from '../../components/DataEmpty';
import ListFooterComponent from '../../components/ListFooterComponent';
import Loading from '../../components/Loading';
import {themeColor} from '../../assets/css/common';
import { data } from '../HomePage/data.js';
//const data=[];

export default class NetworkList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isloading: true,//加载
            isRefresh: false,// 下拉刷新
            isLoadMore: true,// 加载更多

        }
    }
    componentDidMount() {
        const that = this;
        that.timer = setTimeout(function () {
            that.setState({
                isloading: false
            })
        }, 500)
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    /**
     *下拉刷新
     *
     * @memberof HomePage
     */
    _onRefresh() {
        if (!this.state.isRefresh) {
            console.log('下拉刷新')
        }
    }
    /**
     *上拉加载
     *
     * @memberof HomePage
     */
    _onLoadMore() {
        const that=this;
        that.timer=setTimeout(function(){
            that.setState({
                isLoadMore:false
            })
        },1000)
        console.log('上拉加载')
    }
    render() {
        const { isloading,isLoadMore,isRefresh } = this.state;
        /*if(isloading){
            return <Loading></Loading>
        }*/
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={(item,index)=><NetworkItem item={item} navigation={this.props.navigation}></NetworkItem>}
                    keyExtractor={(item, index) => index + ''}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<DataEmpty navigation={this.props.navigation} ></DataEmpty>}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefresh}
                            onRefresh={() => this._onRefresh()}
                            colors={[themeColor]}
                            size={RefreshControl.SIZE.LARGE}
                        //progressBackgroundColor='red'//指示器的背景色
                        />
                    }
                    ListFooterComponent={<ListFooterComponent navigation={this.props.navigation} isLoadMore={isLoadMore}></ListFooterComponent>}
                    onEndReached={() => this._onLoadMore()}
                    onEndReachedThreshold={0.1}
                >
                </FlatList>
            </View>

        );
    }
}
//
class NetworkItem extends React.Component {
    render() {
        const { navigation,item:{item}} = this.props;
        return (
            <TouchableOpacity style={styles.networkItem} onPress={() => navigation.push('HomePageDetail')}>
                <Text style={styles.ranking_list_title}>阿里巴巴字体图标库</Text>
                <Text style={styles.ranking_list_desc}>设计师将图标上传到Iconfont平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端工程师自由调整与调用。</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.ranking_list_label}>来源：网络</Text>
                    <Text style={styles.ranking_list_label}>2019年11月18日</Text>
                </View>
            </TouchableOpacity>
        )
    }
}