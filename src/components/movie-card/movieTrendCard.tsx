import React, { useContext } from "react";
import { MoviesDataType } from "../../assets/data";
import { MovieContext } from "../../context/context";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import TvSeriesIcon from "@mui/icons-material/Tv";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface MovieTrendCardProps {
  movie: MoviesDataType;
}

function MovieTrendCard({ movie }: MovieTrendCardProps) {
  const { dispatch } = useContext(MovieContext);
  const handleToggleBookmark = (id: string) => {
    console.log("dis", dispatch, "\n id", id);

    dispatch({ type: "TOGGLED BOOKMARK", id });
  };

  return (
    <Card
      key={movie.id}
      elevation={0}
      style={{ backgroundColor: "transparent", color: "white" }}
    >
      {
        <CardContent
          style={{
            padding: 0,
            position: "relative",
            display: "flex",
            overflowX: "auto",
          }}
        >
          <img
            src={movie.thumbnail?.trending.picture}
            alt='regularPic'
            style={{ width: "280px", height: "168px", borderRadius: "8px" }}
          />
          <Box
            position='absolute'
            top={0}
            bottom={0}
            right={0}
            left={0}
            bgcolor='rgba(0,0,0,0.6)'
            borderRadius='8px'
          />
          <Stack
            mt='6'
            spacing={0}
            position='absolute'
            bottom={0}
            right={0}
            left={0}
            p={4}
          >
            <Grid spacing={1} alignItems='center' container>
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
                    width: "1rem",
                    height: "1rem",
                    bg: "#E0E0E0",
                    borderRadius: "full",
                  }}
                />
              </Grid>
              <Grid item>
                {movie.category === "Movies" ? (
                  <MovieIcon sx={{ width: 16, height: 16 }} />
                ) : (
                  <TvSeriesIcon sx={{ width: 16, height: 16 }} />
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
                    width: "1rem",
                    height: "1rem",
                    bg: "#E0E0E0",
                    borderRadius: "full",
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
          </Stack>
          <Box
            position='absolute'
            top={0}
            bottom={0}
            right={0}
            left={0}
            display='flex'
            justifyContent='flex-end'
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
                <BookmarkIcon sx={{ height: "30px", width: "30px" }} />
              ) : (
                <BookmarkBorderIcon sx={{ height: "30px", width: "30px" }} />
              )}
            </Box>
          </Box>
        </CardContent>
      }
    </Card>
  );
}

export default MovieTrendCard;
