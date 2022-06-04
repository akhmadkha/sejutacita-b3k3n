import Bookmark from "pages/bookmark";
import DetailBook from "pages/detail-book";
import Home from "pages/home";
import Profile from "pages/profile";
import Search from "pages/search";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:idCategory" element={<Home />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/book/:bookId" element={<DetailBook />} />
        </Routes>
    )
}

export default MainRoutes