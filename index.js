import { LogBox } from "react-native";

import App from "./src/App";
LogBox.ignoreAllLogs(true);

new App();
