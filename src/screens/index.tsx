import React from "react";
import { Navigation } from "react-native-navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./Login";
import { Screens } from "./Screens";
import SignIn from "./SignIn";

function registerScreens(queryClient: QueryClient): void {
  Navigation.registerComponent(Screens.Login, () => Login);
  Navigation.registerComponent(Screens.SignIn, () => SignIn);
  Navigation.registerComponent(Screens.MyMap, () => {
    const MyMap = require("./MyMap").default;
    return (props) => (
      <QueryClientProvider client={queryClient}>
        <MyMap {...props} />
      </QueryClientProvider>
    );
  });

}

export { registerScreens };
