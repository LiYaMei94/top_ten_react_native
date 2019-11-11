/*
 * @Author: your name
 * @Date: 2019-10-24 11:12:20
 * @LastEditTime: 2019-10-28 17:07:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react_native_appc:\Users\123\Desktop\hard_work\src\components\loading.js
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Spinkiter from 'react-native-spinkit';
import { STATUS_BAR_HEIGHT,themeColor } from '../assets/css/common';
export default class Loading extends React.Component {
    static defaultProps = {
        showSpinner: true,
        spinkerSize: 40,
        spinkerType: 'FadingCircleAlt',
        spinkerColor: themeColor,
        colors: ['#EBF0F7', '#E1ECF6', '#D7E9F4']
    }
    render() {
        const { colors, spinkerSize, showSpinner, spinkerType, spinkerColor } = this.props;
        return (
            <View style={[styles.container, { paddingTop: STATUS_BAR_HEIGHT }]}>
                <Spinkiter isVisible={showSpinner} size={spinkerSize} type={spinkerType} color={spinkerColor} />
                <Text style={{marginTop:10,color:spinkerColor}}>加载中</Text>
            </View>
        );
    }
}
/*
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='CircleFlip' color={this.props.spinkerColor}/>
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type='Bounce' color={this.props.spinkerColor}/>
<Spinkiter isVisible={this.props.showSpinner} size={this.props.spinkerSize} type={this.props.spinkerType} color={this.props.spinkerColor}/>
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
    }
});
