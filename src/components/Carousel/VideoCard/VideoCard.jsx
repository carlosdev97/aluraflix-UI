import './VideoCard.css';

function VideoCard(props) {

    const { embedId } = props;

    return (
        <iframe 
        width="400" 
        height="200" 
        src={`https://www.youtube.com/embed/${link}`} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
    )
}

export default VideoCard;