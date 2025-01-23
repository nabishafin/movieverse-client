import React from 'react';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import MovieCard from '../shared/MovieCard';
import SectionHeading from '../shared/SectionHeading';
import { Helmet } from 'react-helmet-async';

const AllMovies = () => {

    const axiosApi = useAxios()
    const { data: movies = [], refetch } = useQuery({
        queryKey: ['movies'],
        queryFn: async () => {
            const res = await axiosApi('/allmvies');
            return res.data;
        },
    });
    console.log(movies)


    return (
        <div className='bg-black'>
            <Helmet>
                <title>Bistro-Boss || All Movies</title>
            </Helmet>
            <div className='py-10'>
                <SectionHeading
                    title={'Your Portal to Cinematic Universes'}
                    subtitle={'Dive into the world of endless possibilities with Movieverse, your ultimate destination for everything cinema.'}
                >
                </SectionHeading>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    movies.map(movie =>
                        <MovieCard
                            movie={movie}
                            key={movie._id}
                        ></MovieCard>
                    )
                }
            </div>
        </div>
    );
};

export default AllMovies;