/*
 * @Author: your name
 * @Date: 2019-11-04 11:48:35
 * @LastEditTime: 2019-11-07 16:03:08
 * @LastEditors: Please set LastEditors
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
import {ScreenHeight,headerHeight,headerPaddingTop,themeColor,headerRightMarginRight} from '../../assets/css/common';
import {addButtonStyle} from '../../assets/css/addButtonStyle';
import HeaderComponent from '../../components/HeaderComponent';
export default class AddArticlePage extends React.Component {
    
    
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
    }
    
    componentDidMount(){
        console.log(this.state.addData)
    }
    /**
     *发布
     *
     * @memberof MyInterestPage
     */
    publishPress(){
        console.log('发布')
    }
    
    render() {
        const {addData}=this.state;
        return (
            <View style={styles.container}>
            <HeaderComponent navigation={this.props.navigation}
                    rightPress={this.publishPress.bind(this)}
                    rightText='发布'
                    titie='新增' ></HeaderComponent>
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
                <TouchableHighlight
                    style={[styles.selectBtn]}
                    underlayColor={themeColor}
                    onPress={this.publishPress.bind(this)}
                >
                    <Text style={addButtonStyle.selectBtnText}>发布</Text>
                </TouchableHighlight>
            </View>
        )
    }
}


