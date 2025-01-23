import React from 'react';
import { useQuery } from '@tanstack/react-query'; // Import useQuery from TanStack Query v5
import useAxios from '../hooks/useAxios'; // Import your custom useAxios hook
import Swal from 'sweetalert2';

// Function to fetch favorite movies using the axios hook
const fetchFavoriteMovies = async (axiosApi) => {
    const response = await axiosApi.get('/getFavorites'); // Call API to get favorite movies
    return response.data; // Return the response data
};

const FavoriteMovies = () => {
    const axiosApi = useAxios(); // Get the axios instance using the hook

    // Using TanStack Query v5's useQuery hook with the object syntax
    const { data: favoriteMovies, isLoading, isError, error } = useQuery({
        queryKey: ['favoriteMovies'], // Define the unique query key
        queryFn: () => fetchFavoriteMovies(axiosApi), // Define the query function
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
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FavoriteMovies;
