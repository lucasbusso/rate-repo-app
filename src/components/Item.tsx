import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

interface Person {
  name: string
  phone: string
  email: string
  postalZip: string
  country: string
}

export default function Item(props: Person) {
  return (
    <View key={props.name} style={styles.container}>
      <StyledText bold blue big>
        {props.name}
      </StyledText>
      <StyledText>{props.country}</StyledText>
      <StyledText>{props.phone}</StyledText>
      <StyledText>{props.postalZip}</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    textAlign: 'center',
    width: '100%',
  },
})
