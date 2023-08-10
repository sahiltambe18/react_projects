import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './store/index'

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {

  return (
    <Provider store={store} >
      <Router>
        <Layout>
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/auth' element={<UserProfile />} />
            <Route path='/profile' element={<AuthPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;


// https://console.firebase.google.com/project/auth-demo-66854/database/auth-demo-66854-default-rtdb/data/~2F