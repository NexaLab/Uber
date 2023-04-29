import { Provider } from 'react-redux';
import AppNavigator from './src/screens/App/AppNavigator';
import store from './store';




export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}