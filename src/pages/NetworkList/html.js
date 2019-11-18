/*
 * @Author: your name
 * @Date: 2019-11-04 11:55:53
 * @LastEditTime: 2019-11-18 18:37:51
 * @LastEditors: liyamei
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
    TouchableOpacity,
    NativeModules } from 'react-native';
import {styles} from './style';
import ArticleList from '../../components/articleList';
import ArticleListComponent from '../../components/articleListComponent';
import {data} from '../HomePage/data.js';
export default class NetworkList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            
            
        }
    }
    componentDidMount() {
        
    }
    _renderItem({item},index){
        return <NetworkItem item={item} index={index} navigation={this.props.navigation}></NetworkItem>
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
//
class NetworkItem extends React.Component{
    render(){
        const {navigation}=this.props;
        return(
            <TouchableOpacity style={styles.networkItem} onPress={()=>navigation.push('HomePageDetail')}>
                <Text style={styles.ranking_list_title}>阿里巴巴字体图标库</Text>
                <Text style={styles.ranking_list_desc}>设计师将图标上传到Iconfont平台，用户可以自定义下载多种格式的icon，平台也可将图标转换为字体，便于前端工程师自由调整与调用。</Text>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={styles.ranking_list_label}>来源：网络</Text>
                    <Text style={styles.ranking_list_label}>2019年11月18日</Text>
                </View>
            </TouchableOpacity>
        )
    }
}