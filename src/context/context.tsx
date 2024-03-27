import { createContext, ReactNode, useReducer } from "react";
import { moviesData, MoviesDataType } from "../assets/data";

interface MovieContextProps {
  children: ReactNode;
}
interface MovieState {
  movies: MoviesDataType[];
}

const MovieList: MoviesDataType[] = moviesData;

const initialMovieState: MovieState = {
  movies: MovieList,
};


interface MovieAction {
  type: string;
  id: string;
}

const MovieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case "TOGGLED BOOKMARK":
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.id)
            {return {...movie, isBookmarked: !movie.isBookmarked,};}
          return movie;
        }),
      };
    default: 
        return state
  }
};



export const MovieContext = createContext<{
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}>({ state: initialMovieState, dispatch: () => {} });

export const MovieProvider = ({ children }: MovieContextProps) => {
  const [state, dispatch] = useReducer(MovieReducer, initialMovieState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

/* import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { moviesData, MoviesDataType } from "../assets/data";
import { ReactNode } from "react";
import { create } from "domain";

interface MovieContextProps {
  children: ReactNode;
}

interface MovieState {
  movies: MoviesDataType[];
}

const MovieList: MoviesDataType[] = moviesData;

const initialMovieState: MovieState = {
  movies: MovieList,
};

interface MovieAction {
    type: string;
    id: string;
  }

const movieSlice = createSlice({
  name: 'movies',
  initialState: initialMovieState,
  reducers: {
    TOGGLED_BOOKMARK: (state , action: PayloadAction<MovieAction>) => {
        movies: state.movies.map((movie) => {
          if (movie.id === action.payload)
            {return {...movie, isBookmarked: !movie.isBookmarked,};}
          return movie;
        })

        // movies: state.movies.map((movie) => {
        //   if (movie.id === action.id)
        //     {return {...movie, isBookmarked: !movie.isBookmarked,};}
        //   return movie;
        // }),
    }
  }


})

 */