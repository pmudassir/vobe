import ErrorBoundary from "react-native-error-boundary";
import ErrorScreen from "./src/features/Error/ErrorScreen";
import {
  NavigationContainer,
  createNavigationContainerRef
} from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import Root from "./src/Root";
import Providers from "./src/providers";

export const navigationRef = createNavigationContainerRef();
SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    "gil": require("./assets/fonts/Gilroy-Regular.ttf"),
    "gil-sb": require("./assets/fonts/Gilroy-SemiBold.ttf"),
    "gil-m": require("./assets/fonts/Gilroy-Medium.ttf"),
    "gil-b": require("./assets/fonts/Gilroy-Bold.ttf")
  });
  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();

    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <ErrorBoundary FallbackComponent={ErrorScreen}>
      <Providers>
        <NavigationContainer
          onReady={onLayoutRootView}
          theme={{ colors: { background: "#000" } }}
          ref={navigationRef}>
          <Root />
        </NavigationContainer>
      </Providers>
    </ErrorBoundary>
  );
}