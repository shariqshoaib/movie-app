import { Link } from 'react-router-dom';
import './Home.css'

import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { selectVideos, isLoading } from '../../redux/videos/selectors';
import './Home.css';

export const Home = () => {
    const data = useSelector(selectVideos);
    const loading = useSelector(isLoading);

    if(loading) return <div>isLoading...</div>
    return (
        <div className='home'>
            <div className='videos'>
            { data.map( (video, key) => (
                <Link to={`/video/${ key }`} style={{ textDecoration:'none', color:'black' }}>
                    <Video video = { video } />
                </Link>
            ))}
            </div>
        </div>
    )
}
export default  Home;

const Video = ({ video }) => {
    return (
        <div className='video'>
            <div className='video-player'>
                <ReactPlayer url={ video.videoLink } height='200px%' width='100%' />
                <div className='video-details'>
                    <div className='video-thumbnail'>
                        <img 
                            src={ video.thumbnailLink } 
                            alt='React' 
                            style={{ height:'35px', width:'35px', borderRadius:'50%' }} 
                        />
                        <div>{ video.title }</div>
                    </div>
                    <div className='video-views'>
                        { video.viewDetails }
                    </div>
                </div>
            </div>
        </div>
    )
}