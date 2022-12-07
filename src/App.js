import './App.css';
import Navbar from './pages/Navbar';
import Items from './pages/Items';
import Footer from './pages/Footer';
import Additems from './pages/Additems';
import Cart from './pages/Cart';
import { PersistGate } from 'redux-persist/es/integration/react'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const persistConfig = {
    key: 'root',
    storage: storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return (
    <div className="App">
   <Provider store={store}>
    <PersistGate persistor={persistor}>
     <Router>
     <Navbar/>
      <Routes>
       
          <Route path="/"element={<Items />} />
          <Route path="/additems" element={<Additems />}> </Route>
          <Route path="/cart"element={<Cart/>} />
      </Routes>
      <Footer/>
    </Router>
    </PersistGate>
    </Provider>
  

    </div>
  );
}

export default App;
