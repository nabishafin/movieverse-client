import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import imgone from '../assets/mv-one.jpg';
import imgtwo from '../assets/mv-2.jpg';
import imgthree from '../assets/mv-3.png';

// Import framer-motion for animation
import { motion } from 'framer-motion';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="relative">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[660px]">

                <SwiperSlide>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: 'easeInOut',
                        }}
                        className="relative w-full h-full"
                    >
                        <motion.img
                            className="w-full h-full object-cover"
                            src={imgtwo}
                            alt="Image Two"
                            animate={{
                                scale: [1, 1.05, 1], // Zooming in and out
                                rotate: [0, -3, 0], // Slight rotation in the opposite direction
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'loop',
                                ease: 'easeInOut',
                            }}
                        />
                        {/* Dark overlay for better text visibility */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        <div className="absolute bottom-16 left-10 text-white">
                            <motion.h2
                                className="text-5xl font-bold text-[#008080]" // Deep teal title color
                                animate={{ x: [-200, 0] }} // Slide in from the left
                                transition={{
                                    duration: 1.5,
                                    ease: 'easeOut',
                                    delay: 0.5,
                                }}
                            >
                                Echoes of the Past
                            </motion.h2>
                            <motion.p
                                className="text-lg font-medium mt-2 text-[#FFD700]" // Soft gold subtitle color
                                animate={{ y: [20, 0] }} // Slide up the subtitle
                                transition={{
                                    duration: 1.5,
                                    ease: 'easeOut',
                                    delay: 1,
                                }}
                            >
                                An ancient mystery that could change the future forever.
                            </motion.p>
                        </div>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: 'easeInOut',
                        }}
                        className="relative w-full h-full"
                    >
                        <motion.img
                            className="w-full h-full object-cover"
                            src={imgone}
                            alt="Image One"
                            animate={{
                                scale: [1, 1.05, 1], // Zooming in and out
                                rotate: [0, 3, 0], // Slight rotation
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'loop',
                                ease: 'easeInOut',
                            }}
                        />
                        {/* Dark overlay for better text visibility */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        <div className="absolute bottom-16 left-10 text-white">
                            <motion.h2
                                className="text-5xl font-bold text-[#008080]" // Deep teal title color
                                animate={{ x: [200, 0] }} // Slide in from the right
                                transition={{
                                    duration: 1.5,
                                    ease: 'easeOut',
                                    delay: 0.5,
                                }}
                            >
                                The Last Horizon
                            </motion.h2>
                            <motion.p
                                className="text-lg font-medium mt-2 text-[#FFD700]" // Soft gold subtitle color
                                animate={{ y: [20, 0] }} // Slide up the subtitle
                                transition={{
                                    duration: 1.5,
                                    ease: 'easeOut',
                                    delay: 1,
                                }}
                            >
                                A gripping tale of survival in a world beyond the stars.
                            </motion.p>
                        </div>
                    </motion.div>
                </SwiperSlide>

                <SwiperSlide>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: 'easeInOut',
                        }}
                        className="relative w-full h-full"
                    >
                        <motion.img
                            className="w-full h-full object-cover"
                            src={imgthree}
                            alt="Image Three"
                            animate={{
                                scale: [1, 1.05, 1], // Zooming in and out
                                rotate: [0, 5, 0], // Slight rotation
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'loop',
                                ease: 'easeInOut',
                            }}
                        />
                        {/* Dark overlay for better text visibility */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        <div className="absolute bottom-16 left-10 text-white">
                            <motion.h2
                                className="text-5xl font-bold text-[#008080]" // Deep teal title color
                                animate={{ x: [200, 0] }} // Slide in from the right
                                transition={{
                                    duration: 1.5,
                                    ease: 'easeOut',
                                    delay: 0.5,
                                }}
                            >
                                Shadows of the Forgotten
                            </motion.h2>
                            <motion.p
                                className="text-lg font-medium mt-2 text-[#FFD700]" // Soft gold subtitle color
                                animate={{ y: [20, 0] }} // Slide up the subtitle
                                transition={{
                                    duration: 1.5,
                                    ease: 'easeOut',
                                    delay: 1,
                                }}
                            >
                                Secrets buried in the darkness, waiting to be uncovered.
                            </motion.p>
                        </div>
                    </motion.div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;



// Science Fiction
// Drama
// Thriller
// Action
// Adventure
// Horror