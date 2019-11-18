/*
 * @Descripttion: 新增是跳4个页面的时候
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-18 18:41:49
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-18 18:42:20
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
                    <View style={styles.contentLine}>
                        <Text style={styles.lineLabel}>标签：</Text>
                        <Text style={styles.labelContent}>{addData.selectedArr?addData.selectedArr.join('、'):''}</Text>
                    </View>
                    <View style={styles.contentLine}>
                        <Text style={styles.lineLabel}>标题：</Text>
                        <Text style={styles.labelContent}>{addData.title}</Text>
                    </View>
                    <View style={styles.contentLine}>
                        <Text style={styles.lineLabel}>描述：</Text>
                        <Text style={styles.labelContent}>{addData.desc}</Text>
                    </View>
                    <View style={styles.contentLine}>
                        <Text style={styles.lineLabel}>内容：</Text>
                        <View style={styles.labelContent}>
                            {
                                addData.listDataArr?
                                addData.listDataArr.map((item,index)=>{
                                    return(
                                        <View style={styles.listItem} key={index}>
                                            <Text style={styles.listContent}>{index+1}、{item.content}</Text>
                                            {
                                                item.images.map((img_item,img_index)=>{
                                                    return <Image resizeMode='contain' style={styles.listContentImg}  source={{uri:img_item.uri}} key={img_index}></Image>
                                                })
                                            }
                                            
                                        </View>
                                    )
                                }):null
                            }
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


