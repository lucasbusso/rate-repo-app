import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { theme } from '../globals/theme'

export default function AppBar() {
  return <View style={styles.appBar}></View>
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
})
