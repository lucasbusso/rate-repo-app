import { FlatList } from 'react-native'
import { data } from '../data/fake'
import Item from './Item'

export default function RepositoryList() {
  return (
    <FlatList
      data={data}
      renderItem={({ item: person }) => {
        return <Item {...person} />
      }}
    />
  )
}
