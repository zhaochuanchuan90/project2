
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

import ModalBox from '../libs/ModalBox';
import SelectTime from '../libs/SelectTime';

export default class Root extends Component{
  constructor(props) {
    super(props);
    this.state = {
      time: '00:00 - 00:00',
    }
  }
  render() {
    return (
      <View style={[styles.wrapper, styles.center]}>
        <TouchableWithoutFeedback onPress={() => this.refs.modalBox.show()}>
          <View style={[styles.btnWrapper, styles.center]}>
            <Text style={styles.btnTxt}>弹窗1</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.refs.selectTime.show()}>
          <View style={[styles.btnWrapper, styles.center, { marginTop: 10, }]}>
            <Text style={styles.btnTxt}>日期组件</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text>{this.state.time}</Text>

        <ModalBox ref="modalBox" color="#5fc8ce" />
        <SelectTime ref="selectTime" color="#5fc8ce" confirm={(start, end) => this.showTime(`${start}-${end}`)} />
      </View>
    )
  }

  showTime = (time) => {
    this.setState({ time })
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrapper: {
    width: 100,
    height: 50,
    backgroundColor: '#5fc8ce',
  },
  btnTxt: {
    fontSize: 16,
    color: 'white',
  }
})