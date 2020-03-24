/*
 * @Descripttion: 公共样式表
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 11:54:44
 * @LastEditors  : liyamei
 * @LastEditTime : 2020-01-02 11:47:43
 */


import React, { Component } from 'react';
import { StatusBar, Platform, Dimensions } from "react-native";
//判断手机设备
// iPhone X、iPhone XS
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhone XR、iPhone XS Max
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const DEVICE_SIZE = Dimensions.get('window');
const { height: D_HEIGHT, width: D_WIDTH } = DEVICE_SIZE;

export const isiOS = () => Platform.OS === 'ios'

export const isiPhoneX = () => {
    return (
        isiOS() &&
        ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
            (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT)) ||
        ((D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
            (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT))
    );
};

//获取状态栏的高度
export const STATUS_BAR_HEIGHT = isiOS() ? (isiPhoneX() ? 34 : 20) : StatusBar.currentHeight;

export const headerHeight = STATUS_BAR_HEIGHT + 44;//标题栏的高度
export const headerPaddingTop = STATUS_BAR_HEIGHT;//标题栏的paddingtop
export const headerRightMarginRight = 15;//标题栏右边按钮距边界的距离


export const Size = Dimensions.get('window');
export const ScreenWidth = Size.width;
export const ScreenHeight = Size.height;


export const borderColor = '#EEEDEB';

export const greyBG = '#F3F3F3';

//export const themeColor = '#4f77e6';//紫色
//export const themeColorGgba = 'rgba(79,119,230,0.8)';//紫色

export const themeColor = '#66AF9E';//绿色
export const themeColorGgba = 'rgba(102,175,158,0.8)';//绿色

export const RightArrowIcon='\ue770';

export const headerStyle={//标题栏样式
    height: headerHeight,
    paddingTop: headerPaddingTop,
    elevation: 0,  // android去除阴影
    backgroundColor:"#fff",
    borderBottomWidth:1,
    borderBottomColor:borderColor
}

export const headerTitleStyle={//标题栏标题样式
    fontWeight: 'normal',
    fontSize:18
}

export const headerTintColor='#666';//标题栏标题颜色

export const tabBarOptions={//底部导航栏样式
    //activeTintColor: '#777',
	//inactiveTintColor: '#b2bec6',
	activeTintColor: themeColor,
    inactiveTintColor: '#b2bec6',
    style: {
        backgroundColor: '#CDDFEA',
        borderTopColor: "transparent"
    },
}
export const globalStyle = {
    iconFont: {
        fontFamily: 'iconfont',
    }
}