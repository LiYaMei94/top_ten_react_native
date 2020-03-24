/*
 * @Descripttion: 文章列表
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-07 11:22:27
 * @LastEditors  : liyamei
 * @LastEditTime : 2020-01-02 11:47:16
 */

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
    TouchableOpacity,
    Image,
    NativeModules
} from 'react-native';
import { themeColor, ScreenWidth } from '../assets/css/common';
import PropTypes from 'prop-types';
const article_img_Size = (ScreenWidth - 50) / 3;
export default class ArticleListComponent extends React.Component {
    static propTypes = {
        index: PropTypes.number,
        item: PropTypes.object,
        navigation: PropTypes.object,
        like: PropTypes.func,
        pageType: PropTypes.string
    }
    static defaultProps = {
        pageType: 'homePage'
    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
    }

    render() {
        const { item:{item}, navigation, pageType, } = this.props;
        return (
            <View style={[styles.articleItem, {}]}>
                <TouchableHighlight
                    onPress={() => navigation.push('HomePageDetail', { classifyIndex: 1 })}
                    underlayColor='transparent'
                >
                    <View>
                        <View style={[styles.article_content, { flexDirection: item.listImg.length == 1 ? "row" : "column" }]}>
                            <View style={{}}>
                                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.article_title}>{item.title}</Text>
                                {
                                    item.listImg.length == 1 ?
                                        <View style={[styles.user_action,{alignItems:"flex-end",flex:1}]}>
                                            <Text style={[styles.user_action_item, {color:'#999',textAlignVertical:"center"}]}>来源：网络</Text>
                                            <Text style={[styles.user_action_item, { textAlign: "center",color:'#999',textAlignVertical:"center" }]}>3个喜欢</Text>
                                            {
                                                /*pageType!='MyCollectionPage'?
                                                <TouchableHighlight style={[styles.user_action_item,{}]} underlayColor='#fff' onPress={() => this.props.like(item, index)}>
                                                    <Text style={[styles.likeBtnIcon, { color: item.isLike == 1 ? "#FF3421" : '#999' }]}>{item.isLike == 1 ? '\ue6a1' : '\ue69d'}</Text>
                                                </TouchableHighlight>:null*/
                                            }
                                            {
                                                pageType != 'MyCollectionPage' ?
                                                    <TouchableHighlight style={[styles.user_action_item, { alignItems: "flex-end" }]} underlayColor='#fff' onPress={() => { }}>
                                                        <Text style={[styles.likeBtnIcon, { color: item.isLike == 1 ? "#FF3421" : '#999' }]}>{'\ue62b'}</Text>
                                                    </TouchableHighlight> : null
                                            }
                                        </View>
                                        : null
                                }
                            </View>
                            {
                                item.listImg.length != 0 ?
                                    <View style={[styles.article_img, { marginLeft: item.listImg.length == 1 ? 10 : 0 }]}>
                                        {
                                            item.listImg.slice(0, 3).map((item, index) => {
                                                return (
                                                    <View style={[styles.img_item, { marginRight: index == 2 ? 0 : 5, }]} key={index}>
                                                        <Image resizeMode='cover' style={styles.img} source={{ uri: item }}></Image>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View> : null
                            }
                        </View>
                        {/*<Text numberOfLines={2} ellipsizeMode='tail' style={styles.article_desc}>{item.desc}</Text>*/}
                        { /*<Text style={[styles.article_info,{color:themeColor}]}>{item.label}</Text>*/}
                        {
                            item.listImg.length != 1 ?
                                <View style={styles.user_action}>
                                    <Text style={[styles.user_action_item, {color:'#999',textAlignVertical:"center"}]}>来源：网络</Text>
                                    <Text style={[styles.user_action_item, { textAlign: "center",color:'#999',textAlignVertical:"center" }]}>3个喜欢</Text>
                                    {
                                        /*pageType!='MyCollectionPage'?
                                        <TouchableHighlight style={[styles.user_action_item,{}]} underlayColor='#fff' onPress={() => this.props.like(item, index)}>
                                            <Text style={[styles.likeBtnIcon, { color: item.isLike == 1 ? "#FF3421" : '#999' }]}>{item.isLike == 1 ? '\ue6a1' : '\ue69d'}</Text>
                                        </TouchableHighlight>:null*/
                                    }
                                    {
                                        pageType != 'MyCollectionPage' ?
                                            <TouchableHighlight style={[styles.user_action_item, { alignItems: "flex-end" }]} underlayColor='#fff' onPress={() => { }}>
                                                <Text style={[styles.likeBtnIcon, { color: item.isLike == 1 ? "#FF3421" : '#999' }]}>{'\ue62b'}</Text>
                                            </TouchableHighlight> : null
                                    }
                                </View> : null
                        }
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
        marginBottom: 10,
    },
    article_content: {
    },
    article_title: {
        fontSize: 17,
        color: '#333',
        lineHeight: 20,
        marginTop: 10
    },
    article_desc: {
        fontSize: 14,
        lineHeight: 20,
        marginTop: 10
    },
    article_img: {
        flexDirection: "row",
        marginTop: 10
    },
    img_item: {
        width: article_img_Size,
        height: article_img_Size-20
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    user_action: {
        width: '100%',
        height: 40,
        flexDirection: "row",
        alignItems: "center"
    },
    user_action_item: {
        flex: 1,
        alignItems: "center",
        height:40,
        justifyContent:"center"
    },

    article_info: {
        //color: '#A4A8AF',
        fontSize: 14,
        marginTop: 5
    },

    likeBtnIcon: {
        fontFamily: 'iconfont',
        fontSize: 15,
    },
});