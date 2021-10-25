import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = (props) => {
    return (
        <div className='home'>
            <Content videos={props.videos}/>
        </div>
    )
}
export default  Home;

const Content = ({ videos }) => {
    return (
        <div className='videos'>
        { 
            videos.map((video, key) => (
                <Link to={`/video/${key}`} style={{textDecoration:'none', color:'black'}}>
                    <Video props={ video }/>
                </Link>
            )) 
        }
        </div>
    )
}

const Video = ({ props }) => {
    return(
        <div className='video'>
            <VideoPlayer 
                videoLink={ props.videoLink }
            />
            <VideoDetails 
                title={ props.title }
                thumbnailLink={ props.thumbnailLink }
                views={ props.views }
            />
        </div>
    )
}

const VideoPlayer = ({ videoLink }) => {
    return (
        <div className='video-player'>
            <ReactPlayer
                url={ videoLink }
                height = '170px'
                width = '280px' 
            />
        </div>
    )
}

const VideoDetails = ({ title, thumbnailLink, views}) => {
    return (
        <div className='video-details'>
            <VideoThumbnail 
                link={ thumbnailLink } 
                title={ title }
            />
            <View 
                viewDetails={ views }
            />
        </div>
    )
}

const VideoThumbnail = ({ link,title }) => {
    return(
        <div className='video-thumbnail'>
            <img 
                src={ link } 
                alt='React' 
                style={{height:'35px', width:'35px', borderRadius:'50%'}} 
            />
            <div>{ title }</div>
        </div>
    )
}

const View = ({ viewDetails }) => {
    return (
        <div className='video-views'>
            { viewDetails }
        </div>
    )
}