/*
 * @Author: your name
 * @Date: 2019-11-04 11:48:35
 * @LastEditTime: 2019-11-07 15:43:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\top_ten\src\HomePage\html.js
 */
import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableHighlight,
    View,
    Text,
    Image,
    TextInput
} from 'react-native';
import { ScreenHeight, headerHeight, headerPaddingTop, themeColor, borderColor, headerRightMarginRight } from '../../assets/css/common';

import { addButtonStyle } from '../../assets/css/addButtonStyle';
import ImagePicker from 'react-native-syan-image-picker';
import HeaderComponent from '../../components/HeaderComponent';
import BottomModal from '../../components/bottom_modal';

const options = {
    imageCount: 2,//最大选择图片数目
    isRecordSelected:true,//记录当前已选中的图片
    isCamera:false,//是否允许用户在内部拍照
    isCrop:false,//是否允许裁剪，imageCount 为1才生效
};
export default class Step3Page extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            line: 2,
            lineArr: new Array(2).join(',').split(','),
            listDataArr:[],
            isPicture:false,
            currentAddIndex:0,
            addData:props.navigation.getParam('addData', {}),
        }
    }
    
    componentDidMount() {
        console.log(this.state.addData)
    }
    
    addHTML() {
        let { line } = this.state;
        line = line < 10 ? line + 1 : 10;
        let lineArr = new Array(line).join(',').split(',');
        this.setState({
            lineArr: lineArr,
            line: line
        })
    }
    deleteHtml() {
        let { line } = this.state;
        line = line > 2 ? line - 1 : 2;
        let lineArr = new Array(line).join(',').split(',');
        this.setState({
            lineArr: lineArr,
            line: line
        })
    }
    /**
     *选择图片
     * @param {boolean} state
     * @param {string} text
     * @memberof PostMessage
     */
    setValueChange(state, text) {
        if(text==1){
            ImagePicker.asyncShowImagePicker(options)
            .then(photos => {
                this.uploadImg(photos);
            })
            .catch(err => {
                console.log(err)
                // 取消选择，err.message为"取消"
            })
        }else{
            ImagePicker.asyncOpenCamera(options)
            .then((photos)=>{
                this.uploadImg(photos);
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        this.setState({
            isPicture:state
        },()=>{
            
        })
    }
    /**
     *上传图片
     * @param {object} image
     * @memberof PostMessage
     */
    uploadImg(images) {
        let fileArr=[];
        const {currentAddIndex,listDataArr}=this.state;
        for(var i=0;i<images.length;i++){
            fileArr.push({
                uri: images[i].uri,
                type: images[i].type,
                name: images[i].name ? images[i].name : 'article',
                size: images[i].size,
            })
        }
        listDataArr[currentAddIndex].images=listDataArr[currentAddIndex].images.concat(fileArr);
        this.setState({
            listDataArr:listDataArr
        },()=>{
            console.log(listDataArr)
        })
    }
    next_step(){
        const {addData,listDataArr}=this.state;
        let data={
            selectedArr:addData.selectedArr,
            title:addData.title,
            desc:addData.desc,
            listDataArr:listDataArr
        }
        if(listDataArr.length==0){
            ToastAndroid.show('请输入选项',700);
        }else{
            this.props.navigation.push('AddArticlePage',{addData:data});
        }
    }
    render() {
        let { listDataArr, lineArr,isPicture } = this.state;
        return (
            <View style={styles.container}>
                <HeaderComponent navigation={this.props.navigation}
                    rightPress={() => this.next_step()}
                    rightText='下一步'
                    titie='新增' ></HeaderComponent>
                <ScrollView style={{ width: '100%',paddingLeft: headerRightMarginRight,
                    paddingRight: headerRightMarginRight, }}
                    showsVerticalScrollIndicator={false}
                >
                    {
                        lineArr.map((item, index) => {
                            return (
                                <View style={styles.line} key={index}>
                                    <TouchableHighlight style={{ height: 50, width: 25, }} underlayColor='transparent' onPress={() => this.deleteHtml()}>
                                        <Text style={styles.lineTitle}>{'\ue600'}</Text>
                                    </TouchableHighlight>
                                    <View style={{flex:1}}>
                                        <TextInput placeholder='选项' 
                                            multiline={true} 
                                            selectionColor={themeColor} 
                                            onChangeText={(text)=>{
                                                listDataArr[index]={content:text,images:[]};
                                                this.setState({
                                                    listDataArr:listDataArr
                                                },()=>{
                                                    console.log(listDataArr)
                                                })
                                            }}
                                            style={styles.lineInput}></TextInput>
                                        <View style={styles.imgContainer}>
                                            {
                                                listDataArr[index]&&listDataArr[index].images.length<2?
                                                <TouchableHighlight  
                                                    onPress={() => {
                                                        ImagePicker.removeAllPhoto();
                                                        this.setState({
                                                        isPicture:!this.state.isPicture,
                                                        currentAddIndex:index
                                                    })}}
                                                    underlayColor='#fff'
                                                    style={[styles.addImgBtn,{borderWidth:2,borderStyle:"dashed",}]}>
                                                    <Text style={styles.addImgBtnIcon}>{'\ue60c'}</Text>
                                                </TouchableHighlight>:null
                                            }
                                            {
                                                listDataArr[index]?
                                                listDataArr[index].images.map((img_item,img_index)=>{
                                                    return(
                                                        <View style={[styles.addImgBtn,{}]} key={img_index}>
                                                            <Image style={{width:'100%',height:'100%',borderRadius:12,}}  source={{uri:img_item.uri}}></Image>
                                                            <TouchableHighlight style={styles.deleteImgBtn}
                                                                underlayColor='red'
                                                                onPress={()=>{
                                                                    listDataArr[index].images.splice(img_index,1);
                                                                    this.setState({
                                                                        listDataArr:listDataArr
                                                                    })
                                                                }}
                                                                >
                                                                <Text style={styles.deleteImg}>{'\ue62b'}</Text>
                                                            </TouchableHighlight>
                                                        </View>
                                                    )
                                                }):null
                                            }
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                    <TouchableHighlight
                        underlayColor='transparent'
                        onPress={() => this.addHTML()}
                    >
                        <View style={[styles.line]}>
                            <Text style={[styles.lineTitle, { color: themeColor }]}>{'\ue601'}</Text>
                            <Text style={[styles.lineInput, { textAlignVertical: "center", paddingLeft: 3, color: themeColor,height:50, }]}>添加选项</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={[styles.selectBtn]}
                        underlayColor={themeColor}
                        onPress={() => this.next_step()}
                    >
                        <Text style={addButtonStyle.selectBtnText}>下一步</Text>
                    </TouchableHighlight>
                </ScrollView>
                <BottomModal
                    closeBottomPicker={(state)=>this.setState({isPicture: state})}
                    setValueChange={this.setValueChange.bind(this)}
                    isVisible={isPicture}
                    picker_item_text={['相机', '相册']}></BottomModal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
    },
    line: {
        flexDirection: "row",
        alignItems: "flex-start",
        borderBottomColor: borderColor,
        borderBottomWidth: 1
    },
    lineTitle: {
        fontSize: 20,
        height: 50,
        textAlignVertical: "center",
        fontFamily: "iconfont",
        color: 'red',
        width: 25
    },
    lineInput: {
        fontSize: 16,
        flex: 1,
    },
    selectBtn: {
        width: 280,
        height: 45,
        backgroundColor: themeColor,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        marginTop:20,
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:20
    },
    //图片添加
    imgContainer:{
        flexDirection:"row",
        alignItems:"center",
    },
    addImgBtn:{
        width:110,
        height:110,
        borderRadius:12,
        borderColor:borderColor,
        justifyContent:"center",
        alignItems:"center",
        marginRight:10,
        position:"relative",
        marginBottom:15
    },
    addImgBtnIcon:{
        fontFamily: "iconfont",
        fontSize:50,
        color:borderColor
    },
    deleteImgBtn:{
        position:"absolute",
        width:20,
        height:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'red',
        borderRadius:50,
        top:5,
        right: 5,
    },
    deleteImg:{
        fontFamily: "iconfont",
        fontSize:13,
        color:'#fff'
    }

})
