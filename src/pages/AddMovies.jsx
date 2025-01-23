import React, { useContext, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { AuthContext } from '../provider/AuthProvider';
import useAxios from '../hooks/useAxios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const AddMovies = () => {
    // State to manage the rating and form submission state
    const [rating, setRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { user } = useContext(AuthContext);
    const axiosApi = useAxios();
    const navigate = useNavigate();

    // Function to handle the rating change
    const handleRating = (rate) => {
        setRating(rate);
    };

    // Function to handle form submission
    const formSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set submitting state to true to disable button

        const form = e.target;
        const poster = form.poster.value;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const releaseYear = form.releaseYear.value;
        const summary = form.summary.value;

        if (!user) {
            toast.error('You must be logged in to add a movie.');
            setIsSubmitting(false); // Reset submitting state
            return;
        }

        const info = {
            title,
            poster,
            genre,
            duration,
            release_year: releaseYear,
            rating,
            description: summary,
            user: user?.email,  // Ensure user email is available
        };

        try {
            const result = await axiosApi.post('/addmovies', info);
            toast.success('Movie added successfully!');
            form.reset();
            navigate('/allmovies');  // Redirect to all movies page after success
        } catch (error) {
            toast.error('Failed to add movie');
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);  // Reset submitting state
        }
    };

    // Generate a range of years for the release year selection
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let i = currentYear; i >= 2000; i--) {
        yearOptions.push(i);
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Add Movie</h1>
            <form onSubmit={formSubmit} className="space-y-4">
                {/* Movie Poster */}
                <div>
                    <label htmlFor="moviePoster" className="block text-sm font-medium text-gray-700">Movie Poster</label>
                    <input
                        type="url"
                        name="poster"
                        id="moviePoster"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                {/* Movie Title */}
                <div>
                    <label htmlFor="movieTitle" className="block text-sm font-medium text-gray-700">Movie Title</label>
                    <input
                        type="text"
                        id="movieTitle"
                        name="title"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter movie title"
                        required
                    />
                </div>

                {/* Genre */}
                <div>
                    <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre</label>
                    <select
                        id="genre"
                        name="genre"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    >
                        <option value="">Select Genre</option>
                        <option value="science-fiction">Science Fiction</option>
                        <option value="drama">Drama</option>
                        <option value="thriller">Thriller</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="horror">Horror</option>
                    </select>
                </div>

                {/* Duration */}
                <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (Minutes)</label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter movie duration in minutes"
                        required
                    />
                </div>

                {/* Release Year */}
                <div>
                    <label htmlFor="releaseYear" className="block text-sm font-medium text-gray-700">Release Year</label>
                    <select
                        id="releaseYear"
                        name="releaseYear"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    >
                        <option value="">Select Year</option>
                        {yearOptions.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Rating</label>
                    <Rating
                        onClick={handleRating}
                        ratingValue={rating}
                        size={30}
                        allowHalfIcon={true}
                    />
                </div>

                {/* Summary */}
                <div>
                    <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</label>
                    <textarea
                        id="summary"
                        name="summary"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter a short summary of the movie"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        {isSubmitting ? 'Adding...' : 'Add Movie'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddMovies;
