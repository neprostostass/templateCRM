import React from 'react'
import Header from './components/Header/header'
import Navbar from './components/Navbar/navbar'
import Profile from './components/Profile/profile'
import MessagesContainer from './components/Messages/messagesContainer';
import News from './components/News/news'
import Music from './components/Music/music'
import Settings from './components/Settings/settings'

import s from './App.module.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

export default function App({ state, dispatch }) {

  return (
    <Router >

      <div className={s.wrapper}>

        <div className={s.Header}>
          <Header />
        </div>

        <div className={s.Navbar}>
          <Navbar />
        </div>

        <div className={s.content}>
          <Switch>

            <Route exact path="/profile">
              <div className={s.Profile}>
                <Profile
                // state={state.profilePage}
                // dispatch={dispatch}
                />
              </div>
            </Route>

            <Route path="/messages">
              <div className={s.Messages}>
                <MessagesContainer
                // state={state.messagesPage}
                // dispatch={dispatch}
                />
              </div>
            </Route>

            <Route exact path="/news">
              <div className={s.News}>
                <News />
              </div>
            </Route>

            <Route exact path="/music">
              <div className={s.Music}>
                <Music />
              </div>
            </Route>

            <Route exact path="/settings">
              <div className={s.Settings}>
                <Settings />
              </div>
            </Route>

            <Route exact path="/">
              <Redirect to="/profile" />
            </Route>

          </Switch>
        </div>
      </div>

    </Router >

  );
}