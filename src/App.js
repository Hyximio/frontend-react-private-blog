import React, { useState } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import TopMenu from "./components/TopMenu";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import BlogPostsPage from "./pages/BlogPostsPage";
import BlogPostPage from "./pages/BlogPostPage";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <>
            <TopMenu auth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
            <Switch>
                <Route auth={isAuthenticated} exact path="/">
                 <HomePage />
                </Route>
                <Route exact path="/login">
                 <LoginPage authToggle={toggleIsAuthenticated} />
                </Route>
                <PrivateRoute auth={isAuthenticated} exact path="/blogposts">
                    <BlogPostsPage />
                </PrivateRoute>
                <PrivateRoute auth={isAuthenticated} path="/blogposts/:id">
                    <BlogPostPage />
                </PrivateRoute>
            </Switch>
      </>
  );
}

export default App;
