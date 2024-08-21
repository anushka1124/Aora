import { SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import GlobalProvider from '../context/GlobalProvider'

export default  RootLayout = () => {

    // useEffect(() => {
    //     if(error) throw error;
    //     if(fontsLoaded) SplashScreen.hideAsync();
    // }, [fontsLoaded, error])

    // if(!fontsLoaded && !error) return null;
    return (
      // <View style = {styles.container}>
    //   <Text>RootLayout</Text>
    // </View>
    // <>
    //   <Text>Header</Text>
    //   <Slot/>
    //   <Text>Footer</Text>      
    // </>

        <GlobalProvider>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="(auth)" options={{headerShown: false}}/>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                {/* <Stack.Screen name="/search/[query]" options={{headerShown: false}}/> */}
            </Stack>
        </GlobalProvider>
    )
}
