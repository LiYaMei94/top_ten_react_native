/*
 * @Descripttion: 列表尾部组件
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-06 17:16:10
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-21 14:52:01
 */


import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableHighlight,
    View,
    Image,
    LayoutAnimation,
    Modal,
    UIManager,
    Animated
} from 'react-native';

import { ScreenWidth, ScreenHeight, greyBG, themeColor, headerHeight,headerRightMarginRight} from '../assets/css/common';
import Loading from './Loading';
import PropTypes from  'prop-types';
export default class ListFooterComponent extends React.Component {
	static propTypes={
		isLoadMore:PropTypes.bool,
		navigation:PropTypes.object,
		
    }
	static defaultProps = {
		isLoadMore: false,
    }
    constructor(props) {
        super(props);
        this.state = {
			isMore: true,
			routeName:props.navigation.state.routeName
		}
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
		const { isLoadMore, navigation } = this.props;
		const {routeName}=this.state;
		//console.log(routeName)
        if (isLoadMore) {
            return (
                <View style={styles.container} >
                    <Loading optionContainer={{backgroundColor:routeName =='HomePageDetail'?'#fff':greyBG}} spinkerSize={25} spinkerColor='#666'></Loading>
                </View>
            );
        } else {
            return (
                <View style={styles.container} >
                    <Text style={{ height: 40, lineHeight: 40 }}>没有更多了~</Text>
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        width: '100%',
		paddingBottom: 25,
    },
    Icon: {
        fontFamily: 'iconfont',
        fontSize: 24,
        color: '#666'
    }
});