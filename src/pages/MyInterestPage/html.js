/*
 * @Descripttion: 我的兴趣
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 14:38:23
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 12:11:02
 */



import React, { Component } from 'react';
import { Text, TouchableHighlight, StatusBar, View, Modal, TextInput, KeyboardAvoidingView,ToastAndroid } from 'react-native';
import { styles } from './style';
import { addButtonStyle } from '../../assets/css/addButtonStyle';
import { label } from './label';
import { themeColor, headerHeight, headerPaddingTop, ScreenHeight, ScreenWidth } from '../../assets/css/common';
import HeaderComponent from '../../components/HeaderComponent';
import ThemeColorButton from '../../components/ThemeColorButton';
export default class MyInterestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labelArr: label,
            selectedArr: [],
            isAdd: props.navigation.getParam('isAdd', false),//是否是从添加进入的
            isShowAddLabelModal: false
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.updateSelected();
    }
    componentWillUnmount() {
    }
    /**
     *更新选择的数组
     *
     * @memberof MyInterestPage
     */
    updateSelected() {
        const { labelArr } = this.state;
        let temp = [];
        for (var i = 0; i < labelArr.length; i++) {
            if (labelArr[i].isSelected) {
                if (temp.indexOf(labelArr[i].name) == -1) {
                    temp.push(labelArr[i].name);
                }
            }
        }
        this.setState({
            selectedArr: temp
        })
    }
    /**
     *选择标签
     *
     * @param {*} item
     * @param {*} index
     * @memberof MyInterestPage
     */
    selected(item, index) {
        this.state.labelArr[index].isSelected = !this.state.labelArr[index].isSelected;
        this.setState({
            labelArr: this.state.labelArr,
        }, () => {
            this.updateSelected();
        })
    }
    /**
     *保存选择
     *
     * @memberof MyInterestPage
     */
    saveSelected() {
        if (this.state.isAdd) {
            if(this.state.selectedArr.length==0){
                ToastAndroid.show('请选择标签',700);
            }else{
                this.props.navigation.push('Step2Page', { selectedArr: this.state.selectedArr })
            }
        } else {

        }
        console.log(this.state.selectedArr)
    }
    render() {
        const { labelArr, selectedArr, isAdd, isShowAddLabelModal } = this.state;
        return (
            <View style={[styles.container,{paddingTop:headerHeight}]}>
                <HeaderComponent
                    barStyle='light-content'
                    titie={this.props.navigation.getParam('title', '我的兴趣')} 
                    navigation={this.props.navigation}
                    rightPress={this.saveSelected.bind(this)}
                    isHeaderRight={true}
                    rightText={isAdd ? '下一步' : '保存'}></HeaderComponent>
                <View style={{ width: ScreenWidth, height: (ScreenHeight-headerHeight), alignItems: "center" }}>
                    <View style={styles.labelContainer}>
                        {
                            labelArr.map((item, index) => {
                                return (
                                    <TouchableHighlight
                                        style={[styles.labelItem, item.isSelected ? styles.selectedLabelItem : {}]}
                                        key={index}
                                        underlayColor={item.isSelected?'#fff':themeColor}
                                        onPress={() => this.selected(item, index)}>
                                        <Text style={[styles.labelItemText, item.isSelected ? styles.selectedLabelItemText : {}]}>{item.name}</Text>
                                    </TouchableHighlight>
                                )
                            })
                        }
                        {
                            isAdd?
                            <TouchableHighlight
                                style={[styles.labelItem, styles.selectedLabelItem]}
                                underlayColor={themeColor}
                                onPress={() => this.setState({ isShowAddLabelModal: true })}>
                                <Text style={[styles.labelItemText, styles.selectedLabelItemText]}>新增标签</Text>
                            </TouchableHighlight>:null
                        }
                    </View>
                    <ThemeColorButton buttonIcon={`确定（${selectedArr.length}/${labelArr.length}）`} 
                        optionButton={{position:'absolute',bottom:30}} 
                        buttonPress={this.saveSelected.bind(this)}></ThemeColorButton>
                    {/*<TouchableHighlight
                        style={[addButtonStyle.selectBtn, {}]}
                        underlayColor={themeColor}
                        onPress={() => this.saveSelected()}
                    >
                        <Text style={addButtonStyle.selectBtnText}>{isAdd ? "下一步" : "确定"}（{selectedArr.length}/{labelArr.length}）</Text>
                    </TouchableHighlight>*/}
                </View>
                {/**新增标签弹窗 */}
                {/*<Modal visible={isShowAddLabelModal} transparent={true} onRequestClose={() => this.setState({ isShowAddLabelModal: false })}>
                    <View style={styles.AddLabelContainer}>
                        <KeyboardAvoidingView behavior='padding' style={{flex: 1,justifyContent:"center"}}>
                            <View style={styles.AddLabel}>
                                <Text style={styles.addLableTitle}>新增标签</Text>
                                <TextInput onChangeText={(text) => {
                                    labelArr.push({
                                        name: text,
                                        isSelected: false
                                    })
                                }} style={styles.addLableInput} placeholder='请输入标签名'></TextInput>
                                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 25 }}>
                                    <TouchableHighlight
                                        style={[styles.addCancelBtn, { marginRight: 50 }]}
                                        underlayColor={themeColor}
                                        onPress={() => this.setState({ labelArr: labelArr, isShowAddLabelModal: false })}
                                    >
                                        <Text style={addButtonStyle.selectBtnText}>添加</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={[styles.addCancelBtn, {}]}
                                        underlayColor={themeColor}
                                        onPress={() => this.setState({ isShowAddLabelModal: false })}
                                    >
                                        <Text style={addButtonStyle.selectBtnText}>取消</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </Modal>*/}
            </View>
        );
    }
}

