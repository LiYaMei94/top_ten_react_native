/*
 * @Author: your name
 * @Date: 2019-11-04 11:53:57
 * @LastEditTime: 2019-11-11 17:32:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\router.js
 */

import React, { Component } from 'react';
import { Easing, Animated,Text,StyleSheet ,View} from "react-native";
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {headerStyle,headerTitleStyle,tabBarOptions,headerTintColor} from './assets/css/common';

//路由文件

import HomePage from './pages/HomePage/html';
import MyList from './pages/MyList/html';
import NetworkList from './pages/NetworkList/html';
import MinePage from './pages/MinePage/html';
import AddArticlePage from './pages/AddArticlePage/html';
import Step2Page from './pages/AddArticlePage/Step2Page';
import Step3Page from './pages/AddArticlePage/Step3Page';


import MyInterestPage from './pages/MyInterestPage/html';
import MyCollectionPage from './pages/MyCollectionPage/html';
import LoginPage from './pages/LoginRegisterPage/LoginPage';
import RegisterPage from './pages/LoginRegisterPage/RegisterPage';
import ContentDetailPage from './pages/ContentDetailPage/html';

import AboutPage from './pages/SystemPage/AboutPage';
import SettingPage from './pages/SystemPage/SettingPage';
import UserAgreement from './pages/SystemPage/UserAgreement';


//路由组件
import Tab from './components/tabbar';

//底部tabbar的图标
const getTabBarIcon = (navigation, focused, tintColor) => {
    let msg=navigation.getScreenProps().msg;
    //console.log(msg)
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === '首页') {
        iconName = '\ue605';
    }else if (routeName === '网榜') {
        iconName = '\ue610';
    }else if (routeName === '新增') {
        iconName = '';
    }else if (routeName === '个榜') {
        iconName = '\ue769';
    }else{
        iconName = '\ue6a5';
    }
    return (
        <View>
            {
                msg > 0 && routeName=='个榜' ?
                    <View style={{
                        width:7,
                        height:7,
                        justifyContent:"center",
                        position: 'absolute',
                        zIndex: 9,
                        backgroundColor: "red",
                        borderRadius:6,
                        right:0,
                        top:-0.5,
                    }}>
                    </View> : null
            }
            <Text style={[styles.iconStyle,{color:tintColor}]}>{iconName}</Text>
        </View>
    );
};


//底部tabbar
const TabNavigator = createBottomTabNavigator(
    {
        
        
        首页: createStackNavigator(
            {
                HomePage: {
                    screen: HomePage,
                    navigationOptions: {
                        header: null,
                    },
                },
            }
        ),
        网榜: createStackNavigator(
            {
                NetworkList: {
                    screen: NetworkList,
                    navigationOptions: {
                        title: '网榜',
                        headerStyle:headerStyle,
                        headerTitleStyle:headerTitleStyle
                    },
                },
            }
        ),
        新增: createStackNavigator(
            {
                AddArticle: {
                    screen: AddArticlePage,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
        个榜: createStackNavigator(
            {
                MyList: {
                    screen: MyList,
                    navigationOptions: {
                        title: '个榜',
                        headerStyle:headerStyle,
                        headerTitleStyle:headerTitleStyle
                    },
                },
            }
        ),
        我的: createStackNavigator(
            {
                MinePage: {
                    screen: MinePage,
                    navigationOptions: {
                        header: null,
                    },
                }
            }
        ),
        
    },
    {
        defaultNavigationOptions: ({ navigation }) => (
            {
                tabBarIcon: ({ focused, tintColor }) =>
                    getTabBarIcon(navigation, focused, tintColor),
            }
        ),
        tabBarComponent:Tab,
        tabBarOptions:tabBarOptions
    }
);

//创建全局导航器createStackNavigator
const router = createStackNavigator(
    {
        bottomTabNavigator: {
            screen: TabNavigator,
            navigationOptions: {
                header: null,
            },
        },
        RegisterPage:RegisterPage,
        LoginPage:LoginPage,
        AddArticlePage:{
            screen: AddArticlePage,
            navigationOptions: {
                header: null,
            },
        },
        Step2Page:{
            screen: Step2Page,
            navigationOptions: {
                header: null,
            },
        },
        Step3Page:{
            screen: Step3Page,
            navigationOptions: {
                header: null,
            },
        },
        ContentDetailPage:ContentDetailPage,
        MyInterestPage:{
            screen: MyInterestPage,
            navigationOptions: {
                header: null,
            },
        },
        MyCollectionPage:{
            screen: MyCollectionPage,
            navigationOptions: {
                title: '我的收藏',
            },
        },
        AboutPage:{
            screen: AboutPage,
            navigationOptions: {
                title: '关于 | 十佳',
            },
        },
        UserAgreement:{
            screen: UserAgreement,
            navigationOptions: {
                title: '用户协议',
            },
        },
        SettingPage:{
            screen: SettingPage,
            navigationOptions: {
                title: '设置',
            },
        }
    },
    {
        initialRouteName: "bottomTabNavigator",
        mode: 'modal',
        defaultNavigationOptions: {
            headerStyle:headerStyle,
            headerTitleStyle:headerTitleStyle,
            headerTintColor: headerTintColor,
        },
    }
)

export const AppContainer = createAppContainer(router);
const styles = StyleSheet.create({
    iconStyle:{
        fontFamily: "iconfont",
        fontSize: 25,
    }
})