import "./App.scss";
import router from "./routers/router";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;