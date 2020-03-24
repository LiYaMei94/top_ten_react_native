/*
 * @Descripttion: 我的草稿
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-15 16:31:46
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 18:54:47
 */



import React, { Component } from 'react';
import { Text, FlatList, Image, View,TouchableHighlight,RefreshControl} from 'react-native';
import {styles} from './style';
import HeaderComponent from '../../components/HeaderComponent';
import {headerHeight,RightArrowIcon,themeColor} from '../../assets/css/common';
import DataEmpty from '../../components/DataEmpty';
import ListFooterComponent from '../../components/ListFooterComponent';
import Loading from '../../components/Loading';
import {data} from '../HomePage/data';
export default class MyAraftPage extends React.Component {
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
                    titie='我的草稿' 
                    navigation={this.props.navigation}
                    isHeaderRight={false}
                    ></HeaderComponent>
                <FlatList
                    data={data}
                    renderItem={(item,index)=><AraftPageItem item={item} index={index} navigation={this.props.navigation}></AraftPageItem>}
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
class AraftPageItem extends React.Component {
    render(){
        const {item:{item},index,navigation}=this.props;
        return(
            <TouchableHighlight underlayColor='#fff' onPress={()=>navigation.push('AddArticlePage')}>
                <View style={styles.araftPageItem}>
                    <View style={styles.itemTop}>
                        <Text style={styles.article_title}>10大最稀有最罕见的奇葩动物</Text>
                        <Text style={styles.artilce_detail_btn}>{RightArrowIcon}</Text>
                    </View>
                    <View style={styles.article_content}>
                        {
                            item.listImg.length!=0?
                            <View style={styles.article_content_Img}>
                                <Image resizeMode="cover" style={styles.article_content_Img_item} source={{uri:'https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg'}}></Image>
                            </View>:null
                        }
                        <View style={styles.article_content_Text}>
                            <Text style={styles.article_content_Text_item}>1、东方雪人</Text>
                            <Text style={styles.article_content_Text_item}>2、chupacabra</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}