import React from "react";
import { Navigation } from "react-native-navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import Login from "./Login";
import { Screens } from "./Screens";
import SignIn from "./SignIn";

function registerScreens(queryClient: QueryClient): void {
  Navigation.registerComponent(Screens.Login, () => Login);
  Navigation.registerComponent(Screens.SignIn, () => SignIn);
  Navigation.registerComponent(Screens.GameList, () => {
    const GameList = require("./GameList").default;
    return (props) => (
      <QueryClientProvider client={queryClient}>
        <GameList {...props} />
      </QueryClientProvider>
    );
  });

  Navigation.registerComponent(Screens.Profile, () => {
    const Profile = require("./Profile").default;
    return (props) => (
      <QueryClientProvider client={queryClient}>
        <Profile {...props} />
      </QueryClientProvider>
    );
  });

  Navigation.registerComponent(Screens.Erace, () => {
    const Erace = require("./Erace").default;
    return (props) => (
      <QueryClientProvider client={queryClient}>
        <Erace {...props} />
      </QueryClientProvider>
    );
  });
}

export { registerScreens };
