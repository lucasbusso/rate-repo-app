import Main from './src/components/Main'
import Details from './src/components/Details'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any

            if (route.name.toLocaleLowerCase() === 'home') {
              iconName = focused ? 'home' : 'home'
            } else if (route.name.toLocaleLowerCase() === 'details') {
              iconName = focused ? 'menu' : 'menu'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Home' component={Main} />
        <Tab.Screen name='Details' component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
