/*
 * @Descripttion: 用户协议
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-04 14:27:43
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-15 13:44:02
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    ScrollView,
    View
} from 'react-native';
import {greyBG} from '../../assets/css/common';
import { WebView } from "react-native-webview";
import {serviceAgreementHtml} from './serviceAgreementHtml';
import {privacyAgreementHtml} from './privacyAgreementHtml';
import {headerStyle} from '../../assets/css/common';
export default class UserAgreement extends Component {
    static navigationOptions = ({ navigation }) => ({
        title:navigation.getParam('pageType', '服务协议'),
        headerStyle: headerStyle,
        //headerRight:<HeaderComponent navigation={navigation}></HeaderComponent>
    })
    constructor(props){
        super(props);
        this.state={
            pageType:props.navigation.getParam('pageType', '服务协议'),
        }
    }
    componentDidMount() {
        
    }
    componentWillUnmount() {
       
    }
    render(){
        const {pageType}=this.state;
        return(
            <View style={styles.container}>
                <WebView
                        source={{html:pageType=='服务协议'?serviceAgreementHtml:privacyAgreementHtml}}
                        style={{ flex:1 }}
                        //onLoadProgress={e => console.log(e.nativeEvent.progress)}
                    />
            </View>
        )
    }
    /*render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    本协议是十佳APP(以下简称十佳或“本APP”)与APP使用人（以下简称“用户”或“您”）所达成的协议。为使用本APP的服务， 您应当阅读并遵守本《用户服务协议》（以下简称“本协议”）。请您成为本APP的注册用户以前，务必审慎阅读、充分理解各条款内容， 特别是免除或者限制责任的条款、管辖与法律适用条款，以及开通或使用某项服务的单独协议。限制、免责条款可能以黑体加粗或加下划线的形式提示您重点注意。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
您使用本APP的服务即视为您已仔细阅读并充分了解前述协议的内容，并同意接受上述协议的约束。除非您已阅读并接受本协议所有条款，否则您无权使用本APP所提供的服务。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
如果您未满18周岁，请在法定监护人的陪同下阅读本协议，并特别注意未成年人使用条款。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
在使用这些信息之前，我们会先获取用户的授权，经许 可后，才会进行下一步。我们不会将这些信息用于任何其它非法用途。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>一、信息安全</Text>
                    <Text style={styles.rowItemContent}>本APP将对您所提供的资料进行严格的管理及保护，本APP将使用相应的技术，防止您的个人资料丢失、被盗用或遭篡改。但因计算机系统和网络技术的限制，本APP可能会因受到第三方的攻击或破坏，导致用户的个人信息被恶意篡改、盗取或泄露，本APP将采取合理措施防止类似事件的发生，并将配合国家机关和第三方对类似事 件进行调查或提起必要的行动（包括但不限于诉讼等）。对于非因本APP过错原因而导致的信息安全问题，您同意给予谅解并豁免本APP可能承担的任何责任。</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>二、披露个人资料</Text>
                    <Text style={styles.rowItemContent}>政府机关依照法定程序要求本APP披露个人资料时，本APP将根据执法单位之要求或为公共安全之目的提供个人资料。在此情况下之任何披露，本APP均得免责。</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>三、未成年人隐私权的保护</Text>
                    <Text style={styles.rowItemContent}>本APP将建立和维持合理的程序，以保护未成年人个人资料的保密性及安全性。本APP郑重声明：任何18岁以下的未成年人参加APP上的各种活动应事先得到家长或其法定监护人（以下统称为“监护人”）的可经查证的同意。</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>四、用户违法行为</Text>
                    <Text style={styles.rowItemContent}>
                    您在使用本APP服务时须遵守法律法规，不得利用本APP服务从事任何违法违规行为，包括但不限于：
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    （1）发布、传送、传播、储存危害国家安全统一、破坏社会稳定、违反公序良俗、侮辱、诽谤、淫秽、暴力以及任何违反国家法律法规的内容；
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    （2）发布、传送、传播、储存侵害他人知识产权、商业秘密等合法权利的内容；
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    （3）虚构事实、隐瞒真相以误导、欺骗他人；
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    （4）发布、传送、传播广告信息及垃圾信息；
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    （5）其他法律法规禁止的行为。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    如果您违反本条之约定，有权国家机关可能会对您提起诉讼、罚款或采取其他制裁措施，并要求本APP给予协助或支持，由此产生的责任均应当由您自行 承担。造成损害的，您应依法予以赔偿，本APP不承担任何责任。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    如果在您使用本APP服务时违反本条约定，本APP有权进行独立判断并采取技术手段予以删除、屏蔽或断开链接。同时，本APP有权视您的行为性质，采取 包括但不限于暂停或终止服务，限制、冻结或终止注册账号等，追究法律责任等措施。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    如果您违反本条约定，导致任何第三方损害的，您应当独立承担责任；导致本APP遭受损失的，您也应当一并赔偿。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>五、遵守法律和监管政策</Text>
                    <Text style={styles.rowItemContent}>您在使用本服务过程中应当遵守当地相关的法律法规和监管政策，并尊重当地的道德和风俗习惯。如果您的行为违反了当地法律法规或道德风俗，您应当为此独立承担责任。</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    您应避免因使用本服务而使本APP卷入政治和公共事件，否则本APP有权暂停或终止对您的服务。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>六、合法传播和第三方投诉处理</Text>
                    <Text style={styles.rowItemContent}>您通过本服务发送或传播的内容（包括但不限于网页、文字、图片、音频、视频、图表等）均由您自行承担责任。</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    您发送或传播的内容应有合法来源，相关内容为您所有或您已获得权利人的授权。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    您同意本APP可为履行本协议或提供本服务的目的而使用您发送或传播的内容。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    如果本APP收到权利人通知，主张您发送或传播的内容侵犯其相关权利的，您同意本APP有权进行独立判断并采取删除、屏蔽或断开链接等措施。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    您使用本服务时不得违反国家法律法规、侵害他人合法权益。您理解并同意，如您被他人投诉侵权或您投诉他人侵权，本APP有权将争议中相关方的主体、联系方式、 投诉相关内容等必要信息提供给其他争议方或相关部门，以便及时解决投诉纠纷，保护他人合法权益。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>七、协议的生效与变更</Text>
                    <Text style={styles.rowItemContent}>您使用本APP的服务即视为您已阅读本协议并接受本协议的约束。</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    本APP有权在必要时修改本协议条款。您可以在相关服务页面查阅最新版本的协议条款。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    本协议条款变更后，如果您继续使用本APP提供的软件或服务，即视为您已接受修改后的协议。如果您不接受修改后的协议，应当停止使用本APP提供的软件或服务。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>八、Cookies</Text>
                    <Text style={styles.rowItemContent}>Cookies是指一种技术，当使用者访问没有Cookies装置的本APP时，本APP之服务器会自动发送Cookies至您的浏览器内，并存储到您的电脑硬盘内， 此Cookies便负责记录日后您访问本APP的种种活动、个人资料、浏览习惯、消费习惯甚至信用记录。</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>
                    运用Cookies技术，本APP能够为您提供更加周到的服务，本APP将会运用Cookies追访您的喜好，从而向您提供感兴趣的信息资料或存储密码，以便您造访本APP时不必每次重复输入密码。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>九、信息存储和交换</Text>
                    <Text style={styles.rowItemContent}>本APP收集的有关您的信息和资料将保存在本APP及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或本APP收集信息和资料所在地的境外并在境外被访问、存储和展示。</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>十、免责</Text>
                    <Text style={styles.rowItemContent}>发生下列情况时本APP亦不需承担任何责任：</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>（1）不可抗力或意外事件等风险因素，导致本APP服务发生中断；</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>（2）由于您将用户密码告知他人或与他人共享注册账户，或者您操作不当而导致的任何损失；</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>（3）任何由于计算机问题、黑客攻击、计算机病毒侵入或发作、因政府管制而造成的暂时性关闭等影响网络正常经营之不可抗力而造成的个人资料泄露、丢失、被盗用或被篡改等；</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>（4）用户或本APP的电脑软件、系统、硬件和通信线路出现故障；</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>（5）本APP上有与其他网站网页的链接，包括页面上的广告。本APP对其他任何网站的内容、隐私政策或运营，或经营这些网站的公司的行为概不负责。在 向这些网与本APP链接的其他网站提供个人信息以前，请查阅它们的隐私政策。</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>（6）用户通过非本APP授权的方式使用本服务；</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>（7）由于与本APP链接的其它网站所造成之个人资料泄露及由此而导致的任何法律争议。</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>（8）由于用户使用第三方服务而导致的损失或产生的任何争议。其他本APP无法控制或合理预见的情形。</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemContent}>您理解并同意，在使用本服务的过程中，可能会遇到网络信息或其他用户行为带来的风险，本APP不对任何信息的真实性、适用性、合法性承担责任，也不对因侵权行为给您造成的损害负责。</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>十一、用户收集权限收集及其使用说明</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>获取手机设备权限</Text>
                    <Text style={styles.rowItemContent}>
                        获取手机的唯一标识用于统计服务。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>获取用户收集存储卡存储权限</Text>
                    <Text style={styles.rowItemContent}>
                        本APP需要写入缓存的方式存储用户相关数据，以保证服务的可用性。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>读取日历权限</Text>
                    <Text style={styles.rowItemContent}>
                        本APP需要读取用户的系统日历数据，以便于同步日历等其他信息到本APP中，为用户提供更好的服务。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>获取照相机、相册等权限</Text>
                    <Text style={styles.rowItemContent}>
                        本APP为用户提供了更换头像的功能，可以使用照相机和相册修改您的头像为您自己所喜欢的图片。
                    </Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.rowItemTitle}>其他权限</Text>
                </View>
            </ScrollView>
        );
    }*/
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: greyBG,
        flex:1
        //padding:15,
        //paddingBottom:350
    },
    rowItemTitle:{
        color:'#000',
        fontSize:16,
        marginBottom:10
    },
    rowItem:{
        marginBottom:10
    },
    rowItemContent:{
        fontSize:14,
        lineHeight:20
    }
    
});
