/*
 * @Descripttion: 个榜
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-11 10:28:35
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-21 14:48:53
 */




import React, { Component } from 'react';
import { 
    Text, 
    Image, 
    ScrollView, 
    View, 
    TouchableHighlight, 
    FlatList, 
    Animated, 
    DeviceEventEmitter, 
    RefreshControl,
    ImageBackground,
    NativeModules } from 'react-native';
import {styles} from './style';
import DataEmpty from '../../components/DataEmpty';
import ListFooterComponent from '../../components/ListFooterComponent';
import Loading from '../../components/Loading';
import {data} from '../HomePage/data.js';
//const data =[];
import {RightArrowIcon,themeColor} from '../../assets/css/common';
export default class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isloading: true,//加载
            isRefresh: false,// 下拉刷新
            isLoadMore: true,// 加载更多
        }
    }
    componentDidMount() {
        //进入当前页修改个榜消息通知取消
        DeviceEventEmitter.emit('navigation_msgChange', {});
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
                    renderItem={(item,index)=><AraftPageItem item={item} navigation={this.props.navigation}></AraftPageItem>}
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
        const {item:{item},navigation}=this.props;
        return(
            <TouchableHighlight underlayColor='#fff' onPress={()=>navigation.push('MyListDetailPage')}>
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
                    <View style={styles.bottom_infoBar}>
                        <Text style={styles.bottom_infoItem}>喜欢数12</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}