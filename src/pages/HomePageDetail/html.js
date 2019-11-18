/*
 * @Descripttion:文章详情 
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 18:25:45
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-18 17:20:10
 */



import React, { Component } from 'react';
import { Text, Modal, TouchableHighlight, View, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { headerHeight, headerPaddingTop, borderColor, ScreenHeight, themeColor } from '../../assets/css/common';
import { WebView } from "react-native-webview";
import { HTML1, HTML2 } from './HTML/homePageHtml';
import UserActionComponent from '../../components/userActionComponent';
import CommentItem from '../../components/comment_item';
import Loading from '../../components/loading';
const data = [0, 1, 2, 3];
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
            commentInputText:''
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
     *发表
     *
     * @memberof ContentDetailPage
     */
    _publish() {
        this.setState({
            isShowCommentInput: false
        })
    }
    _showComment() {
        this.ScrollView.scrollTo({ x: 0, y: this.state.WebViewHeight, animated: true })
    }
    render() {
        const { classifyIndex, contentDetailInfo, routeName, WebViewHeight, isLoad, isLoadSuccess, isShowCommentInput } = this.state;
        if (isLoad) {
            //return <Loading></Loading>
        }
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} ref={(ref) => this.ScrollView = ref}>
                    <View style={styles.articleInfo}>
                        <Text style={styles.articleTitle}>10大最稀有最罕见的奇葩动物</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.articleInfoLine}>来源：网络</Text>
                                <Text>标签：动物</Text>
                                <Text>2019年11月6日</Text>
                            </View>
                            <TouchableHighlight underlayColor={themeColor} onPress={() => this._collection()}>
                                <Text style={styles.collection_button}>收藏</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
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
                    showComment={this._showComment.bind(this)}
                    showCommentInput={() => this.setState({ isShowCommentInput: true })}
                    navigation={this.props.navigation}
                    contentDetailInfo={contentDetailInfo}
                    routeName={routeName}></UserActionComponent>
            </View>
        );
    }
}
//
