import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="flex justify-center items-center bg-gray-900">
            <div className="rounded-lg overflow-hidden shadow-xl bg-gray-800 hover:scale-105 transition-all">
                <img
                    className="w-full h-64 object-cover"
                    src={movie.poster} // Using dynamic poster URL
                    alt={movie.title} // Using dynamic movie title for accessibility
                />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-white">{movie.title}</h2>
                    <div className="text-sm text-gray-400 mt-2">Genre: {movie.genre}</div>
                    <div className="text-sm text-gray-400 mt-1">Duration: {movie.duration}</div>
                    <div className="text-sm text-gray-400 mt-1">Release Year: {movie.release_year}</div>
                    <div className="text-lg font-semibold text-yellow-400 mt-3">
                        Rating: {movie.rating}
                    </div>
                    <p className="text-gray-300 text-sm mt-4">
                        {movie.description} {/* Dynamic description */}
                    </p>
                    <button
                        className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none">
                        See Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
