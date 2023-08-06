import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';



const StoreProvider = () => {
  return (
    <Provider store={store}>
      <App/>  
    </Provider>
  )
}

export default StoreProvider;

