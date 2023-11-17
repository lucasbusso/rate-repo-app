import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import { theme } from '../globals/theme'
import StyledText from './StyledText'

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <StyledText style={styles.text} fontWeight='700'>
        app bar
      </StyledText>
    </View>
  )
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
