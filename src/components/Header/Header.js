import React from 'react'
import { Link } from 'react-router-dom';
import { FaYoutube } from 'react-icons/fa';
import { MdSearch, MdVideoCall, MdViewComfy } from 'react-icons/md';
import { AiTwotoneBell } from 'react-icons/ai'
import './Header.css'


const Header = () => {
    const videoElement = <MdVideoCall fontSize='2.8rem' />;
    const viewElement = <MdViewComfy fontSize='2.8rem' />;
    const bellElement = <AiTwotoneBell fontSize='2.8rem' />;

    return(
        <div className='header'>
            <Link to={ `/` } style={{ textDecoration:'none', color:'black' }} >
                <div className='logo'>
                    <FaYoutube color='red' fontSize='3rem'/>
                    <span>Movie App</span>
                </div>
            </Link>
            <div className='search'>
                <input type='search' placeholder='Search' />
                <div>
                    <MdSearch fontSize='3rem' />
                </div>
            </div>
            <div className='icons'>
                <Icon iconElement={ videoElement } />
                <Icon iconElement={ viewElement } />
                <Icon iconElement={ bellElement } />
                <Thumbnail src='https://source.unsplash.com/random&gravity=center.com' />
            </div>
        </div>
    )
}

export default  Header;

const Icon = ({ iconElement }) => {
    return(
        <div className='icon'>
            { iconElement }
        </div>
    )
}

const Thumbnail = ({ src }) => {
    return (
        <div className='icon'>
            <img class='thumbnail' src={ src } />
        </div>
    )
}