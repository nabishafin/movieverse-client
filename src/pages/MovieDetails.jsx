import React, { useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const axiosApi = useAxios();

    // Fetch movie details using react-query
    const { data: movie = [], isLoading, isError, error, refetch } = useQuery({
        queryKey: ['movie', id],
        queryFn: async () => {
            const res = await axiosApi(`/findmovie/${id}`);
            return res.data;
        },
    });

    // Handle delete movie
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axiosApi.delete(`/movie/${id}`);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                navigate('/allmovies');
            }
        });
    };

    // Handle add to favorites functionality
    const handleAddToFavorites = async () => {
        try {
            await axiosApi.post(`/addToFavorites/${movie._id}`);
            Swal.fire({
                title: "Added to Favorites!",
                icon: "success",
            });
            navigate('/fevorite');
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Could not add to favorites, Maybe alredy Added",
                icon: "error",
            });
        }
    };

    // Show loading and error states
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <motion.div
            className="max-w-screen-lg mx-auto px-6 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-screen-xl mx-auto">
                {/* Movie Poster */}
                <div className="w-full md:w-1/3">
                    <img
                        src={movie.poster}
                        alt={`${movie.title} poster`}
                        className="w-full h-96 object-cover"
                    />
                </div>

                {/* Movie Info */}
                <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                    <motion.h2
                        className="text-4xl font-semibold text-gray-800"
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                    >
                        {movie.title}
                    </motion.h2>

                    <div className="mt-2 text-lg text-gray-600">
                        <span>Genre: {movie.genre}</span> |{" "}
                        <span>Duration: {movie.duration} min</span> |{" "}
                        <span>Year: {movie.release_year}</span>
                    </div>

                    <div className="mt-4 text-yellow-500">
                        <span>Rating: {movie.rating}⭐</span>
                    </div>

                    <p className="mt-4 text-lg text-gray-700">{movie.description}</p>

                    {/* Action Buttons */}
                    <div className="mt-6 flex space-x-4">
                        <motion.button
                            onClick={() => handleDelete(movie._id)}
                            className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                            whileHover={{ scale: 1.1 }}
                        >
                            Delete Movie
                        </motion.button>
                        <motion.button
                            onClick={handleAddToFavorites}
                            className={`px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-yellow-600 transition-colors`}
                            whileHover={{ scale: 1.1 }}
                        >
                            Add to Favorites
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MovieDetails;
