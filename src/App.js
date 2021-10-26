import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import VideoPage from './pages/VideoPage/VideoPage';
import Api from './utils/Api'

const App = () => {
  const [videos, setVideos] = useState(Api());

  useEffect(() => {
    setVideos(videos);
    console.log(videos)
  }, [])

  if(videos === undefined) return <div>loading...</div>
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