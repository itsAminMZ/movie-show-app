import { Box, Card, Grid, Paper } from "@mui/material"
import { MoviesDataType } from "../../assets/data"
import MovieTrendCard from "../movie-card/movieTrendCard"

interface MovieTrendListProps {
    trendingList: MoviesDataType[]
}



function MovieTrendList({trendingList}: MovieTrendListProps) {
  return (
    <Box sx={{display:'flex' , gap:2 , overflow:'auto'}}>
      {trendingList.map((movie: MoviesDataType) => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{bgcolor:'transparent'}}>
            <MovieTrendCard movie={movie}/>
          </Paper>
        </Grid>
      ))}
    </Box>
  )
}

export default MovieTrendList