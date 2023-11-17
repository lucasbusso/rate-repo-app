import { View } from 'react-native'
import StyledText from './StyledText'

export interface StatsProps {
  stars: string
  rating: string
  reviews: string
  forks: string
}

export default function Stats({ stars, rating, reviews, forks }: StatsProps) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View>
        <StyledText align='center' fontWeight='700'>
          Stars:{' '}
        </StyledText>
        <StyledText align='center'>{stars}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='700'>
          Rating:
        </StyledText>
        <StyledText align='center'>{rating}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='700'>
          Reviews:
        </StyledText>
        <StyledText align='center'>{reviews}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='700'>
          Forks:
        </StyledText>
        <StyledText align='center'>{forks}</StyledText>
      </View>
    </View>
  )
}
