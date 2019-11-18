/*
 * @Descripttion: 首页
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 11:55:53
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-15 14:58:10
 */



import React, { Component } from 'react';
import { Text, TouchableHighlight, FlatList, View, Image,StatusBar } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { styles } from './style';
import { themeColor } from '../../assets/css/common';
import { listStyles } from '../../assets/css/listStyle';
import DataEmpty from '../SystemPromptPage/DataEmpty';
import ListFooterComponent from '../SystemPromptPage/ListFooterComponent';
import ArticleList from '../../components/articleList';
import ArticleListComponent from '../../components/articleListComponent';
import {data} from './data';
const tab = ['最新', '兴趣'];
const lengthMax=3;
export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classifyIndex: 0,
            // 下拉刷新
            isRefresh:false,
            // 加载更多
            isLoadMore:true
        }
    }

    componentDidMount() {
        
    }
    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写
    
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
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
    _onRefresh =()=>{
        if(!this.state.isRefresh){
            console.log('下拉刷新')
        }
    }
    /**
     *上拉加载
     *
     * @memberof HomePage
     */
    _onLoadMore=()=>{
        if(lengthMax==data.length){
            this.setState({
                isLoadMore:false
            })
        }else{//重新加载数据
            this.timer=setTimeout(()=>{
                this.setState({
                    isLoadMore:false
                })
            },1000)
        }
    }
    _renderItem({item},index){
        const { classifyIndex,isLoadMore } = this.state;
        return <ArticleListComponent item={item} index={index} navigation={this.props.navigation}></ArticleListComponent>
        /*if(classifyIndex==0){
            return <CollectionItem item={item} index={index} navigation={this.props.navigation}></CollectionItem>
        }else{
            return <ArticleList item={item} index={index} navigation={this.props.navigation}></ArticleList>
        }*/
    }
    render() {
        const { classifyIndex,isLoadMore } = this.state;
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
                            )
                        })
                    }
                    
                </ViewPager>
            </View>
        );
    }
}
/*class CollectionItem extends React.Component {
    
    render() {
        const { item, index, navigation } = this.props;
        return (
            <TouchableHighlight underlayColor='#fff' onPress={() => navigation.push('ContentDetailPage', { title: item.title,classifyIndex:0 })}>
                <View style={[listStyles.collectionItem, { paddingBottom: 5 }]}>
                    <Text style={listStyles.title} >{item.title}</Text>
                    <Text style={listStyles.content} numberOfLines={4}>{item.desc}</Text>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Text style={listStyles.label}>{item.label}</Text>
                        <Text style={listStyles.dateTime}>2019年11月04日</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <TouchableHighlight style={listStyles.likeBtn} underlayColor='#fff' onPress={() => this.like(item, index)}>
                                <Text style={[listStyles.likeBtnIcon, { color: item.isLike == 1 ? "#FF3421" : '#999' }]}>{item.isLike == 1 ? '\ue6a1' : '\ue69d'}</Text>
                            </TouchableHighlight>
                            <Text style={{ fontSize: 14, color: '#999' }}>123</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}*/
