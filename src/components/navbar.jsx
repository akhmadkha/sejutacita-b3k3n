import React from 'react'

export default function Navbar() {
  return (
    <div className='border-b fixed w-full z-50 bg-white px-10'>
      <div className="container px-20 py-4 mx-auto">
        <div className="flex mx-20 flex-row justify-between items-center">
          <div>
            Navbar
          </div>
          <div>
            <input type="text" placeholder="Cari disini" class="input input-bordered input-accent w-full max-w-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
