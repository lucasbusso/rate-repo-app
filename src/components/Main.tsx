import { View, SafeAreaView } from 'react-native'
import RepositoryList from './RepositoryList'

export default function Main() {
  return (
    <SafeAreaView style={{ marginTop: 40, flexGrow: 1 }}>
      <View>
        <RepositoryList />
      </View>
    </SafeAreaView>
  )
}
