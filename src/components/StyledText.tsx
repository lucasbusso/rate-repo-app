import { ReactNode } from 'react'
import { Text, StyleSheet } from 'react-native'

interface StyleProp {
  bold?: boolean
  blue?: boolean
  big?: boolean
  small?: boolean
  children: ReactNode
}

export default function StyledText({
  bold,
  blue,
  big,
  small,
  children,
}: StyleProp) {
  const textStyles = [
    styles.text,
    blue && styles.blue,
    bold && styles.bold,
    big && styles.big,
    small && styles.small,
  ]
  return <Text style={textStyles}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: 'grey',
  },
  bold: {
    fontWeight: 'bold',
  },
  blue: {
    color: 'blue',
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 10,
  },
})
