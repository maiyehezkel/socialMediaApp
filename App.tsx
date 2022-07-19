import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

//Reac navigation stack
import RootStack from './navigators/RootStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }

  return (
      <RootStack/>
  );
}


