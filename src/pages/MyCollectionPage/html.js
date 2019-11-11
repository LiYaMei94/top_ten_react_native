/*
 * @Author: your name
 * @Date: 2019-11-04 11:48:35
 * @LastEditTime: 2019-11-06 15:59:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\HomePage\html.js
 */


import React, { Component } from 'react';
import { Text, FlatList, Image, View,TouchableHighlight} from 'react-native';
import {styles} from './style';
import {listStyles} from '../../assets/css/listStyle';
const data=[
    {
        title:'故宫博物院',
        img:require('../../assets/images/list1.jpeg'),
        label:'景点',
        content:'故宫又称紫禁城，是明、清两代的皇宫，也是古老中国的标志和象征。虽说这里早已不再是中国的政治中心，能真切地感受到它曾经的荣耀。悠久的历史给这里留下了大规模的珍贵建筑和无数文物，也成为今天游玩故宫的主要看点。'
    },
    {
        title:'故宫博物院',
        img:require('../../assets/images/list1.jpeg'),
        label:'景点',
        content:'故宫又称紫禁城，是明、清两代的皇宫，也是古老中国的标志和象征。虽说这里早已不再是中国的政治中心，能真切地感受到它曾经的荣耀。悠久的历史给这里留下了大规模的珍贵建筑和无数文物，也成为今天游玩故宫的主要看点。'
    }
]
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
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item,index)=>index+''}
                    showsVerticalScrollIndicator={false}
                    renderItem={(item,index)=><CollectionItem item={item.item} index={index} navigation={this.props.navigation} key={index}></CollectionItem>}
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
