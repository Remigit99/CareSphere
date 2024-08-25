import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    QuicksandRegular: require('../assets/fonts/Quicksand-Regular.ttf'),
    QuicksandSemiBold: require('../assets/fonts/Quicksand-SemiBold.ttf'),
    QuicksandMedium: require('../assets/fonts/Quicksand-Medium.ttf'),
    QuicksandLight: require('../assets/fonts/Quicksand-Light.ttf'),
    QuicksandBold: require('../assets/fonts/Quicksand-Bold.ttf'),
    // Quicksand: require('../assets/fonts/Quicksand-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found"  options={{ headerShown: false }} />
      </Stack>
  );
}
