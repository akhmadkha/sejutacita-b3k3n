import React from 'react'
import Lottie from "lottie-react";
import searchNotfound from "assets/searchNotFound.json"
export default function SearchNotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Lottie animationData={searchNotfound} />
            <p>Tidak ada data</p>
        </div>
    )
}
