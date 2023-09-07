import { Card, CardMedia } from "@mui/material";

const VideoCard = ({videoUrl}) => {
  const getVideoId = (url) => {
    const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);

  if (!videoId) {
    return <div>No se pudo encontrar el video</div>;
  }

  // URL para la miniatura del video
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardMedia
        sx={{height: 180}}
        image={thumbnailUrl}
        title="green iguana"
      />
    </Card>
  );
};

export default VideoCard;
