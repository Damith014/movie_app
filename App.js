import React from "react";
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import HomeScreen from './src/screens/HomeScreen'
import InternetConnectionAlert from "react-native-internet-connection-alert";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from "./src/constants";

const Stack = createStackNavigator();
export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <InternetConnectionAlert
          onChange={(connectionState) => {
            console.log("Connection State: ", connectionState);
          }}
          message="Internet Connection Problem"
          message="Unable to retrieve data. Please check your internet connection."
          type={'warn'}
        >
          <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: true,
                  title: "Top Rated Movies",
                  headerTintColor: Colors.white,
                  headerStyle: {
                    backgroundColor: Colors.primary,
                  }
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </InternetConnectionAlert>
      </Provider>
    )
  };
}