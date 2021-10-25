import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import './VideoPage.css';

export const VideoPage = (props) => {
    const { videos } = useSelector(state => state)
    const [ video, setVideo ] = useState();
    const { videoId } = useParams();
    

    useEffect(() => {
        setVideoHandle();
    }, [])

    const setVideoHandle = () => {
        const video = props.videos[videoId];
        setVideo(video);
    }

    if(video === undefined) return <div>Loading</div>
    return (
        <>
            <VideoPageContent 
                video={ video }
                suggestedVideos={ videos }
            />
        </>
    )
}

export default VideoPage;

const VideoPageContent = ({ video, suggestedVideos }) => {
    return (
        <div className='video-page-content'>
                <VideoContent 
                    video={ video }
                />
                <SuggestedVideos 
                    suggestedVideos={ suggestedVideos }
                />
        </div>
    )
}

const VideoContent = ({ video }) => {
    return (
        <div className='video-content'>
            <VideoPlayer 
                video={ video }
            />
            <Detials 
                video={ video }
            />
        </div>
    )
}

const VideoPlayer = ({ video }) => {
    
    return (
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
    )
}

const Detials = ({ video }) => {
    return (
        <div className='video-details'>
            <View 
                video={ video }
            />
        </div>
    )
}

const View = ({ video }) => {
    return (
        <div className='video-views'>
            <h1>{ video.title }</h1>
            <div>{ video.views }</div>
        </div>
    )
}

const SuggestedVideos = ({ suggestedVideos }) => {
    return (
        <div className='suggested-videos'>
            {
                suggestedVideos.map(( video, key ) => (
                    <SuggestedVideo 
                        key={ key }
                        video={ video }
                    />
                ))
            }
        </div>
    )
}

const SuggestedVideo = ({ video }) => {
    return (
        <div className='suggested-video'>
        <SuggestedThumbnail 
            video={ video }
        />
        <SuggestedDetails 
            video={ video }
        />
        </div>
    )
}

const SuggestedDetails = ({ video }) => {
    return(
        <div className='suggested-details'>
           <h2>{ video.title }</h2>
            <div>{ video.views }</div>
        </div>
    )
}


const SuggestedThumbnail = ({ video }) => {
    return (
        <div class='suggested-thumbnail'>
             <ReactPlayer
                url={ video.videoLink }
                playing='flase'
                width='100%'
                height='100%'
                
            />
        </div>
    )
}

