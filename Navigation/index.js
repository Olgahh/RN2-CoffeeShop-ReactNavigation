import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// Components
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
import { Icon } from "native-base";
const { Navigator, Screen } = createStackNavigator();

export default function RootNavigator({ navigation }) {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "rgb(20, 90, 100)",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Login" component={Login}></Screen>
      <Screen name="Signup" component={Signup}></Screen>
      <Screen
        name="CoffeeList"
        component={CoffeeList}
        options={({ navigation }) => ({
          title: "Coffee Shops",
          headerRight: () => (
            <Icon
              name="md-cart"
              style={{ color: "white" }}
              onPress={() => navigation.navigate("CoffeeCart")}
            />
          ),
        })}
      ></Screen>
      <Screen
        name="CoffeeDetail"
        component={CoffeeDetail}
        options={({ route, navigation }) => {
          const { coffeeshop } = route.params;
          return {
            title: coffeeshop.name,
            headerRight: () => (
              <Icon
                name="md-cart"
                style={{ color: "white" }}
                onPress={() => navigation.navigate("CoffeeCart")}
              />
            ),
          };
        }}
      ></Screen>
      <Screen name="CoffeeCart" component={CoffeeCart}></Screen>
    </Navigator>
  );
}
