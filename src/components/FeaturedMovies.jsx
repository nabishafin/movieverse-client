import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import { useQuery } from '@tanstack/react-query';


import useAxios from '../hooks/useAxios';
import MovieCart from '../shared/MovieCart';

const FeaturedMovies = () => {
    const axiosApi = useAxios()
    const { data: movies = [], refetch } = useQuery({
        queryKey: ['movies'],
        queryFn: async () => {
            const res = await axiosApi('/femovies');
            return res.data;
        },
    });
    console.log(movies)
    return (
        <div>
            <div className='my-5'>
                <SectionHeading
                    title={'Featured Films of the Week'}
                    subtitle={'From timeless classics to new releases, explore the finest films.'}
                >
                </SectionHeading>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    movies.map(movie =>
                        <MovieCart
                            key={movie._id}
                            movie={movie}
                        ></MovieCart>)
                }
            </div>
        </div>
    );
};

export default FeaturedMovies;