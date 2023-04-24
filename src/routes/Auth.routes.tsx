import { NavigationContainer } from "@react-navigation/native"; //* For the main navigation container
import { createStackNavigator } from "@react-navigation/stack"; //* For creating the stack of screens
import { Home } from "../screens/home"; //* The main screen for the authentication route
//* Define the authentication routes
export default function AuthRoutes() {
  const { Navigator, Screen } = createStackNavigator();
  //* Destructure the required components from createStackNavigator

  //* Return the navigation container with the stack of screens
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }} //* Hide the header on all screens
      >
        <Screen name={"home"} component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
