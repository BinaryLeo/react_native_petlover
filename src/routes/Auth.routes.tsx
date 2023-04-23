import { NavigationContainer } from "@react-navigation/native"; //* For the main navigation container
import { createStackNavigator } from "@react-navigation/stack"; //* For creating the stack of screens
import { Home } from "../screens/home"; //* The main screen for the authentication route
import { Details } from "../screens/details";
//* Define the authentication routes
export default function AuthRoutes() {
  const { Navigator, Screen } = createStackNavigator();
  //* Destructure the required components from createStackNavigator

  //* Return the navigation container with the stack of screens
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={"signIn"} //* Set the initial screen to "signIn"
        screenOptions={{ headerShown: false }} //* Hide the header on all screens
      >
        <Screen name={"signIn"} component={Home} />
        <Screen name={"details"} component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}
