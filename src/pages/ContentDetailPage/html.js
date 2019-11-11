/*
 * @Author: your name
 * @Date: 2019-11-04 11:48:35
 * @LastEditTime: 2019-11-07 16:06:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\HomePage\html.js
 */


import React, { Component } from 'react';
import { Text, ScrollView, TouchableHighlight, View } from 'react-native';
import {styles} from './style';
import {headerHeight,headerPaddingTop,borderColor} from '../../assets/css/common';
import { WebView } from "react-native-webview";
import {HTML1,HTML2} from './HTML/index';
class HeaderComponent extends React.Component{
    render(){
        const {navigation}=this.props;
        return(
            <TouchableHighlight
                onPress={() => {
                    //navigation.state.params.navigatePress()
                }}
                underlayColor='transparent'
                style={[styles.headerRightButtonBox]}
            >
                <Text style={[styles.headerRightButton]} >{'\ue69d'}</Text>
            </TouchableHighlight>
        )
    }
}
export default class ContentDetailPage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title:'内容详情',//navigation.getParam('title', '')
        headerStyle: {
            height: headerHeight,
            paddingTop:headerPaddingTop,
            elevation: 0,  // android去除阴影
            borderBottomWidth:1,
            borderBottomColor:borderColor
        },
        headerRight:<HeaderComponent navigation={navigation}></HeaderComponent>
    })
    constructor(props) {
        super(props);
        this.state={
            classifyIndex:props.navigation.getParam('classifyIndex', 0)
        }
    }

    componentDidMount() {
        
    }
    componentWillUnmount() {
    }
    render() {
        const {classifyIndex}=this.state;
        return (
            <View showsVerticalScrollIndicator={false} style={styles.container}>
                <WebView
                    source={{html:classifyIndex==0?HTML1:HTML2}}
                    style={{ flex:1 }}
                    //onLoadProgress={e => console.log(e.nativeEvent.progress)}
                />
            </View>
        );
    }
}

