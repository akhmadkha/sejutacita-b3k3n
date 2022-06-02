import BounceBox from 'components/_animations/bounce-box'
import React from 'react'

export default function Home() {
  return (
    <div>
      <BounceBox>
        <div className='bg-green-600 w-full rounded-xl p-10 border transform transition-all duration-150 ease-out scale-100'>H</div>
      </BounceBox>
      <div className='my-10'>
        <h1 className='pb-4 text-lg font-bold'>Kategori</h1>
        <div className="flex gap-2">
          <BounceBox delay={0.1}>
            <button className="btn btn-accent">Button</button>
          </BounceBox>
          <BounceBox delay={0.3}>
            <button className="btn btn-accent btn-outline">Button</button>
          </BounceBox>
          <BounceBox delay={0.4}>
            <button className="btn btn-accent btn-outline">Button</button>
          </BounceBox>
          <BounceBox delay={0.5}>
            <button className="btn btn-accent btn-outline">Button</button>
          </BounceBox>
        </div>
      </div>
      <div class="grid gap-4 grid-cols-3 grid-rows-3">
        <BounceBox delay={0.1}>
          <div className="bg-white gap-4 flex flex-col p-4 rounded-lg transition ease-in-out  hover:scale-105">
            <div className="p-5 bg-gray-300 rounded-lg min-h-16"></div>
            <div>
              <h1 className="font-bold text-lg">
                Judul Bukunya Nich
              </h1>
              <p>Nama author</p>
            </div>
          </div>
        </BounceBox>
        <BounceBox delay={0.2}>
          <div className="bg-white gap-4 flex flex-col p-4 rounded-lg transition ease-in-out  hover:scale-105">
            <div className="p-5 bg-gray-300 rounded-lg min-h-16"></div>
            <div>
              <h1 className="font-bold text-lg">
                Judul Bukunya Nich
              </h1>
            </div>
          </div>
        </BounceBox>
        <BounceBox delay={0.3}>
          <div className="bg-white gap-4 flex flex-col p-4 rounded-lg transition ease-in-out  hover:scale-105">
            <div className="p-5 bg-gray-300 rounded-lg min-h-16"></div>
            <div>
              <h1 className="font-bold text-lg">
                Judul Bukunya Nich
              </h1>
            </div>
          </div>
        </BounceBox>
      </div>
    </div>
  )
}
