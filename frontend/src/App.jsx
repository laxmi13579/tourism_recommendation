import { useEffect, useState } from 'react'
import axios from 'axios';
import Post from './components/Post';
import Navbar from './components/Navbar';
import { Grid, ListItem } from '@mui/material';



function App() {
  const [tourists, setTourists] = useState([]);
  const [recommended,setRecommended] = useState('ReviewsCount');

  useEffect(()=>{
    async function fetchTouristsBasedOnRating(){
      const {data} = await axios.get('http://127.0.0.1:8000/api/rating');
      console.log(data)
      setTourists(data)
    }

    async function fetchTouristsBasedOnReviewsCount(){
      const {data} = await axios.get('http://127.0.0.1:8000/api/reviews_count');
      console.log(data)
      setTourists(data)
    }
    if(recommended==='Rating'){
      return ()=> fetchTouristsBasedOnRating();
    }
    if(recommended==='ReviewsCount'){
      return ()=> fetchTouristsBasedOnReviewsCount();
    }
  },[])

  return (
    <>
      <Navbar/>
    <h3>Bali Popular Destination for Tourist based on: {recommended}</h3>
    <Grid container sx={{flex:1}}>
      <Grid>
        {tourists.map((tourist)=>(
          <ListItem>
            <Post key={tourist.id} 
            place={tourist.place}
            location={tourist.location}
            coordinate={tourist.coordinate}
            rating={tourist.rating}
            reviews_count={tourist.reviews_count}
            source={tourist.source}
            description={tourist.description}
            fee={tourist.fee}
            />
          </ListItem>
        ))}
      </Grid>
    </Grid>

    </>
  )
}

export default App
