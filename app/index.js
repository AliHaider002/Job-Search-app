import { Stack, useRouter } from 'expo-router'
import { COLORS, SIZES, FONT, SHADOWS, icons } from '../constants'
import { SafeAreaView } from 'react-native'
import { Button } from 'react-native'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"
import { ScrollView } from 'react-native'

const index = () => {
    const router = useRouter();
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.lightWhite
            }}
        >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconsUrl={icons.menu} dimenstions="60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconsUrl={icons.share} dimenstions="80%" />
                    ),
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false} style={{
                paddingHorizontal: 10
            }} >
                <Welcome />
                <Popularjobs />
                <Nearbyjobs />
            </ScrollView>
        </SafeAreaView>
    )
}

export default index