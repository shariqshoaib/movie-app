import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from './redux'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import VideoPage from './pages/VideoPage/VideoPage';
import Selectors from './redux/selectors';
import Api from './utils/Api'

const App = () => {
  const  { data, loading }  = Selectors();
  const dispatch = useDispatch(); 
  const { fetchVideos, fetchVideosSuccess, fetchVideoFailure } = bindActionCreators(actionCreators, dispatch)

  const fetch = async () => {
    fetchVideos();
    try{
      let data = Api();
      fetchVideosSuccess( data );
    }
    catch(e){
      fetchVideoFailure(e);
    }
  }

  useEffect( () => {
    fetch();
  }, [])

  if ( loading ) return <div>loading...</div>

  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path='/' exact > 
            <Home videos={ data } />
          </Route>
          <Route path='/video/:videoId' > 
            <VideoPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;