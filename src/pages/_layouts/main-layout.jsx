import Bottombar from 'components/bottombar'
import Leftbar from 'components/leftbar'
import Navbar from 'components/navbar'
import React from 'react'

export default function MainLayout(props) {
  return (
    <div style={{ backgroundColor: "#EAEFFB" }} className="min-h-screen">
      <Navbar />
      <div className='container lg:px-20 mx-auto pt-24'>
        <div className="flex justify-center p-10">
          <div className="hidden lg:block lg:w-1/4">
            <Leftbar />
          </div>
          <div className="px-10 w-3/4">
            {props.children}
          </div>
        </div>


      </div>
      <div className="fixed block lg:hidden w-full bottom-4">
        <div className="container lg:px-20 mx-auto">
          <Bottombar />
        </div>
      </div>
    </div>
  )
}
