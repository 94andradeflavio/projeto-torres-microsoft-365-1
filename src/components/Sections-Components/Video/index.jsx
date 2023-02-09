import './styles.css'

const Video = ({embedId, title}) => {

    return (
        <div className="video-wrapper">
            <h5>{ title }</h5>
            <iframe
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
                />
        </div>
    )
}

export default Video