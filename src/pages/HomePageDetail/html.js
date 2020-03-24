/*
 * @Descripttion:首页文章详情 
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 18:25:45
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-21 14:50:51
 */



import React, { Component } from 'react';
import { Text, Modal, TouchableHighlight, View, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity,RefreshControl } from 'react-native';
import { styles } from './style';
import { headerHeight, headerPaddingTop, borderColor, ScreenHeight, themeColor } from '../../assets/css/common';
import { WebView } from "react-native-webview";
import { HTML1, HTML2 } from './HTML/homePageHtml';
import UserActionComponent from '../../components/UserActionComponent';
import CommentItem from '../../components/CommentItem';
import Loading from '../../components/Loading';
import BackToTop from '../../components/BackToTop';
import ListFooterComponent from '../../components/ListFooterComponent';
const data = [{id:0},{id:1},{id:2}];
class HeaderComponent extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <TouchableHighlight
                onPress={() => {
                    //navigation.state.params.navigatePress()
                }}
                underlayColor='transparent'
                style={[styles.headerRightButtonBox]}
            >
                <Text style={[styles.headerRightButton]} >{'\ue69d'}</Text>
            </TouchableHighlight>
        )
    }
}

export default class ContentDetailPage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: '内容详情',//navigation.getParam('title', '')
        headerStyle: {
            height: headerHeight,
            paddingTop: headerPaddingTop,
            elevation: 0,  // android去除阴影
            borderBottomWidth: 1,
            borderBottomColor: borderColor
        },
        //headerRight:<HeaderComponent navigation={navigation}></HeaderComponent>
    })
    constructor(props) {
        super(props);
        //console.log(props.navigation)
        this.state = {
            classifyIndex: props.navigation.getParam('classifyIndex', 0),
            contentDetailInfo: {},
            WebViewHeight: ScreenHeight,
            isLoad: true,
            isShowCommentInput: false,
            commentInputText:'',
            isShowBackTop:false,
            isRefresh: false,// 下拉刷新
            isLoadMore: true,// 加载更多
            isloading:true,//加载
        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
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
     *收藏
     *
     * @memberof ContentDetailPage
     */
    _collection() {

    }
    /**
     *喜欢
     *
     * @memberof ContentDetailPage
     */
    _like(){

    }
    /**
     *评论发表
     *
     * @memberof ContentDetailPage
     */
    _publish() {
        this.setState({
            isShowCommentInput: false
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
     * 上拉加载
     * @param {*} e 
     */ 
    _onLoadMore (e){
        let offsetY = e.nativeEvent.contentOffset.y; //滑动距离
        let contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
        let oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
        if (offsetY + oriageScrollHeight >= contentSizeHeight){//上拉加载
            //获取新的数据
            const that=this;
            that.timer=setTimeout(function(){
                that.setState({
                    isLoadMore:false
                })
            },1000)
            console.log('上拉加载')
        }
    };
    /**
     *下拉刷新
     *
     * @memberof ContentDetailPage
     */
    onRefresh (){
        console.log(1)
    }
    render() {
        const { 
            classifyIndex, 
            contentDetailInfo, 
            routeName, 
            WebViewHeight, 
            isLoad, 
            isShowBackTop, 
            isLoadMore,
            isShowCommentInput } = this.state;
        /*if(isloading){
            return <Loading></Loading>
        }*/
        return (
            <View style={styles.container}>
                <ScrollView 
                    onMomentumScrollEnd = {(e)=>this._onLoadMore(e)}
                    onScroll={(e)=>{
                        if(e.nativeEvent.contentOffset.y>WebViewHeight){
                            this.setState({
                                isShowBackTop:true
                            })
                        }else{
                            this.setState({
                                isShowBackTop:false
                            })
                        }
                    }} 
                    showsVerticalScrollIndicator={false} 
                    style={{ flex: 1 }} ref={(ref) => this.ScrollView = ref}>
                    <WebView
                        onMessage={(event) => {
                            //console.log(event)
                            try {
                                const action = JSON.parse(event.nativeEvent.data);
                                const { type, data } = action;
                                this.updateWebViewHeight(data);
                            } catch (error) {
                                console.log('错误', error);
                            }
                        }}
                        style={{ width: '100%', height: WebViewHeight }}
                        source={{ html: classifyIndex == 0 ? HTML1 : HTML2 }}
                    />
                    <TouchableHighlight underlayColor="#fff" onPress={()=>this._like()} style={styles.likeButton}>
                        <Text style={styles.likeButtonText}>{'\ue69d'} 喜欢</Text>
                    </TouchableHighlight>
                    <View style={styles.commentListContainer}>
                        
                        {
                            data.length !=0?
                            data.map((item, index) => {
                                return <CommentItem item={item} navigation={this.props.navigation} key={index}></CommentItem>
                            }):
                            <View style={styles.commentEmpty}>
                                <Text>还没有人评论，点击抢沙发~</Text>
                                <TouchableOpacity style={[styles.likeButton,{marginTop:10}]}>
                                    <Text>立即评论</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        <ListFooterComponent navigation={this.props.navigation} isLoadMore={isLoadMore}></ListFooterComponent>
                    </View>
                </ScrollView>
                {/**添加评论弹出 */}
                <Modal visible={isShowCommentInput} transparent={true} onRequestClose={() => this.setState({ isShowCommentInput: false })}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ isShowCommentInput: false })}>
                        <KeyboardAvoidingView style={{ flex: 1, justifyContent: "flex-end" }}>
                            <View style={styles.commentBar}>
                                <TextInput
                                    onChangeText={(text) => this.setState({ commentInputText: text })}
                                    selectionColor={themeColor}
                                    multiline={true}
                                    placeholder='友善评论、理性发言、阳光心灵'
                                    numberOfLines={4}
                                    autoFocus={true}
                                    style={[styles.commentTextInput]}></TextInput>
                                <TouchableHighlight underlayColor={themeColor} onPress={() => this._publish()}>
                                    <Text style={styles.publish_button}>发表</Text>
                                </TouchableHighlight>
                            </View>
                        </KeyboardAvoidingView>
                    </TouchableOpacity>
                </Modal>
                {/**用户操作组件 */}
                <UserActionComponent
                    collection={this._collection.bind(this)}
                    showComment={this._scrollTo.bind(this,WebViewHeight+150)}
                    showCommentInput={() => this.setState({ isShowCommentInput: true })}
                    navigation={this.props.navigation}
                    contentDetailInfo={contentDetailInfo}
                    routeName={routeName}></UserActionComponent>
                {/**回到顶部 */}
                {
                    isShowBackTop?<BackToTop goBackTop={this._scrollTo.bind(this,0)}></BackToTop>:null
                }
            </View>
        );
    }
}
//
