import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Leftbar() {
  let url = useLocation()
  const menu = [
    {
      url: "/",
      title: "Home"
    },
    {
      url: "/bookmark",
      title: "Bookmark"
    }
  ]
  console.log(url.pathname)
  return (
    <div className='rounded-xl border bg-white p-8'>

      <div className="w-full gap-6 flex flex-col">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
          <div className='flex flex-col gap-1 justify-center items-center'>
          <p className='font-bold text-lg'>John Doe</p>
          <p className='text-sm'>Frontend Developer</p>
          </div>
        </div>
        <hr />
        {
          menu.map((val, idx) => {
            return (
              <Link to={val.url} key={idx} className={`btn justify-start w-full ${url.pathname === val.url ? "btn-accent" : "btn-ghost"}`}>
                <div className="flex gap-4 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  {val.title}
                </div>

              </Link>
            )
          })
        }
        <label for="my-modal-3" class="btn btn-ghost justify-start w-full modal-button">
        <div className="flex gap-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            Tentang
          </div>
        </label>
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-lg font-bold">Tentang aplikasi</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
