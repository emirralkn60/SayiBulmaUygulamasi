import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ComputerNumber({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       borderWidth:4,
       borderColor:'yellow',
       padding:25,
       alignItems:'center',
       borderRadius:20,
    },
    numberText:{
        fontSize:36,
        color:'yellow',
    },
})