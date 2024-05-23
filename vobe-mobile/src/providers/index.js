import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "../store";

function Providers({ children }) {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      {children}
    </Provider>
  )
}

export default Providers