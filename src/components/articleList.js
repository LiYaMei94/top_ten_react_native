
import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    TouchableHighlight,
    Dimensions,
    Animated,
    DeviceEventEmitter,
    PanResponder,
    Image,
    NativeModules
} from 'react-native';
import {themeColor} from '../assets/css/common';
const article_img_height=180;
export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    componentDidMount() {
    }

    render() {
        const { index, item, lenght,navigation,isList,} = this.props;
        return (
            <View style={[styles.articleItem, { }]}>
                <TouchableHighlight
                    onPress={()=>navigation.push('ContentDetailPage',{classifyIndex:1})}
                    underlayColor='transparent'
                >
                    <View>
                        {
                            item.listImg.length!=0?
                            <View style={styles.article_img_conatiner}>
                                <View style={[styles.article_img_left,{flex:item.listImg.length==2?1:1.8}]}>
                                    <Image resizeMode='cover' style={[styles.article_img, { 
                                        borderTopLeftRadius: 15, borderBottomLeftRadius: 15,
                                        borderTopRightRadius: item.listImg.length==1?15:0, 
                                        borderBottomRightRadius: item.listImg.length==1?15:0,
                                        }]} 
                                        source={{uri:item.listImg[0]}}></Image>
                                </View>
                                <View style={[styles.article_img_right,{flex:item.listImg.length==1?0:item.listImg.length==2?1:1.2}]}>
                                    <Image resizeMode='cover' 
                                        style={[styles.article_img, { 
                                            height:item.listImg.length==2?'100%': (article_img_height-3)/2, 
                                            marginBottom: 3, borderTopRightRadius: 15,
                                            borderBottomRightRadius: item.listImg.length==2?15:0,
                                            }]} 
                                        source={{uri:item.listImg[1]}}></Image>
                                    <Image resizeMode='cover' 
                                        style={[styles.article_img, { height:  (article_img_height-3)/2, borderBottomRightRadius: 15 }]} 
                                        source={{uri:item.listImg[2]}}></Image>
                                </View>
                                <Text style={styles.imgNum}>{item.listImg.length}</Text>
                            </View>:null
                        }
                        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.article_desc}>{item.title}</Text>
                        <Text style={[styles.article_info,{color:themeColor}]}>{item.label}</Text>
                        <View style={{flexDirection:"row"}}>
                            <Text style={[styles.article_info,{flex:1}]}>2019年11月7日</Text>
                            <TouchableHighlight style={styles.likeBtn} underlayColor='#fff' onPress={() => this.props.like(item, index)}>
                                <Text style={[styles.likeBtnIcon, { color: item.isLike == 1 ? "#FF3421" : '#999' }]}>{item.isLike == 1 ? '\ue6a1' : '\ue69d'}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    //展览列表
    articleItem: {
        width: '100%',
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom:10
    },
    article_img_conatiner: {
        width: '100%',
        flexDirection: "row",
        position:"relative"
    },
    article_img_left: {
        flex: 1.8,
        marginRight: 3,
        height: article_img_height
    },
    article_img_right: {
        flex: 1.2,
        height: article_img_height,

    },
    article_img: {
        width: '100%',
        height: article_img_height
    },
    article_desc: {
        fontSize: 16,
        lineHeight: 20,
        marginTop: 10
    },
    article_info: {
        color: '#A4A8AF',
        fontSize: 14,
        marginTop: 5
    },
    //标题
    content_title: {
        width: '100%',
        textAlign: "center",
        lineHeight: 50,
        fontSize: 16
    },
    //图片数量
    imgNum:{
        borderRadius:10,
        backgroundColor:"rgba(0,0,0,0.5)",
        color:'#fff',
        position:"absolute",
        minHeight:23,
        minWidth:23,
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:16,
        right: 10,
        bottom:10,
        paddingLeft:5,
        paddingRight:5,
    },
    likeBtn:{
        width:25,
        height:25,
        justifyContent:"center",
        alignItems:"center",
    },
    likeBtnIcon:{
        fontFamily: 'iconfont',
        fontSize:19,
    },
});