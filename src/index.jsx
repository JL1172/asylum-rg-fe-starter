import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch,
} from 'react-router-dom';

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';

import { FooterContent, SubFooter } from './components/Layout/Footer';
import HeaderContent from './components/Layout/Header';

// import { TablePage } from './components/pages/Table';

import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';
import { Auth0Provider } from '@auth0/auth0-react';
import ProfilePage from './components/pages/ProfilePage';
const { primary_accent_color } = colors;

const store = configureStore({ reducer: reducer });
ReactDOM.render(
  <Auth0Provider
    domain={process.env.DOMAIN || 'dev-eqszr7hd3w01e1xb.us.auth0.com'}
    clientId={process.env.CLIENTID || 'LCT5VqNQ7R9AJACGErRHYKWiiom9Y0fE'}
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/profile',
    }}
  >
    <Router>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </Router>
  </Auth0Provider>,
  document.getElementById('root')
);

function App() {
  const { Footer, Header } = Layout;
  return (
    <Layout>
      <Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
      </Header>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/graphs" component={GraphsContainer} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          color: '#E2F0F7',
        }}
      >
        <FooterContent />
      </Footer>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          padding: 0,
        }}
      >
        <SubFooter />
      </Footer>
    </Layout>
  );
}

export default App;
