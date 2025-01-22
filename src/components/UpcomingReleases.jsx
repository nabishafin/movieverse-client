import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '../shared/SectionHeading';


const upcomingMovies = [
    {
        "title": "Avengers: Secret Wars",
        "releaseDate": "2025-04-30",
        "imageUrl": "https://i.ibb.co.com/XXv41GL/up-1.jpg"
    },
    {
        "title": "Guardians of the Galaxy Vol. 3",
        "releaseDate": "2025-05-20",
        "imageUrl": "https://i.ibb.co.com/tBNFSVw/up-2.jpg"
    },
    {
        "title": "Star Wars: New Era",
        "releaseDate": "2025-07-10",
        "imageUrl": "https://i.ibb.co.com/8czxvhP/up-3.webp"
    },
    {
        "title": "The Flash 2",
        "releaseDate": "2025-08-15",
        "imageUrl": "https://i.ibb.co.com/dLSdc91/up-4.jpg"
    },
    {
        "title": "Justice League: Reborn",
        "releaseDate": "2025-09-05",
        "imageUrl": "https://i.ibb.co.com/0mchQVx/up-5.png"
    },
    {
        "title": "Spider-Man: Across the Multiverse",
        "releaseDate": "2025-10-01",
        "imageUrl": "https://i.ibb.co.com/6PHtMZG/up-6.webp"
    },
    {
        "title": "Fantastic Four: Rise of Doom",
        "releaseDate": "2025-11-12",
        "imageUrl": "https://i.ibb.co.com/ngBFtn4/up-7.jpg"
    },
    {
        "title": "Doctor Strange: Dark Dimensions",
        "releaseDate": "2025-12-20",
        "imageUrl": "https://i.ibb.co.com/JFpVQqF/up-8.jpg"
    }
]


const UpcomingReleases = () => {
    return (
        <section className="py-16 bg-gray-900 text-white my-5 rounded-xl">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    className="l font-semibold mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionHeading
                        title={'Upcoming Movies'}
                        subtitle={'Upcoming Blockbusters of 2025: Epic Superhero and Sci-Fi Adventures Await!'}
                    ></SectionHeading>
                </motion.h2>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {upcomingMovies.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="relative rounded-lg overflow-hidden shadow-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <img
                                    src={movie.imageUrl}
                                    alt={movie.title}
                                    className="w-full h-80 object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 className="text-xl font-bold">{movie.title}</h3>
                                    <p className="text-sm">{movie.releaseDate}</p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default UpcomingReleases;