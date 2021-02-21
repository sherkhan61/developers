import {Redirect, Route, Switch} from "react-router";
import React, {lazy, Suspense} from "react";
import {ChatPage, UsersPage, FriendsPage, SearchPage, LoginPage} from '@pages'
import {Preloader} from '@ui/atoms/preloader/Preloader'


const ProfilePage = lazy(() => import("@pages/profile").then(({ProfilePage}) => (
  {default: ProfilePage}
)));

const NewsPage = lazy(() => import("@pages/news").then(({NewsPage}) => (
  {default: NewsPage}
)));

const MusicPage = lazy(() => import("@pages/music").then(({MusicPage}) => (
  {default: MusicPage}
)));

export const Routes = () => {

  return <Suspense fallback={<Preloader/>}>
    <Switch>
      <Route path={'/profile/:userId?'}>
        <ProfilePage/>
      </Route>
      <Route path="/news">
        <NewsPage/>
      </Route>
      <Route path="/music">
        <MusicPage/>
      </Route>
      <Route path="/chat">
        <ChatPage/>
      </Route>
      <Route path="/users/">
        <UsersPage/>
      </Route>
      <Route path="/friends">
        <FriendsPage/>
      </Route>
      <Route path="/search/:term?">
        <SearchPage/>
      </Route>
      <Route path="/login">
        <LoginPage/>
      </Route>
      <Redirect exact from="/" to="/profile/"/>
      <Route render={() => (
        <div>404 NOT FOUND</div>
      )}/>
    </Switch>
  </Suspense>
};