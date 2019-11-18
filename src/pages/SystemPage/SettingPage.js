/*
 * @Descripttion: 设置
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 14:27:43
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-14 17:52:42
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    DeviceEventEmitter,
    View
} from 'react-native';
import {greyBG,RightArrowIcon,headerHeight} from '../../assets/css/common';
import HeaderComponent from '../../components/HeaderComponent';
export default class SettingPage extends Component {
    constructor(props){
        super(props);
        this.state={
            isLogin:false,
        }
    }
    componentDidMount() {
        
    }
    componentWillUnmount() {
        
    }
    
    //退出登录
    logout(){
        
        
    }
    render() {
        const {isLogin}=this.state;
        return (
            <View style={[styles.container,{paddingTop:headerHeight}]}>
                <HeaderComponent
                    barStyle='light-content'
                    titie='设置' 
                    navigation={this.props.navigation}
                    isHeaderRight={false}
                    ></HeaderComponent>
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={()=>this.props.navigation.push('AboutPage')}
                    style={{backgroundColor:'#fff'}}
                >
                    <View style={[styles.setLine]}>
                        <Text style={styles.lineLeft}>其他</Text>
                        <Text style={styles.rightArrow}>{RightArrowIcon}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={this.logout.bind(this)}
                    style={[styles.button]}
                >
                    <Text style={{fontSize:14}}>{isLogin?'点击退出':"点击登录"}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: greyBG,
        paddingTop:10
    },
    setLine:{
        width:'100%',
        height:50,
        borderBottomColor:'#F8F8F8',
        borderBottomWidth:1,
        alignItems:"center",
        flexDirection:"row",
        paddingLeft:20,
        paddingRight:20
    },
    button:{
        justifyContent:"center",
        alignItems:"center",
        width:'100%',
        height:50,
        borderBottomColor:'#F8F8F8',
        borderBottomWidth:1,
        borderTopColor:'#F8F8F8',
        borderTopWidth:1,
        marginTop:60,
        backgroundColor:'#fff'
    },
    lineLeft:{
        flex:1
    },
    rightArrow:{
        fontFamily:"iconfont",
        fontSize:22,
        color:'#C7C7C7'
    }
});
