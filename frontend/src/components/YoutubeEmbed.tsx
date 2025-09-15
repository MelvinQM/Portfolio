import "./YoutubeEmbed.css";

export default function YouTubeEmbed ({ videoId, className }: {videoId: string, className?: string}) {
    return (
      <div className="youtube-embed-wrapper">
        <div className={`youtube-container ${className}`}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
};