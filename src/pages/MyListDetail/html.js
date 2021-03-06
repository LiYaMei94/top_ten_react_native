/*
 * @Descripttion:首页文章详情 
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 18:25:45
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 14:55:42
 */



import React, { Component } from 'react';
import { Text, Modal, TouchableHighlight, View, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { headerStyle, ScreenHeight, themeColor } from '../../assets/css/common';
import { WebView } from "react-native-webview";
import { HTML } from './HTML/MyListPageHtml';
import UserActionComponent from '../../components/UserActionComponent';
import CommentItem from '../../components/CommentItem';
import Loading from '../../components/Loading';
import BackToTop from '../../components/BackToTop';
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

export default class MyListDetailPage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: '个榜内容详情',//navigation.getParam('title', '')
        headerStyle: headerStyle,
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
            isShowBackTop:false
        }
    }

    componentDidMount() {

    }
    componentWillUnmount() {
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
    setRecommend(index){
        this.props.navigation.push('RecommePage',{rank_index:index})
        //alert(`我是第${index}名推荐`)
    }
    render() {
        const { 
            classifyIndex, 
            contentDetailInfo, 
            routeName, 
            WebViewHeight, 
            isLoad, 
            isShowBackTop, 
            isShowCommentInput } = this.state;
        /*if(isloading){
            return <Loading></Loading>
        }*/
        return (
            <View style={styles.container}>
                <ScrollView onScroll={(e)=>{
                    //console.log(e.nativeEvent.contentOffset)
                    if(e.nativeEvent.contentOffset.y>WebViewHeight){
                        this.setState({
                            isShowBackTop:true
                        })
                    }else{
                        this.setState({
                            isShowBackTop:false
                        })
                    }
                }} showsVerticalScrollIndicator={false} style={{ flex: 1 }} ref={(ref) => this.ScrollView = ref}>
                    <WebView
                        onMessage={(event) => {
                            console.log(event)
                            try {
                                const action = JSON.parse(event.nativeEvent.data);
                                const { type, data } = action;
                                if(type=='setHeight'){
                                    this.updateWebViewHeight(data);
                                }else{
                                    this.setRecommend(data);
                                }
                            } catch (error) {
                                console.log('错误', error);
                            }
                        }}
                        style={{ width: '100%', height: WebViewHeight }}
                        source={{ html: HTML }}
                    />
                    <TouchableHighlight underlayColor="#fff" onPress={()=>this._like()} style={styles.likeButton}>
                        <Text style={styles.likeButtonText}>{'\ue69d'} 喜欢</Text>
                    </TouchableHighlight>
                    <View style={styles.commentListContainer}>
                        {
                            data.map((item, index) => {
                                return <CommentItem item={item} navigation={this.props.navigation} key={index}></CommentItem>
                            })
                        }
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
