/*
 * @Descripttion: 我的收藏
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 14:40:27
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-15 16:18:42
 */


import React, { Component } from 'react';
import { Text, FlatList, Image, View,TouchableHighlight} from 'react-native';
import {styles} from './style';
import {listStyles} from '../../assets/css/listStyle';
import HeaderComponent from '../../components/HeaderComponent';
import ArticleListComponent from '../../components/ArticleListComponent';
import {headerHeight} from '../../assets/css/common';
import ArticleList from '../../components/ArticleList';
import {data} from '../HomePage/data';
export default class MyCollectionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    componentDidMount() {
        
    }
    componentWillUnmount() {
    }
    render() {
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
                    renderItem={(item,index)=><ArticleListComponent pageType='MyCollectionPage' item={item.item} index={index} navigation={this.props.navigation} key={index}></ArticleListComponent>}
                >

                </FlatList>
            </View>
        );
    }
}
class CollectionItem extends React.Component{
    render(){
        const {item,index,navigation}=this.props;
        return(
            <View style={[listStyles.collectionItem,{paddingBottom:5}]}>
                <Text style={listStyles.title} >{item.title}</Text>
                <View style={{flexDirection: 'row',alignItems:"center"}}>
                    <Text style={listStyles.label}>{item.label}</Text>
                    <Text style={listStyles.dateTime}>2019年11月04日</Text>
                </View>
            </View>
        )
    }
}
/*class CollectionItem extends React.Component{
    render(){
        const {item,index,navigation}=this.props;
        return(
            <View style={listStyles.collectionItem}>
                <Text style={listStyles.title} numberOfLines={1} >{item.title}</Text>
                <View style={{flexDirection: 'row',}}>
                    <Image source={item.img} style={listStyles.collectionItemLeft} resizeMode='cover'></Image>
                    <View style={listStyles.collectionItemRight}>
                        <Text style={listStyles.content} numberOfLines={3}>{item.content}</Text>
                        <View style={listStyles.collectionItemBottom}>
                            <Text style={listStyles.label}>{item.label}</Text>
                            <TouchableHighlight style={listStyles.detailBtn} underlayColor='#fff' onPress={()=>navigation.push('ContentDetailPage')}>
                                <Text>查看详情 》</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}*/
