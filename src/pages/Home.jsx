import React from 'react';
import Banner from '../components/Banner';
import FeaturedMovies from '../components/FeaturedMovies';
import UpcomingReleases from '../components/UpcomingReleases';
import MovieReviews from '../components/MovieReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedMovies></FeaturedMovies>
            <UpcomingReleases></UpcomingReleases>
            <MovieReviews></MovieReviews>
        </div>
    );
};

export default Home;