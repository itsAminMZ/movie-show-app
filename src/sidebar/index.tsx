import { Box, Hidden, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import TvSeriesIcon from "@mui/icons-material/Tv";
import BookmarkIcon from "@mui/icons-material/BookmarkBorder";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "home",
    icon: HomeIcon,
    link: "/",
  },
  {
    name: "movies",
    icon: MovieIcon,
    link: "/movies",
  },
  {
    name: "Tv series",
    icon: TvSeriesIcon,
    link: "/tv-series",
  },
  {
    name: "bookmark",
    icon: BookmarkIcon,
    link: "/bookmark",
  },
];
const Index = () => {
  const { pathname } = useLocation();
  return (
    <>
    <Box
      sx={{
        padding: 2,
        bgcolor: "#161d2f",
        display: "flex",
        gap: 2,
        borderRadius: 2,
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        justifyContent: "start", 
        alignItems: "center",
        width: {
          xs: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          justifyContent: 'center',
          width: "100%",
        }}
      >
        <Hidden smDown>
          <Typography
            variant='h5'
            component='h1'
            fontWeight={400}
            my={2}
            fontSize={18}
          >
            Movie
          </Typography>
        </Hidden>
        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "16px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link
              to={item.link}
              key={item.name}
              style={{ textDecoration: "none" }}
            >
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                color: 'white',
                textDecoration: 'none'
              }}>
                  <item.icon color= {pathname === item.link ? 'secondary' : 'inherit'}/>  
                <Hidden mdDown>
                  <Typography color= {pathname === item.link ? 'secondary' : 'inherit'}>{item.name}</Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Index;
