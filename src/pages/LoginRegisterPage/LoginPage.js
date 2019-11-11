/*
 * @Author: your name
 * @Date: 2019-11-04 14:43:55
 * @LastEditTime: 2019-11-04 16:17:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\pages\LoginRegisterPage\LoginPage.js
 */



import React, { Component } from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import {styles} from './style';
import {headerHeight,headerPaddingTop,themeColor} from '../../assets/css/common';
class HeaderComponent extends React.Component{
    render(){
        const {navigation}=this.props;
        return(
            <TouchableHighlight
                onPress={() => navigation.goBack()}
                underlayColor='transparent'
                style={[styles.headerRightButtonBox]}
            >
                <Text style={[styles.headerRightButton]} >{'\ue63b'}</Text>
            </TouchableHighlight>
        )
    }
}
export default class LoginPage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `登录`,
        headerLeft:<HeaderComponent navigation={navigation}></HeaderComponent>,
        headerStyle: {
            height: headerHeight,
            paddingTop:headerPaddingTop,
            elevation: 0,  // android去除阴影
            borderBottomWidth:0,
            backgroundColor:themeColor
        },
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color:"#fff"
        },
    })
    constructor(props) {
        super(props);
        this.state={

        }
    }

    componentDidMount() {
        
    }
    componentWillUnmount() {
    }
    /**
     *输入框值改变
     *
     * @param {*} text 
     * @param {*} index
     * @memberof RegisterPage
     */
    inputChangeText(text,index){
        if(index==1){//手机号

        }else if(index==2){//密码

        }
    }
    /**
     *登录
     *
     * @memberof LoginPage
     */
    login(){

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.pageTop,styles.loginPageTop]}>
                    <View style={styles.pageTopContent}>
                        <View style={[styles.pageTopIconBg,{backgroundColor:"#fff"}]}>
                            <Text style={[styles.pageTopIcon,{color:themeColor}]}>{'\ue67d'}</Text>
                        </View>
                        <Text style={[styles.pageTopText,{color:'#fff'}]}>欢迎加入十佳</Text>
                    </View>
                </View>
                <View style={styles.pageCenter}>
                    <View style={styles.pageCenterLine}>
                        <Text style={styles.ipageCenterIcon}>{'\ue636'}</Text>
                        <TextInput style={styles.pageCenterInput} 
                            selectionColor={themeColor} 
                            keyboardType='numeric'
                            onChangeText={(text)=>this.inputChangeText(text,1)}
                            placeholder='请输入手机号'></TextInput>
                    </View>
                    {/*<View style={styles.pageCenterLine}>
                        <Text style={styles.ipageCenterIcon}>{'\ue606'}</Text>
                        <TextInput style={styles.pageCenterInput} 
                            selectionColor={themeColor}
                            onChangeText={(text)=>this.inputChangeText(text,2)} 
                            placeholder='请输入验证码'></TextInput>
                        <TouchableHighlight style={styles.codeBtn} onPress={()=>this.getAuthCode()} underlayColor={themeColor}>
                            <Text style={styles.codeBtnText}>获取验证码</Text>
                        </TouchableHighlight>
                    </View>*/}
                    <View style={styles.pageCenterLine}>
                        <Text style={styles.ipageCenterIcon}>{'\ue6b1'}</Text>
                        <TextInput style={styles.pageCenterInput} 
                            selectionColor={themeColor} 
                            secureTextEntry={true} 
                            onChangeText={(text)=>this.inputChangeText(text,2)}
                            placeholder='请输入密码'></TextInput>
                    </View>
                    <TouchableHighlight  underlayColor='transparent'>
                        <Text style={styles.forgotPasswordText}>忘记密码？</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.pageCenterLine,styles.registerBtn]} onPress={()=>this.login()} underlayColor={themeColor}>
                        <Text style={styles.registerText}>登录</Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.pageBottom]}>
                    <Text style={styles.pageBottomText}>还没有账户？</Text>
                    <TouchableHighlight style={[styles.pageBottomBtn]} underlayColor='transparent' 
                        onPress={()=>this.props.navigation.navigate('RegisterPage')}>
                        <Text style={styles.pageBottomBtnText}>立即注册</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

