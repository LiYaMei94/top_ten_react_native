/*
 * @Descripttion: 评论列表组件
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-18 14:44:15
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-18 15:02:17
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native';
import {themeColor} from '../assets/css/common';
import HeadPortraits from './head_portraits';
export default class CommentItem extends Component {
    static defaultProps = {
        
    }

    constructor(props){
        super(props);
        this.state={
        }
    }
    
    componentDidMount(){
       
    }
    render() {
        const { item, navigation, CommentItemStyle } = this.props;
        //console.warn(item)
        return (
            <TouchableHighlight
                underlayColor='transparent'
                onPress={() => {}}//navigation.push('RumorDetail')
            >
                <View style={[styles.comment_item, CommentItemStyle]} >
                    <View style={styles.publish_comment}>
                        <HeadPortraits header_img='' navigation={navigation} width={30} height={30} iconStyleFontSize={16}></HeadPortraits>
                        <Text style={[styles.add_comment_button, { fontSize: 15,color:themeColor }]}>用户昵称</Text>
                    </View>
                    <Text style={styles.comment_text}>星鼻鼹是一种生长于北美洲东部、加拿大东部及美国东北部都有发现的小鼹。是星鼻鼹族及星鼻鼹属的唯一成员。</Text>
                </View>
            </TouchableHighlight>
        );
    }

};

const styles = StyleSheet.create({
    //评论
    article_comments: {
        borderTopColor: '#F6F6F6',
        borderTopWidth: 1,
        paddingBottom: 40,
        paddingTop: 35,
    },
    comment_item: {
        marginTop: 20
    },
    publish_comment: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    add_comment_button: {
        color: '#B9B9B9',
        fontSize: 13,
    },
    comment_text: {
        fontSize: 14,
        color: '#272727',
        lineHeight: 24,
        marginTop: 5
    },
});

