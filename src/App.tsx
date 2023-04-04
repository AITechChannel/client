import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import './App.scss';
import router from './routers/router';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
