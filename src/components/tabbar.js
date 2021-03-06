/*
 * @Descripttion: 底部tab组件
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 12:02:38
 * @LastEditors  : liyamei
 * @LastEditTime : 2020-01-02 11:46:19
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    NativeModules,
    StatusBar
} from 'react-native';

import { ScreenWidth } from '../assets/css/common';

import { BoxShadow } from 'react-native-shadow';
export default class TabbarAddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
    }
    tabItemRender(route, index) {
        const {
            navigation,
            jumpTo,
        } = this.props;
        const focused = index === navigation.state.index;
        const routeName = navigation.state.routes[index].key;
        const color = focused ? this.props.activeTintColor : this.props.inactiveTintColor;
        let TabScene = {
            focused: focused,
            route: route,
            tintColor: color
        };
        //console.log(navigation.state)
        if (index === 2) {
            return (<View
                key={route.key}
                style={[styles.tabItem, { backgroundColor: 'transparent' }]}>
            </View>
            );
        }

        return (
            <TouchableOpacity
                key={route.key}
                style={[styles.tabItem]}
                onPress={() => {
                    //console.log(routeName)
                    if(routeName=='我的'){
                        StatusBar.setBarStyle('light-content');
                    }else{
                        StatusBar.setBarStyle('dark-content');
                    }
                    jumpTo(routeName);
                }}
                onLayout={(e) => {
                    NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
                    })
                }}
            >
                <View
                    style={styles.tabItem}>
                    {this.props.renderIcon(TabScene)}
                    <Text style={{ ...styles.tabText, marginTop: 5, color }}>{this.props.getLabelText(TabScene)}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        const { navigation, jumpTo } = this.props;
        const { routes } = navigation.state;
        const focused = 2 === navigation.state.index;
        const color = focused ? this.props.activeTintColor : this.props.inactiveTintColor;
        const BoxShadowColor = focused ? this.props.activeTintColor : '#ccc';
        let TabScene = {
            focused: focused,
            route: routes[2],
            tintColor: color
        };
        //console.log(navigation)
        return (
            <View style={{ width: ScreenWidth }}>
                {/**其他tab */}
                <View style={styles.tab}>
                    {routes && routes.map((route, index) => this.tabItemRender(route, index))}
                </View>
                {/**中间凸起的tab */}
                <TouchableOpacity
                    key={"centerView"}

                    style={[styles.tabItem, { position: 'absolute', bottom: 12, left: ScreenWidth / 5 * 2, width: ScreenWidth / 5 }]}
                    onPress={() => {
                        StatusBar.setBarStyle('dark-content');
                        navigation.push('AddArticlePage',{title:'新增——选择标签',isAdd:true})}}
                >
                    <View
                        style={styles.tabItem}>
                        {/*this.props.renderIcon(TabScene)*/}
                        <BoxShadow
                            setting={{
                                width: 50,
                                height: 50,
                                color: BoxShadowColor,
                                border: 4,
                                radius: 25,
                                opacity: 0.4,
                                x: 1,
                                y: 1,
                                style: { marginLeft: -2 }
                            }}>
                            <Text style={[styles.addButton, { color: color }]}>{'\ue60c'}</Text>
                        </BoxShadow>
                        <Text style={{ ...styles.tabText, marginTop: 5, color, width: '100%', textAlign: "center" }}>{this.props.getLabelText(TabScene)}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        width: '100%',
        backgroundColor: 'white',
        position: "relative",
        bottom: 0,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        borderTopColor: "#eeeeee",
        borderTopWidth: 1
    },
    tabItem: {
        flex: 1,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
    },
    addButton: {
        fontFamily: "iconfont",
        width: 50,
        height: 50,
        borderRadius: 50,
        textAlign: "center",
        lineHeight: 50,
        fontSize: 24,
        backgroundColor: "#fff",
        marginTop: 1,
        marginLeft: 1
    }
});
