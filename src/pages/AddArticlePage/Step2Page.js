/*
 * @Author: your name
 * @Date: 2019-11-04 11:48:35
 * @LastEditTime: 2019-11-15 16:12:42
 * @LastEditors: liyamei
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\HomePage\html.js
 */
import React from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    TouchableHighlight,
    View,
    Text,
    Image,
    TextInput,
    ToastAndroid
} from 'react-native';
import { ScreenHeight, headerHeight, headerPaddingTop, themeColor, borderColor, headerRightMarginRight } from '../../assets/css/common';

import { addButtonStyle } from '../../assets/css/addButtonStyle';


class HeaderComponent extends React.Component{
    render(){
        const {navigation,text}=this.props;
        return(
            <TouchableHighlight
                onPress={() => navigation.state.params.navigatePress()}
                underlayColor={themeColor}
                style={[styles.headerRightButtonBox]}
            >
                <Text style={[styles.headerRightButton]} >{text}</Text>
            </TouchableHighlight>
        )
    }
}

export default class Step2Page extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title:'新增-标题、简介',//navigation.getParam('title', '')
        headerStyle: {
            height: headerHeight,
            paddingTop:headerPaddingTop,
            elevation: 0,  // android去除阴影
            borderBottomWidth:1,
            borderBottomColor:borderColor
        },
        headerRight:<HeaderComponent navigation={navigation} text='下一步'></HeaderComponent>,
    })

    constructor(props) {
        super(props);
        this.state = {
            selectedArr: props.navigation.getParam('selectedArr', []),
            title:"",
            desc:""
        }
        this.next_step=this.next_step.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({ navigatePress: this.next_step});
    }

    next_step(){
        const {selectedArr,title,desc}=this.state;
        let data={
            selectedArr:selectedArr,
            title:title,
            desc:desc
        }
        if(title==''){
            ToastAndroid.show('请输入标题',700);
        }else{
            this.props.navigation.push('Step3Page',{addData:data});
        }
    }
    render() {
        const {  } = this.state;
        return (
            <View style={styles.container}>
                <View style={{
                    width:'100%',
                    paddingLeft: headerRightMarginRight,
                    paddingRight: headerRightMarginRight,
                }}>
                    <View style={styles.line}>
                        <Text style={{ fontSize: 20, width: 60 }}>标题：</Text>
                        <TextInput placeholder='请输入标题' onChangeText={(text)=>this.setState({title:text})} selectionColor={themeColor} style={{ fontSize: 20, flex: 1 }}></TextInput>
                    </View>
                    <View style={[styles.line, { borderBottomWidth: 0, alignItems: "flex-start"}]}>
                        <Text style={{ fontSize: 20, width: 60, height: 49, textAlignVertical: "center" }}>描述：</Text>
                        <TextInput placeholder='请输入描述' onChangeText={(text)=>this.setState({desc:text})} multiline={true} selectionColor={themeColor} style={{ fontSize: 16, flex: 1 }}></TextInput>
                    </View>
                </View>
                <KeyboardAvoidingView behavior="padding" style={{flex:1,justifyContent:"flex-end"}}>
                    <TouchableHighlight
                        style={[styles.selectBtn]}
                        underlayColor={themeColor}
                        onPress={() => this.next_step()}
                    >
                        <Text style={addButtonStyle.selectBtnText}>下一步</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1
    },
    line: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
    },
    selectBtn: {
        width: 280,
        height: 45,
        backgroundColor: themeColor,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        marginBottom:20
    },
    //头部标题栏
    headerRightButtonBox: {
        marginRight: headerRightMarginRight,
        width: 60,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10,
        backgroundColor: themeColor,
    },
    headerRightButton:{
        fontSize:15,
        color:"#fff",
        fontFamily:'iconfont'
    },
})
