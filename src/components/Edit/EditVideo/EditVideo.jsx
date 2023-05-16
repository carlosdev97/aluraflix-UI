import './EditVideo.css';

function EditVideo({ videos }) {
    return <section className='editvideo'>
        {videos.map((video) => {
            console.log(video)
        })}
    </section>
}

export default EditVideo;