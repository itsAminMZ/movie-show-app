import { Box, Grid, Paper } from "@mui/material";
import { MoviesDataType } from "../../assets/data";
import MovieCard from "../movie-card";

interface MovieListProps {
  recommendList: MoviesDataType[];
}

function MovieList({ recommendList }: MovieListProps) {
  return (
    <Box sx={{ overflow: "auto" }}>
      <Grid container spacing={2}>
        {recommendList.map((movie: MoviesDataType) => (
          <Grid item key={movie.id} xs={12} md={4} >
            <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
              <MovieCard movie={movie} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MovieList;
