import { useEffect, useState } from 'react';
import type {CastMember, Show} from '../types/Show'
import type { Provider } from '../types/Show';
import axios from 'axios';
import { useSearch } from '../context/useSearch';
import Spinner from './Spinner';
import Footer from './Footer';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface Props{
  id: string
  type?:string
}
const Modal:React.FC<Props> = ({id, type}) => {

  const {loading, setLoading} = useSearch()
  const [movie, setMovie] = useState<Show | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [providers, setProviders] = useState<Provider[]>([]);
  
  const providerLinks: Record<string, string> = {
    'Netflix': 'https://www.netflix.com',
    'Amazon Prime Video': 'https://www.primevideo.com',
    'Disney Plus': 'https://www.disneyplus.com',
    'HBO Max': 'https://www.max.com',
    'Globoplay': 'https://globoplay.globo.com',
    'Apple TV Plus': 'https://tv.apple.com',
  };

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true)
      const movieRes = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=pt-BR`
      );
      
      const creditsRes = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}&language=pt-BR`
      );

      const providersRes = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=${API_KEY}`
      );
      const brazilProviders = providersRes.data.results?.BR;
      setProviders(brazilProviders?.flatrate || []);

      setMovie(movieRes.data);
      setCast(creditsRes.data.cast.slice(0, 10)); // Exibe os 10 primeiros atores
      setLoading(false)
    };
    fetchMovie();
    
  }, [id, type, setLoading]);
  
  return (
    <>
    <div className="modal fade " id={id} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <div className="btn btn-warning ms-auto" data-bs-dismiss="modal" aria-label="Close">
                <i className='bi bi-x-lg'></i>
            </div>
          </div>
             <div className='modal-body'>
               {loading && <Spinner />}
                {movie !== null && (
                  <div className="container p-0">

                      <div className="row mx-auto">
                        <div className="col-lg-4 mb-4 mb-lg-0 p-0">
                          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="img-fluid" />
                        </div>
                        <div className="col-lg-8">
                          
                          {movie.title && <h1>{movie.title}</h1>}
                          {movie.tagline && (
                            movie.tagline !== movie.title && 
                            <h4 className='mt-4'>{movie.tagline}</h4>
                          )}

                          {movie.genres.length > 0 && (
                            <p className='mt-4 d-flex flex-wrap'>{movie.genres.map( (genre, i) => <span className="text-secondary mt-2 me-2 border p-2" key={i}>{genre.name}</span>)}</p>
                          )}
                          <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
                          <p><strong>Nota:</strong> <span className="text-success ms-3 h1"><strong>{movie.vote_average}</strong></span></p>
                          <p>{movie.overview}</p>                          
                          
                          {providers.length > 0 && (
                            <div>
                              <h5 className="mt-4">Onde assistir</h5>
                                <div className='d-flex flax-wrap'>
                                  {providers.map((prov) => (
                                 prov.provider_name && prov.logo_path  &&
                                  <div key={prov.provider_id} title={prov.provider_name}>
                                    <a
                                      key={prov.provider_id}
                                      href={providerLinks[prov.provider_name] || '#'}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      title={prov.provider_name}
                                      className = "me-3"
                                    >
                                      <img
                                        src={`https://image.tmdb.org/t/p/w45${prov.logo_path}`}
                                        alt={prov.provider_name}
                                        className="rounded"
                                      />
                                    </a>
                                    
                                  </div>
                                  ))}
                                </div>
                            </div>
                          )}

                          <div className='mt-5'>
                            {movie && movie.homepage && (
                              <>
                              <a className="btn btn-warning"target="_blank" href={movie.homepage}>Saiba Mais</a>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                          
                      <h5 className="mt-5">Elenco</h5>
                      <div className="d-flex overflow-auto gap-3 py-3">
                        {cast.map(actor => (
                          <div key={actor.id} style={{ minWidth: 120, textAlign: 'center' }}>
                            <img
                              src={
                                actor.profile_path
                                  ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                                  : 'https://via.placeholder.com/100x150?text=Sem+Foto'
                              }
                              alt={actor.name}
                              className="rounded shadow-sm"
                              width="100"
                              height="150"
                            />
                            <small className="d-block mt-1 fw-bold">{actor.name}</small>
                            <small className="">{actor.character}</small>
                          </div>
                        ))}
                      </div>                      
                    </div>
                )}
             </div>
          <div className="modal-footer justify-content-center">
            <Footer />            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Modal
