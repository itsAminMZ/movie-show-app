import { movieLinks } from "./movieLinks";
export interface MoviesDataType {
  id: string;
  title: string;
  thumbnail?: {
    regular: {
      picture: string;
    };
    trending: {
      picture: string;
    };
  };
  year: number
  category: string
  rating: number
  isBookmarked:boolean
  isTrending: boolean
}

export const moviesData = [
  {
    id: '1',
    title: 'The Green Mile' ,
    thumbnail: {
      regular: {
        picture: movieLinks[1],
      },
      trending: {
        picture: movieLinks[1],
      },
    },
    year: 1999,
    category: "Movies",
    rating: 8.6,
    isBookmarked:false,
    isTrending: false,
  },
  {
    id: '2',
    title: "Inception",
    thumbnail: {
      regular: {
        picture: movieLinks[2],
      },
      trending: {
        picture: movieLinks[2],
      },
    },
    year: 2010,
    category: "Movies",
    rating: 8.8,
    isBookmarked:false,
    isTrending: true,
  },
  {
    id: '3',
    title: "The Dark Knight",
    thumbnail: {
      regular: {
        picture: movieLinks[3],
      },
      trending: {
        picture:movieLinks[3],
      },
    },
    year: 2008,
    category:"Movies",
    rating: 9.0,
    isBookmarked:false,
    isTrending: true,
  },
  {
    id: '4',
    title: "Interstellar",
    thumbnail: {
      regular: {
        picture: movieLinks[4],
      },
      trending: {
        picture:movieLinks[4],
      },
    },
    year: 2014,
    category: "Movies",
    rating: 8.6,

    isBookmarked:false,
    isTrending: false,
  },
  {
    id: '5',
    title: "Fight Club",
    thumbnail: {
      regular: {
        picture: movieLinks[5],
      },
      trending: {
        picture:movieLinks[5],
      },
    },
    year: 1999,
    category: "Movies",
    rating: 8.8,

    isBookmarked:false,
    isTrending: false,
  },
  {
    id: '6',
    title: "The Matrix",
    thumbnail: {
      regular: {
        picture: movieLinks[6],
      },
      trending: {
        picture:movieLinks[6],
      },
    },
    year: 1999,
    category: "Movies",
    rating: 8.7,

    isBookmarked:false,
    isTrending: true,
  },
  {
    id: '7',
    title: "The Shawshank Redemption",
    thumbnail: {
      regular: {
        picture: movieLinks[7],
      },
      trending: {
        picture:movieLinks[7],
      },
    },
    year: 1994,
    category: "Movies",
    rating: 9.3,

    isBookmarked:false,
    isTrending: false,
  },
  {
    id: '8',
    title: "Forrest Gump",
    thumbnail: {
      regular: {
        picture: movieLinks[8],
      },
      trending: {
        picture:movieLinks[8],
      },
    },
    year: 1994,
    category: "Movies",
    rating: 8.8,

    isBookmarked:false,
    isTrending: false,
  },
  {
    id: '9',
    title: "Pulp Fiction",
    thumbnail: {
      regular: {
        picture: movieLinks[9],
      },
      trending: {
        picture:movieLinks[9],
      },
    },
    year: 1994,
    category: "Movies",
    rating: 8.9,

    isBookmarked:true,
    isTrending: false,
  },
  {
    id: '10',
    title: "The Lord of the Rings II",
    thumbnail: {
      regular: {
        picture: movieLinks[10],
      },
      trending: {
        picture:movieLinks[10],
      },
    },
    year: 2003,
    category: "Movies",
    rating: 8.9,

    isBookmarked:false,
    isTrending: true,
  },
  {
    id: '11',
    title: "The Lord of the Rings: The Fellowship of the Ring",
    thumbnail: {
      regular: {
        picture: movieLinks[11],
      },
      trending: {
        picture:movieLinks[11],
      },
    },
    year: 2001,
    category: "Movies",
    rating: 8.8,

    isBookmarked:false,
    isTrending: false,
  },
  {
    id: '12',
    title: "The Lord of the Rings: The Two Towers",
    thumbnail: {
      regular: {
        picture: movieLinks[12],
      },
      trending: {
        picture:movieLinks[12],
      },
    },
    year: 2002,
    category: "Movies",
    rating: 8.7,

    isBookmarked:false,
    isTrending: false,
  },
  {
    id: '13',
    title: "The Godfather",
    thumbnail: {
      regular: {
        picture: movieLinks[13],
      },
      trending: {
        picture:movieLinks[13],
      },
    },
    year: 1972,
    category: "Movies",
    rating: 9.2,

    isBookmarked:false,
    isTrending: false,
  },
  {
    id: '14',
    title: "The Godfather: Part II",
    thumbnail: {
      regular: {
        picture: movieLinks[14],
      },
      trending: {
        picture:movieLinks[14],
      },
    },
    year: 1974,
    category:"Movies",
    rating: 9.0,

    isBookmarked:false,
    isTrending: false,
  },
  {
    id: '15',
    title: "The Dark Knight Rises",
    thumbnail: {
      regular: {
        picture: movieLinks[15],
      },
      trending: {
        picture:movieLinks[15],
      },
    },
    year: 2012,
    category: "Movies",
    rating: 8.4,

    isBookmarked:true,
    isTrending: false,
  },
  {
    id: '16',
    title: "The Prestige",
    thumbnail: {
      regular: {
        picture: movieLinks[16],
      },
      trending: {
        picture:movieLinks[16],
      },
    },
    year: 2006,
    category: "Movies",
    rating: 8.5,

    isBookmarked:false,
    isTrending: false,
  },
  {
    id: '17',
    title: "Gladiator",
    thumbnail: {
      regular: {
        picture: movieLinks[17],
      },
      trending: {
        picture:movieLinks[17],
      },
    },
    year: 2000,
    category: "Movies",
    rating: 8.5,

    isBookmarked:true,
    isTrending: false,
  },
  {
    id: '18',
    title: "Se7en",
    thumbnail: {
      regular: {
        picture: movieLinks[18],
      },
      trending: {
        picture:movieLinks[18],
      },
    },
    year: 1995,
    category: "Movies",
    rating: 8.6,

    isBookmarked:false,
    isTrending: false,
  },
  {
    id: '19',
    title: "The Silence of the Lambs",
    thumbnail: {
      regular: {
        picture: movieLinks[19],
      },
      trending: {
        picture:movieLinks[19],
      },
    },
    year: 1991,
    category: "Movies",
    rating: 8.6,

    isBookmarked:true,
    isTrending: false,
  },
  {
    id: '20',
    title: "Friends",
    thumbnail: {
      regular: {
        picture: movieLinks[20],
      },
      trending: {
        picture:movieLinks[20],
      },
    },
    year: 1994,
    category: "TvSeries",
    rating: 8.9,

    isBookmarked:true,
    isTrending: false,
  },
];
