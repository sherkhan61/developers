import {Redirect, Route, Switch} from "react-router";
import React, {lazy, Suspense} from "react";
import {DialogsPage, UsersPage, FriendsPage, SearchPage, LoginPage} from './pages'
import {Preloader} from './ui/atoms/preloader/Preloader'


const ProfilePage = lazy(() => import("./pages/profile").then(({ProfilePage}) => (
  {default: ProfilePage}
)));

export const Routes = () => {

  return <Suspense fallback={<Preloader/>}>
    <Switch>
      <Route path={'/profile/:userId?'}>
        <ProfilePage/>
      </Route>
      <Route path="/dialogs">
        <DialogsPage/>
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