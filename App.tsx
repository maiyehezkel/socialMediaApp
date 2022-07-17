import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }

  return (
      <SignUp/>
  );
}


