import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, BookmarkIcon, InformationCircleIcon } from '@heroicons/react/outline'

export default function Bottombar() {
    let url = useLocation()
    const menu = [
        {
          url: "/",
          title: "Home",
          icon: <HomeIcon className="h-5 w-5 text-blue-500" />
        },
        {
          url: "/bookmark",
          title: "Bookmark",
          icon: <BookmarkIcon className="h-5 w-5 text-blue-500" />
        }
      ]
  return (
    <div className='bg-white p-4 rounded-lg mx-auto border shadow-lg'>
        <div className="flex items-center justify-evenly">
        {
          menu.map((val, idx) => {
            return (
              <Link to={val.url} key={idx} className={`btn ${url.pathname === val.url ? "btn-accent" : "btn-ghost"}`}>
                <div className="flex gap-4 items-center">
                  {val.icon}
                  {val.title}
                </div>

              </Link>
            )
          })
        }
        <label for="my-modal-3" class="btn btn-ghost justify-start modal-button">
          <div className="flex gap-4 items-center">
            <InformationCircleIcon className="h-5 w-5 text-blue-500" />
            Tentang
          </div>
        </label>
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-lg font-bold">Tentang aplikasi</h3>
            <p class="py-4">B3k3n</p>
          </div>
        </div>
        </div>
    </div>
  )
}
