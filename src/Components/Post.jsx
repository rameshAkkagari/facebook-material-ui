import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, CardActions, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, Checkbox } from '@mui/material'
const users = [
    {
        "name": "Alice",
        "title": "New API Integration",
        "date": "June 5, 2017",
        "description": "Successfully integrated a new payment API into our app. Smooth transactions ahead!",
        "image": "https://media.istockphoto.com/id/1317706831/photo/api-application-programming-interface-software-development-tool-business-modern-technology.jpg?s=612x612&w=0&k=20&c=V4hdG0NiqKhbk4VFwFktNs6bhq8yXo_Tqd__8vKZqdk="
    },
    {
        "name": "Bob",
        "title": "Code Refactoring",
        "date": "August 23, 2018",
        "description": "Spent the day refactoring old code. Our codebase is much cleaner now!",
        "image": "https://xbsoftware.com/wp-content/uploads/2023/03/CODE-REFACTORING-1-1024x652.jpg"
    },
    {
        "name": "Carol",
        "title": "UI Overhaul",
        "date": "November 12, 2019",
        "description": "Redesigned the user interface for our main dashboard. Looks much more modern!",
        "image": "https://community.nasscom.in/sites/default/files/media/images/What%20is%20UIUX%20Transformation%20and%20How%20Does%20it%20Benefit%20Businesses-04_0.jpg"
    },
    {
        "name": "David",
        "title": "Database Optimization",
        "date": "March 7, 2020",
        "description": "Optimized our database queries to improve load times. Performance boost!",
        "image": "https://miro.medium.com/v2/resize:fit:1200/1*6JML4lDha0Q196VD2cfhnQ.png"
    },
    {
        "name": "Ella",
        "title": "React Component Library",
        "date": "April 15, 2021",
        "description": "Built a reusable component library in React for faster development.",
        "image": "https://www.angularminds.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fangularminds.com%2Fnew-blog-images%2Ftop-react-ui-libraries.jpg&w=3840&q=75"
    },
    {
        "name": "Frank",
        "title": "Automated Testing",
        "date": "July 30, 2021",
        "description": "Set up automated tests using Jest and Cypress. QA process is now streamlined!",
        "image": "https://www.netsolutions.com/insights/wp-content/uploads/2023/05/types-of-automation-testing.webp"
    },
    {
        "name": "Grace",
        "title": "Microservices Architecture",
        "date": "October 2, 2021",
        "description": "Migrated our monolithic app to a microservices architecture. Scalability improved!",
        "image": "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FMicroservices_Architecture_ff0d8122aa.jpg&w=4500&q=90"
    },
    {
        "name": "Hank",
        "title": "Docker Deployment",
        "date": "January 14, 2022",
        "description": "Deployed our application using Docker. Deployment process is now more efficient.",
        "image": "https://blog.back4app.com/wp-content/uploads/2023/02/docker-deploy-cover-1.webp"
    },
    {
        "name": "Ivy",
        "title": "Serverless Functions",
        "date": "May 20, 2022",
        "description": "Implemented serverless functions with AWS Lambda. Reduced server costs!",
        "image": "https://blog.back4app.com/wp-content/uploads/2023/03/function-as-a-service-cover.webp"
    },
    {
        "name": "Jack",
        "title": "GraphQL API",
        "date": "August 8, 2022",
        "description": "Developed a GraphQL API for more flexible data queries. Loving the new possibilities!",
        "image": "https://d2ms8rpfqc4h24.cloudfront.net/what_is_graphql_f9a7e88d9c.jpg0"
    },
    {
        "name": "Kelly",
        "title": "Continuous Integration",
        "date": "November 27, 2022",
        "description": "Implemented CI/CD pipelines with Jenkins. Our release cycle is now much faster.",
        "image": "https://miro.medium.com/v2/resize:fit:640/0*h-oNfEHFjEB2hOpZ.png"
    },
    {
        "name": "Leo",
        "title": "AI Chatbot",
        "date": "February 19, 2023",
        "description": "Developed an AI chatbot for customer support. Improved response times significantly!",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPI9fsUXqViSMMTNJ1TfjHJRWKe2BRHF08w&s"
    }
]

function Post() {
  return (
    <div>
        {
            users.map((userpost)=> 
            <div>
                <Card sx={{margin:"5px"}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    {userpost.name}
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title={userpost.title}
                subheader={userpost.date}
            />

            <CardMedia
                component="img"
                height="20%"
                image={userpost.image}
                alt={userpost.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
               {userpost.description}
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
            </div>)
        }
        {/* <Card sx={{margin:"5px"}}>
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
    </Card> */}
    </div>
  )
}

export default Post