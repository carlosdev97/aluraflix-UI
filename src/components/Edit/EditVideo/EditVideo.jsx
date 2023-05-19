import './EditVideo.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function EditVideo({ videos }) {
    return <section className='editvideo'>
        { 
            videos.map((video, index) => {
                const { titulo, videoUrl, imageUrl, descripcion } = video;
                return <Card key={index} sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={ imageUrl }
                            alt={ titulo }
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                { titulo }
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                { descripcion }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            })
        }
    </section>
}

export default EditVideo;