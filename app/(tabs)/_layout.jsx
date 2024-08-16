import { Tabs, Redirect } from 'expo-router'
import { Text, Image, View } from 'react-native'

import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className = 'items-center justify-center gap-1'>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text style={{color: color}} className={`${focused? 'font-psemibold' : 'font-pregular'} text-xs`}>
                {name}
            </Text>
        </View>
    )
}

const TabLayout = () => {
  return (
    <>
        <Tabs
            screenOptions = {{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFA001',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#161622',
                    borderTopWidth: 1,
                    borderTopColor: '#232533',
                    height: 84,
                }
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="bookmark"
                options={{
                    title: 'bookmark',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={icons.bookmark}
                            color={color}
                            name="bookmark"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'create',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={icons.plus}
                            color={color}
                            name="create"
                            focused={focused}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'profile',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            name="profile"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabLayout
