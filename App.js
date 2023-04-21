import { Provider } from 'react-redux';
import CustomInput from './src/components/Input/CustomInput';
import AppNavigator from './src/screens/App/AppNavigator';
import SignUp from './src/screens/SignUp/SignUp';
import store from './store';




export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}


