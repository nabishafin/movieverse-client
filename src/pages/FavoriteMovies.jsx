import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

// Function to fetch favorite movies using the axios hook
const fetchFavoriteMovies = async (axiosApi) => {
    const response = await axiosApi.get('/getFavorites');
    return response.data;
};

// Function to remove a movie from favorites
const removeFromFavorites = async (axiosApi, movieId) => {
    const response = await axiosApi.delete(`/removeFromFavorites/${movieId}`);
    return response.data;
};

const FavoriteMovies = () => {
    const axiosApi = useAxios();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // Using TanStack Query v5's useQuery hook with the object syntax
    const { data: favoriteMovies, isLoading, isError, error } = useQuery({
        queryKey: ['favoriteMovies'],
        queryFn: () => fetchFavoriteMovies(axiosApi),
    });

    const mutation = useMutation({
        mutationFn: (movieId) => removeFromFavorites(axiosApi, movieId),
        onSuccess: () => {
            // Invalidate the favoriteMovies query to refetch the updated list
            queryClient.invalidateQueries(['favoriteMovies']);

            // Navigate to home page after successful removal
            navigate('/allmovies');
        },
        onError: (error) => {
            Swal.fire({
                title: 'Error!',
                text: `Could not remove the movie from favorites: ${error.message}`,
                icon: 'error',
            });
        }
    });

    // Loading state
    if (isLoading) {
        return <div className="text-center text-xl">Loading favorite movies...</div>;
    }

    // Error handling
    if (isError) {
        Swal.fire({
            title: 'Error!',
            text: `Could not fetch favorite movies: ${error.message}`,
            icon: 'error',
        });
        return <div className="text-center text-xl text-red-500">Error loading favorite movies.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-semibold text-center mb-6">Favorite Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favoriteMovies.length === 0 ? (
                    <p className="text-center text-lg">No favorite movies found.</p>
                ) : (
                    favoriteMovies.map((movie) => (
                        <div key={movie._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-gray-800">{movie.title}</h2>
                                <p className="text-sm text-gray-500">{movie.genre}</p>
                                <p className="text-sm text-gray-500">{movie.release_year}</p>
                                <p className="text-sm text-yellow-500">Rating: {movie.rating}⭐</p>
                                <p className="text-sm text-gray-600 mt-2">{movie.description}</p>
                                <button
                                    onClick={() => mutation.mutate(movie._id)}
                                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Remove from Favorites
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FavoriteMovies;
