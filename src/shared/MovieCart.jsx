import React from 'react';
import { motion } from 'framer-motion';

const MovieCart = ({ movie }) => {
    return (
        <div>
            <motion.div
                className="mx-auto bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Movie Poster with animation */}
                <motion.img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-80 object-cover object-center"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                />

                {/* Movie Details */}
                <div className="p-6">
                    {/* Movie Title */}
                    <h2 className="text-3xl font-bold text-white">{movie.title}</h2>

                    {/* Genre, Duration, Release Year */}
                    <p className="text-xs text-gray-400 mt-2">{movie.genre} | {movie.duration} | {movie.release_year}</p>

                    {/* Rating */}
                    <div className="flex items-center mt-3">
                        <span className="text-lg font-semibold text-yellow-400">{movie.rating}</span>
                    </div>

                    {/* See Details Button with hover effect */}
                    <motion.button
                        className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See Details
                    </motion.button>
                </div>
            </motion.div>
        </div>

    );
};

export default MovieCart;