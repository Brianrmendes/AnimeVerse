import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import { useDispatch, useSelector } from 'react-redux';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch(selectUser);
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //Logged in
        dispatch(
          login({
          uid: userAuth.uid,
          email:userAuth.email,

        })
          );
      } else {
        //Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;

  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user?(
          <LoginScreen />
        ) : (
        
        <Switch> 
        <Route path='/profile'>
          <ProfileScreen />

        </Route>
        <Route exact path="/">
          <HomeScreen />
          </Route>
        </Switch>
  )}
    </Router>
    </div>
  );
}

export default App;
