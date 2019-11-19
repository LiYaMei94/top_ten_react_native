/*
 * @Descripttion: 我的
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 11:55:53
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-19 13:57:39
 */




import React, { Component } from 'react';
import { 
    Text, 
    StatusBar, 
    ScrollView, 
    View, 
    TouchableHighlight, 
    Dimensions, 
    Animated, 
    DeviceEventEmitter, 
    PanResponder,
    ImageBackground,
    NativeModules } from 'react-native';
import { styles } from './style';
import {RightArrowIcon} from '../../assets/css/common';
import HeadPortraits from '../../components/HeadPortraits';
const lineData=[
    {
        name:'我的兴趣',
        route:'MyInterestPage',
    },
    {
        name:'我的收藏',
        route:'MyCollectionPage'
    },
    {
        name:'我的草稿',
        route:'MyAraftPage'
    },
    /*{
        name:'邀请好友',
        route:''
    },
    {
        name:"关于",
        route:'AboutPage'
    },*/
    {
        name:"设置",
        route:'SettingPage'
    }
]
export default class MinePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isLogin:false
            
        }
    }
    componentDidMount() {
        
    }
    
    render() {
        const {isLogin}=this.state;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/images/mineTopBg.jpg')} style={styles.mine_top}>
                    <HeadPortraits head_portrait={{marginLeft:30}} navigation={this.props.navigation} width={60} height={60} header_img={''} iconStyleFontSize={35}></HeadPortraits>
                    {
                        isLogin ?
                            <View style={styles.mine_top_left}>
                                <Text style={styles.mine_nickname}>辣辣的草莓酱</Text>
                                <Text style={styles.mine_like}>189****7689</Text>
                            </View> :
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.props.navigation.push('LoginPage')}
                                style={[styles.mine_top_left, { justifyContent: "center", }]}
                            >
                                <Text style={[styles.mine_nickname]}>去登录</Text>
                            </TouchableHighlight>
                    }
                </ImageBackground>
                <View style={[styles.mine_content_wrap]}>
                    {
                        lineData.map((item,index)=>{
                            return <Line item={item} index={index} navigation={this.props.navigation} key={index}></Line>
                        })
                    }
                </View>
            </View>

        );
    }
}

class Line extends Component {
    linePress(){
        const {item,index,navigation}=this.props;
        StatusBar.setBarStyle('dark-content');
        navigation.push(item.route,{});
    }
    render(){
        const {item,index,navigation}=this.props;
        //console.log(this.props)
        return(
            <TouchableHighlight 
                style={[styles.mine_content_line,{borderBottomWidth:index==lineData.length-1?0:1,}]} 
                onPress={this.linePress.bind(this)} underlayColor='white'>
                <View style={styles.mine_content_line_wrap}>
                    <Text style={styles.mine_content_line_text}>{item.name}</Text>
                    <Text style={[styles.iconStyle, styles.mine_content_line_icon]}> {RightArrowIcon}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}