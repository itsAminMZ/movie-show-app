import React, { useContext } from "react";
import { MoviesDataType } from "../../assets/data";
import { MovieContext } from "../../context/context";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import TvSeriesIcon from "@mui/icons-material/Tv";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface MovieCardProps {
  movie: MoviesDataType;
}

function MovieCard({ movie }: MovieCardProps) {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    dispatch({ type: "TOGGLED BOOKMARK", id });
  };
  

  return (
    <Card
      variant='outlined'
      sx={{ bgcolor: "transparent", p: 0, position: "relative" }}
    >
      <CardContent sx={{ p: 0, position: "relative" }}>
        <Grid spacing={1} container>
          <Grid item>
            <img
              src={movie.thumbnail?.regular.picture}
              alt='recommend list'
              style={{ width: "390px", height: "180px", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems='center'>
              <Grid item>
                <Typography
                  fontSize={10}
                  color='#E0E0E0'
                  aria-label='year of movie'
                >
                  {movie.year}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>
              <Grid item>
                {movie.category === "Movies" ? (
                  <MovieIcon sx={{ width: 16, height: 16, color: "#E0E0E0" }} />
                ) : (
                  <TvSeriesIcon
                    sx={{ width: 16, height: 16, color: "#E0E0E0" }}
                  />
                )}
              </Grid>
              <Grid item>
                <Typography
                  fontSize={10}
                  color='#E0E0E0'
                  aria-label='movie category'
                >
                  {movie.category}
                </Typography>
              </Grid>
              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>

              <Grid item>
                <Typography
                  fontSize={12}
                  color='#E0E0E0'
                  aria-label='movie rating'
                  sx={{ mr: "5px", color: "yellow" }}
                >
                  {movie.rating} IMDb
                </Typography>
              </Grid>
            </Grid>
            <Typography color='#E0E0E0' padding={0} aria-label='movie title'>
              {movie.title}
            </Typography>
          </Grid>
          <Box
            position='absolute'
            top={0}
            bottom={0}
            right={0}
            left={0}
            display='flex'
            justifyContent='flex-start'
            padding='16px'
          >
            <Box
              sx={{
                cursor: "pointer",
                height: "35px",
                width: "35px",
                borderRadius: "100%",
                bgcolor: "rgba(0,0,0,0.6)",
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}
              onClick={() => handleToggleBookmark(movie.id)}
            >
              {movie.isBookmarked === true ? (
                <BookmarkIcon  sx={{ height: "30px", width: "30px" , color:"#E0E0E0" }} />
              ) : (
                <BookmarkBorderIcon sx={{ height: "30px", width: "30px" , color:"#E0E0E0" }} />
              )}
            </Box>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
