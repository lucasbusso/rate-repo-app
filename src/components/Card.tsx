import { Image, StyleSheet, View } from 'react-native'
import { theme } from '../globals/theme'
import StyledText from './StyledText'

interface CardProps {
  avatar: string
  name: string
  country: string
  language: string
}

export default function Card({ avatar, name, country, language }: CardProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        paddingVertical: 16,
        paddingHorizontal: 4,
        gap: 12,
      }}
    >
      <Image source={{ uri: avatar }} style={styles.image} />
      <View>
        <StyledText fontWeight='700' fontSize='subHeading'>
          Name: {name}
        </StyledText>
        <StyledText>Country: {country}</StyledText>
        <StyledText style={styles.language}>Language: {language}</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
})
