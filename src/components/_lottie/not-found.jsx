import React from 'react'
import Lottie from "lottie-react";
import Notfound from "assets/404.json"
export default function NotFoundLottie() {
  return (
    <div className="flex flex-col items-center justify-center">
            <Lottie animationData={Notfound} />
            <p>Tidak ada data</p>
        </div>
  )
}
