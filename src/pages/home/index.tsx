import React, { SetStateAction, useContext, useState } from "react";
import Layout from "../../layout";
import { Box, InputAdornment, InputBase, Paper, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MovieTrendList from "../../components/movie-list/movieTrendList";
import MovieList from "../../components/movie-list";
import { MoviesDataType } from "../../assets/data";
import { MovieContext } from "../../context/context";

function Home() {
  const [search , setSearch] = useState('');
  const [searchList , setSearchList] = useState<MoviesDataType[]>([])
  const {state} = useContext(MovieContext)
  const {movies} = state;
  const trendingList= movies.filter((movie) => movie.isTrending === true)
  const recommendList = movies.filter((movie) => movie.isTrending !== true)
  
  
  
  const handleSearch = (e: { target: { value:SetStateAction<string>}}) => {
    setSearch(e.target.value)
    const newList = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLocaleLowerCase()))
    setSearchList(newList)
  }
  return (
    <>
      <Layout>
        <Box sx={{overflow:'auto'}}>
          <Paper
            component='form'
            sx={{
              display: "flex",
              borderRadius: "default",
              alignItems: "center",
              p: 1,
              // border: 'none', // ??,
              bgcolor: "#161d2f",
              color: "white",
            }}
          >
            <InputBase 
            placeholder= "Search movies and TV-series"
            sx={{
              color: "white",
              ml: 1, 
              border: "none", 
              flex: 1 // ?? 
            }} 
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{color: 'white'}}/>
              </InputAdornment>
            }
            />
          </Paper>
        </Box>
        <Box py={2} px={4}>
          {search === '' ? (
            <Box width='100%' height='1000px' sx={{overflow:'auto'}}>

              <Box width='100%' >
                <Typography variant="h5" component='h1' fontWeight={400} my={6}>Trending</Typography>
                <MovieTrendList trendingList = {trendingList}/>
              </Box>

              <Box width='100%' height='100%'>
                <Typography variant="h5" component='h1' fontWeight={400} my={6}>Recommend For You</Typography>
                <MovieList recommendList = {recommendList}/>
              </Box>

            </Box>
          ) : (
            <Box width='100%'>
              <Typography>Found {searchList.length} results for "{search}"</Typography>
              <MovieList recommendList={searchList}/>
            </Box>
          )}
        </Box>
      </Layout>
    </>
  );
}

export default Home;
