
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

export default class Root extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.wrapper, styles.center]}>
        {/*this.refs.modalBoxRef.show()*/}
        <TouchableWithoutFeedback>
          <View style={[styles.btnWrapper, styles.center]}>
            <Text style={styles.btnTxt}>弹窗1</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={[styles.btnWrapper, styles.center, { marginTop: 10, }]}>
            <Text style={styles.btnTxt}>日期组件</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
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