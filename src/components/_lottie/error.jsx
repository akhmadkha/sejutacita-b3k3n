import React from 'react'
import Lottie from "lottie-react";
import error from "assets/error.json"
export default function ErrorLottie() {
  return (
    <div className="flex flex-col items-center justify-center">
            <Lottie animationData={error} />
            <p>Ada kesalahan</p>
        </div>
  )
}
