import { StyleSheet, View } from 'react-native'
import Card from './Card'
import Stats from './Stats'

interface Person {
  name: string
  phone: string
  email: string
  postalZip: string
  country: string
  language: string
  stars: string
  reviews: string
  rating: string
  forks: string
  avatar: string
}

export default function Item(props: Person) {
  return (
    <View key={props.name} style={styles.container}>
      <Card
        avatar={props.avatar}
        name={props.name}
        language={props.language}
        country={props.country}
      />
      <Stats
        stars={props.stars}
        reviews={props.reviews}
        rating={props.rating}
        forks={props.forks}
      />
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
