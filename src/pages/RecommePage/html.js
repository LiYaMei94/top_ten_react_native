/*
 * @Descripttion: 榜友推荐
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-19 16:22:04
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 16:32:25
 */
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    ScrollView,
    View,
    TouchableHighlight,
    Image,
    FlatList,
    Animated,
    DeviceEventEmitter,
    PanResponder,
    TouchableOpacity,
    NativeModules
} from 'react-native';
import { WebView } from "react-native-webview";
import { styles } from './style';
import { headerStyle, ScreenHeight } from '../../assets/css/common';
import { HTML } from './HTML/RecommePageHtml';
import BackToTop from '../../components/BackToTop';
import ThemeColorButton from '../../components/ThemeColorButton';
import ImagePicker from 'react-native-syan-image-picker';
import BottomModal from '../../components/BottomModal';
import Alert from '../../components/Alert';
const options = {
    imageCount: 2,//最大选择图片数目
    isRecordSelected:true,//记录当前已选中的图片
    isCamera:false,//是否允许用户在内部拍照
    isCrop:false,//是否允许裁剪，imageCount 为1才生效
};
export default class RecommePage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: '榜友推荐',//navigation.getParam('title', '')
        headerStyle: headerStyle,
    })
    constructor(props) {
        super(props);
        this.state = {
            WebViewHeight: ScreenHeight,
            isShowBackTop: false,
            rank_index: props.navigation.getParam('rank_index', 1),
            addImgArr:[],
            isPicture:false,
            alertModalVisible:false,
            current_img_index:0
        }
    }
    componentDidMount() {


    }
    /**
      *更新webview的高度
      *
      * @param {*} data
      * @memberof ContentDetailPage
      */
    updateWebViewHeight(data) {
        this.setState({
            WebViewHeight: data
        })
    }
    /**
     *点击操作栏评论滑动到评论this.state.WebViewHeight
     *
     * @memberof ContentDetailPage
     */
    _scrollTo(y) {
        this.ScrollView.scrollTo({ x: 0, y: y, animated: true })
    }
    /**
     *发表
     *
     * @memberof RecommePage
     */
    _publish() {

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
        let {addImgArr}=this.state;
        for(var i=0;i<images.length;i++){
            fileArr.push({
                uri: images[i].uri,
                type: images[i].type,
                name: images[i].name ? images[i].name : 'article',
                size: images[i].size,
            })
        }
        addImgArr=addImgArr.concat(fileArr);
        this.setState({
            addImgArr:addImgArr
        },()=>{
            console.log(addImgArr)
        })
    }
    /**
     *删除图片
     *
     * @param {*} state
     * @memberof AddArticlePage
     */
    _closeAlert(state){
        let {addImgArr,current_img_index}=this.state;
        if(state){//确定
            addImgArr.splice(current_img_index, 1);
        }
        this.setState({
            alertModalVisible:false,
            addImgArr:addImgArr
        })
    }
    render() {
        const {
            WebViewHeight,
            rank_index,
            addImgArr,
            isPicture,
            alertModalVisible,
            isShowBackTop, } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView onScroll={(e) => {
                    //console.log(e.nativeEvent.contentOffset)
                    if (e.nativeEvent.contentOffset.y > 300) {
                        this.setState({
                            isShowBackTop: true
                        })
                    } else {
                        this.setState({
                            isShowBackTop: false
                        })
                    }
                }} showsVerticalScrollIndicator={false} style={{ flex: 1 }} ref={(ref) => this.ScrollView = ref}>
                    <View style={styles.rank_recommend_conatiner}>
                        <Text style={styles.rank_recommend_title}>您的推荐</Text>
                        <View style={styles.rank_recommend_line}>
                            <Text style={styles.rank_recommend_line_name}>名称</Text>
                            <TextInput multiline={true} style={styles.rank_recommend_line_input} placeholder={`输入您心目中的第${rank_index}名`}></TextInput>
                        </View>
                        <View style={styles.rank_recommend_line}>
                            <Text style={styles.rank_recommend_line_name}>描述</Text>
                            <TextInput multiline={true} style={styles.rank_recommend_line_input} placeholder='输入您的推荐描述（理由）'></TextInput>
                        </View>
                        <View style={styles.imgContainer}>
                            {
                                addImgArr.length < 2 ?
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
                                addImgArr.map((img_item, img_index) => {
                                    return (
                                        <View style={[styles.addImgBtn, {}]} key={img_index}>
                                            <Image style={{ width: '100%', height: '100%', borderRadius: 12, }} source={{ uri: img_item.uri }}></Image>
                                            <TouchableHighlight style={styles.deleteImgBtn}
                                                underlayColor='red'
                                                onPress={() =>this.setState({alertModalVisible:true,current_img_index:img_index})}
                                            >
                                                <Text style={styles.deleteImg}>{'\ue62b'}</Text>
                                            </TouchableHighlight>
                                        </View>
                                    )
                                })
                            }
                        </View>
                        <ThemeColorButton buttonIcon='发表' optionButton={{ marginLeft: 'auto', marginRight: 'auto' }} buttonPress={this._publish.bind(this)}></ThemeColorButton>
                    </View>
                    <Text style={{fontSize:16,paddingLeft:15,height:40,textAlignVertical:"center"}}>其他榜友推荐</Text>
                    <WebView
                        onMessage={(event) => {
                            console.log(event)
                            try {
                                const action = JSON.parse(event.nativeEvent.data);
                                const { type, data } = action;
                                if (type == 'setHeight') {
                                    this.updateWebViewHeight(data);
                                } else {
                                    this.setRecommend(data);
                                }
                            } catch (error) {
                                console.log('错误', error);
                            }
                        }}
                        style={{ width: '100%', height: WebViewHeight }}
                        source={{ html: HTML }}
                    />
                </ScrollView>
                {/**回到顶部 */}
                {
                    isShowBackTop ? <BackToTop optionContainer={{bottom:30}} goBackTop={this._scrollTo.bind(this, 0)}></BackToTop> : null
                }
                <BottomModal
                    closeBottomPicker={(state)=>this.setState({isPicture: state})}
                    setValueChange={this.setValueChange.bind(this)}
                    isVisible={isPicture}
                    picker_item_text={['相机', '相册']}></BottomModal>
                {/*alert */}
                <Alert modalVisible={alertModalVisible} close_alert={(state)=>this._closeAlert(state)}></Alert>
            </View>

        );
    }
}
