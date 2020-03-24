/*
 * @Descripttion:新增个榜 
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 12:00:23
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 16:34:52
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
    TextInput,
    ToastAndroid
} from 'react-native';
import { styles } from './style';
import { ScreenHeight, headerHeight, headerPaddingTop, themeColor, headerRightMarginRight, borderColor } from '../../assets/css/common';
import ImagePicker from 'react-native-syan-image-picker';
import BottomModal from '../../components/BottomModal';
import ThemeColorButton from '../../components/ThemeColorButton';
import Alert from '../../components/Alert';
const options = {
    imageCount: 2,//最大选择图片数目
    isRecordSelected:true,//记录当前已选中的图片
    isCamera:false,//是否允许用户在内部拍照
    isCrop:false,//是否允许裁剪，imageCount 为1才生效
};
class HeaderComponent extends React.Component {
    render() {
        const { navigation, text } = this.props;
        return (
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
        title: '新增个榜',//navigation.getParam('title', '')
        headerStyle: {
            height: headerHeight,
            paddingTop: headerPaddingTop,
            elevation: 0,  // android去除阴影
            borderBottomWidth: 1,
            borderBottomColor: borderColor
        },
        headerRight: <HeaderComponent navigation={navigation} text='发布'></HeaderComponent>,
    })

    constructor(props) {
        super(props);
        this.state = {
            //addData: props.navigation.getParam('addData', {}),
            line: 2,
            lineArr: new Array(2).join(',').split(','),
            listDataArr:[],
            isPicture:false,
            currentAddIndex:0,
            current_img_index:0,
            title:'',
            desc:'',
            alertModalVisible:false
        }
        this.publishPress = this.publishPress.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({ navigatePress: this.publishPress });
    }
    /**
     *发布
     *
     * @memberof MyInterestPage
     */
    publishPress() {
        const {listDataArr,title,desc}=this.state;
        if(title==''){
            ToastAndroid.show('请输入标题',700);
        }
        console.log(listDataArr)
    }
    /**
     *加入草稿
     *
     * @memberof AddArticlePage
     */
    addDraft() {
        const {listDataArr,title,desc}=this.state;
        if(title==''){
            ToastAndroid.show('请输入标题',700);
        }
        console.log(listDataArr)
    }
    /**
     *增加一行
     *
     * @memberof AddArticlePage
     */
    addHTML() {
        let { line } = this.state;
        line = line < 10 ? line + 1 : 10;
        let lineArr = new Array(line).join(',').split(',');
        this.setState({
            lineArr: lineArr,
            line: line
        })
    }
    /**
     *删除一行
     *
     * @memberof AddArticlePage
     */
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
    /**
     *删除图片
     *
     * @param {*} state
     * @memberof AddArticlePage
     */
    _closeAlert(state){
        let {listDataArr,currentAddIndex,current_img_index}=this.state;
        if(state){//确定
            listDataArr[currentAddIndex].images.splice(current_img_index, 1);
        }
        this.setState({
            alertModalVisible:false,
            listDataArr:listDataArr
        })
    }
    render() {
        const { lineArr,listDataArr,isPicture,currentAddIndex,alertModalVisible,current_img_index } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%'}}>
                    <View style={{
                        width: '100%',
                        paddingLeft: headerRightMarginRight,
                        paddingRight: headerRightMarginRight,
                        paddingBottom:10
                    }}>
                        <View style={styles.line}>
                            <Text style={styles.lineLable}>标题：</Text>
                            <TextInput placeholder='请输入标题' 
                                onChangeText={(text) => this.setState({ title: text })} 
                                multiline={true} selectionColor={themeColor} 
                                style={[styles.lineInput,{}]}></TextInput>
                        </View>
                        <View style={[styles.line, { alignItems: "flex-start" }]}>
                            <Text style={styles.lineLable}>描述：</Text>
                            <TextInput placeholder='请输入描述' 
                                onChangeText={(text) => this.setState({ desc: text })} 
                                multiline={true} selectionColor={themeColor} 
                                style={[styles.lineInput,{}]}></TextInput>
                        </View>
                        {
                            lineArr.map((item, index) => {
                                return (
                                    <View style={[styles.line,{alignItems:"flex-start"}]} key={index}>
                                        <TouchableHighlight style={{ height: 50, width: 25, }} underlayColor='transparent' onPress={() => this.deleteHtml()}>
                                            <Text style={styles.lineTitle}>{'\ue600'}</Text>
                                        </TouchableHighlight>
                                        <View style={{ flex: 1 }}>
                                            <TextInput placeholder='选项标题'
                                                multiline={true}
                                                selectionColor={themeColor}
                                                onChangeText={(text) => {
                                                    listDataArr[index] = { title: text, images: [],desc:'' };
                                                    this.setState({
                                                        listDataArr: listDataArr,
                                                    }, () => {
                                                        console.log(listDataArr)
                                                    })
                                                }}
                                                style={[styles.lineInput,{borderBottomWidth:1}]}></TextInput>
                                            <TextInput placeholder='选项描述'
                                                multiline={true}
                                                selectionColor={themeColor}
                                                onChangeText={(text) => {
                                                    listDataArr[index].desc=text;
                                                    this.setState({
                                                        listDataArr: listDataArr,
                                                    }, () => {
                                                        console.log(listDataArr)
                                                    })
                                                }}
                                                style={[styles.lineInput,{borderBottomWidth:listDataArr[index] ?1:0}]}></TextInput>
                                            <View style={styles.imgContainer}>
                                                {
                                                    listDataArr[index] && listDataArr[index].images.length < 2 ?
                                                        <TouchableHighlight
                                                            onPress={() => {
                                                                ImagePicker.removeAllPhoto();
                                                                this.setState({
                                                                    isPicture: !this.state.isPicture,
                                                                })
                                                            }}
                                                            underlayColor='#fff'
                                                            style={[styles.addImgBtn, { borderWidth: 2, borderStyle: "dashed", }]}>
                                                            <Text style={styles.addImgBtnIcon}>{'\ue60c'}</Text>
                                                        </TouchableHighlight> : null
                                                }
                                                {
                                                    listDataArr[index] ?
                                                        listDataArr[index].images.map((img_item, img_index) => {
                                                            return (
                                                                <View style={[styles.addImgBtn, {}]} key={img_index}>
                                                                    <Image style={{ width: '100%', height: '100%', borderRadius: 12, }} source={{ uri: img_item.uri }}></Image>
                                                                    <TouchableHighlight style={styles.deleteImgBtn}
                                                                        underlayColor='red'
                                                                        onPress={() => this.setState({alertModalVisible:true,currentAddIndex: index,current_img_index:img_index})}
                                                                    >
                                                                        <Text style={styles.deleteImg}>{'\ue62b'}</Text>
                                                                    </TouchableHighlight>
                                                                </View>
                                                            )
                                                        }) : null
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
                        <View style={{ flexDirection: "row",justifyContent:"center",marginTop:15 }}>
                            <ThemeColorButton buttonIcon='草稿' optionButton={{marginRight: 20,width:100}} buttonPress={this.addDraft.bind(this)}></ThemeColorButton>
                            <ThemeColorButton buttonIcon='发布' optionButton={{width:100}} buttonPress={this.publishPress.bind(this)}></ThemeColorButton>
                        </View>
                    </View>
                </ScrollView>
                <BottomModal
                    closeBottomPicker={(state)=>this.setState({isPicture: state})}
                    setValueChange={this.setValueChange.bind(this)}
                    isVisible={isPicture}
                    picker_item_text={['相机', '相册']}></BottomModal>
                {/*alert */}
                <Alert modalVisible={alertModalVisible} close_alert={(state)=>this._closeAlert(state)}></Alert>
            </View>
        )
    }
}


