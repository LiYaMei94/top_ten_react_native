/*
 * @Descripttion: 首页
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 11:55:53
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-21 14:44:31
 */
import React, { Component } from 'react';
import { Text, TouchableHighlight, FlatList, View, Image, StatusBar, RefreshControl } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { styles } from './style';
import { themeColor,greyBG } from '../../assets/css/common';
import DataEmpty from '../../components/DataEmpty';
import ListFooterComponent from '../../components/ListFooterComponent';
import ArticleListComponent from '../../components/ArticleListComponent';
import Loading from '../../components/Loading';
import { data } from './data';
const tab = ['最新', '兴趣'];
export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classifyIndex: 0,
            isRefresh: false,// 下拉刷新
            isLoadMore: true,// 加载更多
            isloading:true,//加载

        }
    }

    componentDidMount() {
        const that=this;
        that.timer=setTimeout(function(){
            that.setState({
                isloading:false
            })
        },500)
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    /**
     * 翻页
     * @param {number} index 
     */
    flipOver(index) {
        this.setState({
            classifyIndex: index
        })
        this.ViewPage.setPage(index);
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
        const { classifyIndex, isRefresh, isLoadMore,isloading } = this.state;
        /*if(isloading){
            return <Loading></Loading>
        }*/
        return (
            <View style={styles.container}>
                <View style={styles.headerConatiner}>
                    {
                        tab.map((item, index) => {
                            return (
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={this.flipOver.bind(this, index)}
                                    key={index}
                                    style={styles.classifyItem}
                                >
                                    <Text style={[styles.classifyItemText, classifyIndex == index ? styles.classifyItemTextActive : {}]}>{item}</Text>
                                </TouchableHighlight>
                            )
                        })
                    }
                </View>
                <ViewPager style={{ flex: 1 }}
                    initialPage={classifyIndex}
                    onPageSelected={(e) => {
                        this.setState({
                            classifyIndex: e.nativeEvent.position
                        })
                    }}
                    ref={(ref) => this.ViewPage = ref}>
                    {
                        tab.map((item, index) => {
                            return (
                                <View style={styles.InvitationContainer} key={index}>
                                    <FlatList
                                        data={data}
                                        initialNumToRender={4}
                                        renderItem={(item,index)=><ArticleListComponent item={item} navigation={this.props.navigation}></ArticleListComponent>}
                                        keyExtractor={(item, index) => index + ''}
                                        showsVerticalScrollIndicator={false}
                                        ListEmptyComponent={<DataEmpty navigation={this.props.navigation} ></DataEmpty>}
                                        refreshControl={
                                            <RefreshControl
                                                refreshing={isRefresh}
                                                onRefresh={()=>this._onRefresh()}
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
                            )
                        })
                    }
                </ViewPager>
            </View>
        );
    }
}

