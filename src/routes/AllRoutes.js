import { Routes, Route } from 'react-router-dom'
import { MovieList, MovieDetail, Search } from "../pages";
import { PageNotFound } from '../pages/PageNotFound';

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<MovieList />} />
                <Route path='./MovieDetail' element={<MovieList />} />
                <Route path='./movies/:id' element={<MovieDetail />} />
                <Route path='./movie/top' element={<MovieList />} />
                <Route path='./movie/popular' element={<MovieList />} />
                <Route path='./movie/upcomming' element={<MovieList />} />
                <Route path='./search' element={<Search />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </>
    );
}