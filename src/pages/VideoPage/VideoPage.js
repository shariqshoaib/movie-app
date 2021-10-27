import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy';
import { selectVideos, isLoading } from '../../redux/videos/selectors';
import './VideoPage.css';

export const VideoPage = () => {
    const data = useSelector(selectVideos);
    const loading = useSelector(isLoading);
    const [ video, setVideo ] = useState({});
    const { videoId } = useParams();

    useEffect( () =>  setVideoHandle() , [videoId] )

    const setVideoHandle = () => {
        let currentVideo = data[videoId];
        setVideo(currentVideo);
    }

    if(loading && !video) return <div>isLoading</div>
    return (
        <>
            <div className='video-page-content'>
                <div className='video-content'>
                    <div className='video-player'>
                        <ReactPlayer
                            url={ video.videoLink }
                            controls='true'
                            width='100%'
                            height='100%'
                            playIcon='true'
                            controls 
                        />
                    </div>
                    <div className='video-details'>
                        <div className='video-views'>
                            <h1>{ video.title }</h1>
                            <div>{ video.views }</div>
                        </div>
                    </div>
                </div>
                <div className='suggested-videos'>
                    { data.map( (video, key) => (
                        <Link 
                            key={ key } 
                            to={ `/video/${key}` } 
                            style={{ textDecoration:'none', color:'black' }} 
                        >
                            <div className='suggested-video'>
                                <div className='suggested-thumbnail'>
                                    <ReactPlayer
                                        url={ video.videoLink }
                                        playing={false}
                                        width='100%'
                                        height='100%'
                                    />
                                </div>
                                <div className='suggested-details'>
                                    <h2>{ video.title }</h2>
                                    <div>{ video.views }</div>
                                </div>
                            </div>
                        </Link>
                        )) }
                </div>
            </div>
        </>
    )
}

export default VideoPage;
