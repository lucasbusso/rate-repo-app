import { View } from 'react-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'

export default function Main() {
  return (
    <View>
      <AppBar />
      <RepositoryList />
    </View>
  )
}
