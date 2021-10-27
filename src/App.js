import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { actionCreators } from './redux/videos/actions'
import Header from './components/Header';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import { selectVideos, isLoading } from './redux/videos/selectors';
import videoApi from './utils/videoApi'

const App = () => {
  const data = useSelector(selectVideos);
  const loading = useSelector(isLoading);

  const dispatch = useDispatch(); 
  const { 
    fetchVideos, 
    fetchVideosSuccess, 
    fetchVideoFailure 
  } = bindActionCreators(actionCreators, dispatch)
  
  const fetch = async () => {
    fetchVideos();
    try {
      let data = videoApi();
      fetchVideosSuccess( data );
    }
    catch(error) {
      fetchVideoFailure(error);
    }
  }

  useEffect( () => fetch(), [])

  if (loading) return <div>isLoading...</div>

  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path='/' exact > 
            <Home />
          </Route>
          <Route path='/video/:videoId' > 
            <VideoPage video= { data } />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;