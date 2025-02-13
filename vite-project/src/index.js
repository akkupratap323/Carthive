import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider,useAuth0 } from '@auth0/auth0-react';
import App from './routes/App.jsx';


const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-zm6zdp1peux8gtlt.us.auth0.com"
    clientId="sGSVPACM1RLgNq7QIoMNNQDzuijtmPrv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);