/*
 * @Descripttion: 头像组件
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 14:17:26
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-14 19:14:33
 */



import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import PropTypes from  'prop-types';
export default class HeadPortraits extends Component {
    static propTypes={
        header_img:PropTypes.string,
        width:PropTypes.number,
        height:PropTypes.number,
        iconStyleFontSize:PropTypes.number,
        iconStyleFontColor:PropTypes.string,
        navigation:PropTypes.object,
        head_portrait:PropTypes.object,
        _onPress:PropTypes.func
    }
    static defaultProps = {
        header_img:'',//头像地址
        width:50, //头像大小
        height:50,//头像大小
        iconStyleFontSize:24,//没有图片时字体图标的大小
        iconStyleFontColor:'#9D9D9D'//没有图片时字体图标的颜色
    }
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    componentDidMount(){
        
    }
    _onPress(){
        const {navigation}=this.props;
        if(this.props._onPress){
            this.props._onPress();
        }
    }
    render() {
        const { header_img, navigation, width, height, iconStyleFontSize,head_portrait,iconStyleFontColor} = this.props;
        return (
            <TouchableHighlight
                underlayColor='#E0E0E0'
                activeOpacity={1}
                onPress={()=>this._onPress()}
                style={[styles.head_portrait,head_portrait, { width: width, height: height }]}
            >
                {//<Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={{uri:header_img}}></Image>
                    //header_img != '' ?
                    header_img != '' ?
                        <Image style={{ width: '100%', height: '100%', borderRadius: 50 }} source={require('../assets/images/header.jpg')}></Image>
                        : <Text style={[styles.iconStyle, { fontSize: iconStyleFontSize, color:iconStyleFontColor  }]}>{'\ue67d'}</Text>
                }
            </TouchableHighlight>
        );
    }

};

const styles = StyleSheet.create({
    head_portrait: {
        backgroundColor: '#E0E0E0',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        //borderWidth:1,
    },
    iconStyle: {
        fontFamily: "iconfont",
        fontSize: 30,
    },
});

