const API_KEY = 'fc6aff61bb0f615c1dd54dd4a92a63d3';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFecth = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFecth(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trendings',
        title: 'Recomendados para você',
        items: await basicFecth(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFecth(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFecth(`/discover/movie?without_genres=28?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFecth(`/discover/movie?without_genres=35?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFecth(`/discover/movie?api_key=${API_KEY}&language=pt-BR&without_genres=35
        `)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFecth(`/discover/movie?without_genres=10749?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentários',
        items: await basicFecth(`/discover/movie?without_genres=99?language=pt-BR&api_key=${API_KEY}`)
      }
    ]     
  },

  getMovieInfo: async (movieId, type) => {
    let info = { };

    if(movieId) {
      switch(type){
        case 'movie':
          info = await basicFecth(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
       
        case 'tv':
          info = await basicFecth(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;

        default:
      }
    }

    return info;
  }


}