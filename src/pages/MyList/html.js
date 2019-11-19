/*
 * @Descripttion: 个榜
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-11 10:28:35
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-19 14:52:23
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
    PanResponder,
    ImageBackground,
    NativeModules } from 'react-native';
import {styles} from './style';
import ArticleList from '../../components/ArticleList';
import ArticleListComponent from '../../components/ArticleListComponent';
import {data} from '../HomePage/data.js';
import {RightArrowIcon} from '../../assets/css/common';
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
    _renderItem(item,index){
        return <AraftPageItem item={item} index={index} navigation={this.props.navigation}></AraftPageItem>
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

class AraftPageItem extends React.Component {
    render(){
        const {item:{item},index,navigation}=this.props;
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