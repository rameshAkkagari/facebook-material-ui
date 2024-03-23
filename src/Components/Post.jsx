import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, CardActions, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, Checkbox } from '@mui/material'
function Post() {
  return (
    <div>
        <Card sx={{margin:"5px"}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />

            <CardMedia
                component="img"
                height="20%"
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
                    </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
    </Card>
    </div>
  )
}

export default Post