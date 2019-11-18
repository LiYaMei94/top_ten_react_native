/*
 * @Descripttion: 添加评论
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-15 14:13:07
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-18 15:56:14
 */




import React, { Component } from 'react';
import { Text, TextInput, TouchableHighlight, View ,KeyboardAvoidingView} from 'react-native';
import {styles} from './style';
import {headerHeight,headerPaddingTop,borderColor,themeColor,} from '../../assets/css/common';
class HeaderComponent extends React.Component{
    render(){
        const {navigation,text}=this.props;
        return(
            <TouchableHighlight
                onPress={() => {
                    text=='发布'?navigation.state.params.navigatePress():navigation.goBack();
                }}
                underlayColor='transparent'
                style={[styles.headerRightButtonBox]}
            >
                <Text style={[styles.headerRightButton,{color:text=='发布'?themeColor:'#666'}]} >{text}</Text>
            </TouchableHighlight>
        )
    }
}
export default class AddCommentPage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title:'',//navigation.getParam('title', '')
        headerStyle: {
            height: headerHeight,
            paddingTop:headerPaddingTop,
            elevation: 0,  // android去除阴影
            borderBottomWidth:1,
            borderBottomColor:borderColor
        },
        headerRight:<HeaderComponent navigation={navigation} text='发布'></HeaderComponent>,
        headerLeft:<HeaderComponent navigation={navigation} text='取消'></HeaderComponent>
    })
    constructor(props) {
        super(props);
        this.state={
            commentInput:''
        }
        this._release=this._release.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({ navigatePress: this._release});
    }
    componentWillUnmount() {
    }
    _release(){
        console.log(this.state.commentInput)
        this.props.navigation.navigate('ContentDetailPage')
    }
    render() {
        const {}=this.state;
        return (
            <View  style={styles.container}>
               
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TextInput 
                        onChangeText={(text)=>this.setState({commentInput:text})}
                        selectionColor={themeColor}
                        multiline={true}
                        placeholder='友善评论、理性发言、阳光心灵'
                        //autoFocus={true}
                        style={styles.textInput}></TextInput>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

