/*
 * @Descripttion: 我的收藏
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 14:40:27
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-21 14:49:09
 */


import React, { Component } from 'react';
import { Text, FlatList, Image, View,TouchableHighlight,RefreshControl} from 'react-native';
import {styles} from './style';
import HeaderComponent from '../../components/HeaderComponent';
import ArticleListComponent from '../../components/ArticleListComponent';
import {headerHeight,themeColor} from '../../assets/css/common';
import DataEmpty from '../../components/DataEmpty';
import ListFooterComponent from '../../components/ListFooterComponent';
import Loading from '../../components/Loading';
import {data} from '../HomePage/data';
export default class MyCollectionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
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
            <View style={[styles.container,{paddingTop:headerHeight}]}>
                <HeaderComponent
                    barStyle='light-content'
                    titie='我的收藏' 
                    navigation={this.props.navigation}
                    isHeaderRight={false}
                    ></HeaderComponent>
                <FlatList
                    data={data}
                    keyExtractor={(item,index)=>index+''}
                    showsVerticalScrollIndicator={false}
                    renderItem={(item,index)=><ArticleListComponent pageType='MyCollectionPage' item={item}  navigation={this.props.navigation} key={index}></ArticleListComponent>}
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


