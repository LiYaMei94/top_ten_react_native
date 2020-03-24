/*
 * @Descripttion: 加载组件
 * @version: 
 * @Author: liyamei
 * @Date: 2019-11-06 17:17:42
 * @LastEditors: liyamei
 * @LastEditTime: 2019-11-20 18:50:03
 */



import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Spinkiter from 'react-native-spinkit';
import { STATUS_BAR_HEIGHT,themeColor,greyBG,ScreenWidth } from '../assets/css/common';
import PropTypes from  'prop-types';
export default class Loading extends React.Component {
    static propTypes={
        colors:PropTypes.array,
        showSpinner:PropTypes.bool,
        spinkerSize:PropTypes.number,
        spinkerType:PropTypes.string,
        spinkerColor:PropTypes.string,
        optionContainer:PropTypes.object
    }
    static defaultProps = {
        showSpinner: true,
        spinkerSize: 40,
        spinkerType: 'Wave',
        spinkerColor: themeColor,
    }
    render() {
        const { spinkerSize, showSpinner, spinkerType, spinkerColor,optionContainer } = this.props;
        return (
            <View style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT },optionContainer]}>
                <Spinkiter isVisible={showSpinner} size={spinkerSize} type={spinkerType} color={spinkerColor} />
                <Text style={{marginTop:10,color:spinkerColor}}>加载中</Text>
            </View>
        );
    }
}
/*
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='CircleFlip' color={this.props.spinkerColor}/>
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='Bounce' color={this.props.spinkerColor}/>
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='Wave' color={this.props.spinkerColor}/>
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='WanderingCubes' color={this.props.spinkerColor}/>
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='Pulse' color={this.props.spinkerColor}/>
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='ChasingDots' color={this.props.spinkerColor}/>
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='ThreeBounce' color={this.props.spinkerColor}/>
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='Circle' color={this.props.spinkerColor}/>
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='9CubeGrid' color={this.props.spinkerColor}/>
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='FadingCircle' color={this.props.spinkerColor}/>
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='FadingCircleAlt' color={this.props.spinkerColor}/>
*/
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor:greyBG,
        width:'100%'
    }
});
