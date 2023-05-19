import './VideoCard.css';

function VideoCard({ videoUrl, imageUrl, color }) {
    return (
        <a className='videocard' href={ videoUrl } target='_blank' rel='noopener noreferrer'>
            <img className='videocard__image' src={ imageUrl } alt="Thumnail" style={{ borderColor: color }}/>
        </a>
    )
}

export default VideoCard;