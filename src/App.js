import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useSelector,useDispatch } from 'react-redux';
import { actionCreators } from './redux'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import VideoPage from './pages/VideoPage/VideoPage';
import Api from './utils/Api'

const App = () => {
  const { videos } = useSelector(state => state)
  const dispatch = useDispatch();
  const { setVideos } = bindActionCreators(actionCreators, dispatch)

  const initVideos = () => {
    const videos = Api();
    setVideos(videos);
  }

  useEffect(() => {
    initVideos();
  }, [])

  if(videos === 0) return <div>loading...</div>
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path='/' exact > <Home videos={videos} /></Route>
          <Route path='/video/:videoId' > <VideoPage video={videos[0]} videos={videos} /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;