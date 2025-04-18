import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchArticles } from '../store/article/articlesActions.js';
import { takeUserFromLocalStorage } from '../store/user/userReducer.js';
import { getTags } from '../store/article/getTagsAction.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import SignUp from '../Sign-Up/Sign-Up.js';
import Post from '../Post/Post.js';
import SignIn from '../Sign-In/Sign-In.js';
import EditProfile from '../Edit-Profile/Edit-Profile.js';
import CreatePost from '../Create-Post/Create-Post.js';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(getTags());
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      dispatch(takeUserFromLocalStorage(JSON.parse(savedUser)));
    }
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
          <Header />
          <Route path='/' component={Main} exact />
          <Route path='/articles/:slug' component={Post} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/profile' component={EditProfile} />
          <Route path='/new-article' component={CreatePost} />
      </div>
    </Router>
  );
}

export default App;
