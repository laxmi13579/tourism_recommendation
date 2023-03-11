import { CardHeader, Card, Typography, CardMedia, Link, Box, Rating } from '@mui/material'
import React from 'react'

const Post = (props) => {
    const [value, setValue] = React.useState(props.rating);
  return (
    <Card sx={{m:2,p:4}}>
        <Link href={props.source}><Typography variant='h4' color='text.primary'>{props.place}</Typography></Link>
        <p>Fee: {props.fee}</p>
        <p>Location: {props.location}<span>{props.coodinate}</span></p>
        <p>Description: {props.description}</p>
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
            >
            <Typography component="legend">Number of people reviews: <span>{props.reviews_count}</span></Typography>
            <Rating name="read-only" value={value} readOnly />
            </Box>


    </Card>
  )
}

export default Post