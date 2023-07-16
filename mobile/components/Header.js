import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'


export default function Header() {
  return (
    <View>
      <Text style={styles.container}>කෙටි කතා අරණ</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5d7d5',
        textAlign: 'center',
        paddingTop:StatusBar.currentHeight+5,
        fontWeight: 'bold',
        fontSize: 20,
    }
})