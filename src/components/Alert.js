/*
 * @Descripttion: 返回顶部
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-19 13:55:25
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 16:25:23
 */




import React, { Component } from 'react';
import { Modal, StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { borderColor,themeColor,ScreenWidth,ScreenHeight } from '../assets/css/common';
import PropTypes from  'prop-types';
export default class Alert extends React.Component {
    static propTypes={
        modalVisible:PropTypes.bool,
        close_alert:PropTypes.func,
        alert_title_text:PropTypes.string,
        alert_left_button_text:PropTypes.string,
        alert_right_button_text:PropTypes.string
    }
    static defaultProps = {
        modalVisible:false,
        alert_title_text:"删除后无法恢复，确定删除吗？",
        alert_left_button_text:'再想想',
        alert_right_button_text:'确定',
    }
    render() {
        const { modalVisible,alert_title_text,alert_left_button_text,alert_right_button_text } = this.props;
        return (
            <Modal style={styles.container}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => this.props.close_alert()}>
                <View style={styles.alert_conatiner}>
                    <View style={styles.alert_content}>
                        <Text style={styles.alert_title}>{alert_title_text}</Text>
                        <View style={styles.alert_button_conatiner}>
                            <TouchableHighlight underlayColor='#fff' onPress={() => this.props.close_alert(false)} style={styles.alert_button}>
                                <Text style={styles.alert_button_text}>{alert_left_button_text}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor='#fff' onPress={()=>this.props.close_alert(true)} style={[styles.alert_button,{borderLeftWidth:1,}]}>
                                <Text style={[styles.alert_button_text,{color:themeColor}]}>{alert_right_button_text}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    alert_conatiner:{
        backgroundColor:'rgba(0,0,0,0.5)',
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:30,
        paddingRight:30
    },
    alert_content:{
        backgroundColor:'#fff',
        width:'100%',
        borderRadius:12
    },
    alert_title:{
        textAlignVertical:"center",
        textAlign:'center',
        height:70,
        fontSize:16,
        borderBottomWidth:1,
        borderBottomColor:borderColor
    },
    alert_button_conatiner:{
        flexDirection: 'row',
        height:45
    },
    alert_button:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderLeftColor:borderColor
    },
    alert_button_text:{
        fontSize:15
    }
});
