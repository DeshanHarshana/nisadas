import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'


export default function Header() {
  return (
    <View style={{ backgroundColor: "rgba(52, 52, 52, 0)"}}>
      <Text style={styles.index}>is;=ú,s wimqj</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    index: {
        fontFamily: 'fm-gangani',
        backgroundColor: '#ffe6cc',
        textAlign: 'center',
        paddingTop:StatusBar.currentHeight+10,
        fontSize: 30,
        paddingBottom: 10,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    }
})

