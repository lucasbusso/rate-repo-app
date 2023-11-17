import { ReactNode } from 'react'
import { StyleSheet, Text } from 'react-native'
import { theme } from '../globals/theme'

interface StyleProps {
  color?: string
  fontSize?: string
  fontWeight?: string
  align?: string
  style?: any
  children: ReactNode
}

export default function StyledText({
  color,
  children,
  fontSize,
  fontWeight,
  style,
  align,
  ...restOfPRops
}: StyleProps) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subHeading' && styles.subHeading,
    fontWeight === '700' && styles.bold,
    align === 'center' && styles.align,
    style,
  ]
  return (
    <Text style={textStyles} {...restOfPRops}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeight.normal,
  },
  bold: {
    fontWeight: theme.fontWeight.bold,
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  align: {
    textAlign: theme.align.centered,
  },
})
