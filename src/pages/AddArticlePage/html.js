/*
 * @Author: your name
 * @Date: 2019-11-04 11:48:35
 * @LastEditTime: 2019-11-18 18:52:55
 * @LastEditors: liyamei
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\HomePage\html.js
 */
import React from 'react';
import {
    Button,
    LayoutAnimation,
    UIManager,
    SafeAreaView,
    ScrollView,
    TouchableHighlight,
    View,
    Text,
    Keyboard,
    Image,
    TextInput
} from 'react-native';
import { styles } from './style';
import {ScreenHeight,headerHeight,headerPaddingTop,themeColor,headerRightMarginRight,borderColor} from '../../assets/css/common';
import {addButtonStyle} from '../../assets/css/addButtonStyle';

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
export default class AddArticlePage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title:'新增-发布',//navigation.getParam('title', '')
        headerStyle: {
            height: headerHeight,
            paddingTop:headerPaddingTop,
            elevation: 0,  // android去除阴影
            borderBottomWidth:1,
            borderBottomColor:borderColor
        },
        headerRight:<HeaderComponent navigation={navigation} text='发布'></HeaderComponent>,
    })
    
    constructor(props) {
        super(props);
        this.state = {
            addData:props.navigation.getParam('addData', {}),
            /*addData:{
                desc:"描述",
                title:"标题",
                listDataArr:[
                    {
                        content:"内容一",
                        images:['https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg']
                    },
                    {
                        content:"内容一",
                        images:['https://imgsa.baidu.com/exp/w=500/sign=cd79409424f5e0feee1889016c6134e5/6609c93d70cf3bc7a25b8261d800baa1cc112ae7.jpg']
                    }
                ],
                selectedArr:['经典']
            }*/
        }
        this.publishPress=this.publishPress.bind(this);
    }
    
    componentDidMount(){
        this.props.navigation.setParams({ navigatePress: this.publishPress});
    }
    /**
     *发布
     *
     * @memberof MyInterestPage
     */
    publishPress(){
        console.log('发布')
    }
    /**
     *加入草稿
     *
     * @memberof AddArticlePage
     */
    addDraft(){

    }
    
    render() {
        const {addData}=this.state;
        return (
            <View style={styles.container}>
                <ScrollView style={{ width: '100%',paddingLeft:headerRightMarginRight,
        paddingRight:headerRightMarginRight, }}
                    showsVerticalScrollIndicator={false}>
                    <View style={{
                        width:'100%',
                        paddingLeft: headerRightMarginRight,
                        paddingRight: headerRightMarginRight,
                    }}>
                        <View style={styles.line}>
                            <Text style={styles.lineLable}>标题：</Text>
                            <TextInput placeholder='请输入标题' onChangeText={(text)=>this.setState({title:text})} multiline={true} selectionColor={themeColor} style={styles.lineInput}></TextInput>
                        </View>
                        <View style={[styles.line, { alignItems: "flex-start"}]}>
                            <Text style={styles.lineLable}>描述：</Text>
                            <TextInput placeholder='请输入描述' onChangeText={(text)=>this.setState({desc:text})} multiline={true} selectionColor={themeColor} style={styles.lineInput}></TextInput>
                        </View>
                        <View style={styles.line}>
                            <View style={styles.optionLineTop}>
                                <Text style={styles.lineLable}>第一：</Text>
                                <TextInput multiline={true} selectionColor={themeColor} style={styles.lineInput}  placeholder='请输入选项一'></TextInput>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{flexDirection:"row"}}>
                    <TouchableHighlight
                        style={[styles.selectBtn,{marginRight:20}]}
                        underlayColor={themeColor}
                        onPress={this.addDraft.bind(this)}
                    >
                        <Text style={addButtonStyle.selectBtnText}>草稿</Text>
                    </TouchableHighlight>        
                    <TouchableHighlight
                        style={[styles.selectBtn]}
                        underlayColor={themeColor}
                        onPress={this.publishPress.bind(this)}
                    >
                        <Text style={addButtonStyle.selectBtnText}>发布</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}


