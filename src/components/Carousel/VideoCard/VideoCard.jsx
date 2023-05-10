import './VideoCard.css';

function VideoCard({ videoUrl, imageUrl }) {
    return (
        <a className='videocard' href={ videoUrl } target='_blank' rel='noopener noreferrer'>
            <img className='videocard__image' src={ imageUrl } alt="Thumnail" />
        </a>
    )
}

export default VideoCard;