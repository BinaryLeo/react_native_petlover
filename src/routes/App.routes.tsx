import { NavigationContainer } from "@react-navigation/native"; //* For the main navigation container
import { createStackNavigator } from "@react-navigation/stack"; //* For creating the stack of screens
import { Login } from "../screens/signin"; //* The main screen for the app routes
//* Define the app routes
export default function AppRoutes() {
  const { Navigator, Screen } = createStackNavigator();
  //* Destructure the required components from createStackNavigator
  //* Return the navigation container with the stack of screens
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }} //* Hide the header on all screens
      >
        <Screen name={"signin"} component={Login} />
      </Navigator>
    </NavigationContainer>
  );
}
