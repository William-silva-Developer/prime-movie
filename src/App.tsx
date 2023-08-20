import React from 'react';

import RoutesApp from './pages/routes/RoutesApp';
import { Provider } from 'react-redux';
import { store } from './store';




const App: React.FC = () => {
  return (
    <Provider store={store}>
      
      <RoutesApp />
    
    </Provider>
  )
}

export default App;