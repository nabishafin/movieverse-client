import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";


const MovieReviews = () => {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            movie: "Avatar 2",
            rating: 4.5,
            reviewText: "A breathtaking cinematic experience with incredible visuals.",
            imageUrl: "https://i.ibb.co.com/94Bj6D3/doctor-2.webp",
        },
        {
            id: 2,
            name: "Jane Smith",
            movie: "Spider-Man: No Way Home",
            rating: 4.8,
            reviewText: "An emotional rollercoaster with a fantastic storyline!",
            imageUrl: "https://i.ibb.co.com/Pwh7XXM/sh-AFIN-PIC.jpg",
        },
        {
            id: 3,
            name: "Alex Brown",
            movie: "The Batman",
            rating: 4.2,
            reviewText: "A dark and gritty take on the iconic character.",
            imageUrl: "https://i.ibb.co.com/nsJ3FRD/doctor-1.jpg",
        },
        // Add more reviews as needed
    ];
    return (
        <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-purple-900">
            <div className="container mx-auto px-4 text-white">
                <motion.h2
                    className="text-4xl sm:text-5xl font-extrabold text-center mb-8 md:mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Movie Reviews & Critic Opinions
                </motion.h2>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    className="swiper-container"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <motion.div
                                className="bg-gradient-to-r from-purple-800 to-black rounded-3xl shadow-xl p-8 hover:scale-105 transform transition-all duration-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="flex items-center space-x-6 mb-6">
                                    <img
                                        src={review.imageUrl}
                                        alt={review.name}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-white"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold">{review.name}</h3>
                                        <p className="text-sm">{review.movie}</p>
                                        <div className="flex items-center mt-2">
                                            <span className="text-yellow-400">{review.rating}</span>
                                            <span className="ml-2 text-gray-200">/ 5</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-lg font-light">{review.reviewText}</p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default MovieReviews;