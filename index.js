import { AppRegistry } from "react-native";
import App from "./views";
console.disableYellowBox = true; //禁用warning显示
global._fetch = fetch;
global.fetch = function(uri, options, ...args) {
  return global._fetch(uri, options, ...args).then(response => {
    console.log("Fetch", { request: { uri, options, ...args }, response });
    return response;
  });
};
AppRegistry.registerComponent("jike", () => App);
