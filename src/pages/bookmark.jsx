import BounceBox from 'components/_animations/bounce-box'
import React, { useState, useEffect } from 'react'
import DetailBook from './detail-book'

export default function Bookmark() {
  const [bookData, setbookData] = useState([])

  useEffect(() => {
    getBookmark()
  
    return () => {
      
    }
  }, [])

  function getBookmark(params) {
    let data = localStorage.getItem('bookmarks') ?? "[]"
    let parsedData = JSON.parse(data)
    setbookData(parsedData)
  }
  
  return (
    <div>
      <h1 className='text-4xl mb-8 font-bold text-gray-700'>Bookmark</h1>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        {
          bookData.map((val, idx) => {
            const fakeId = Math.random()
            return (
              <>
                <label for={`book-modal${val?.id ?? fakeId}`} class="modal-button">
                  <BounceBox key={idx} delay={Math.round(idx * 10) / 100}>
                    <div className="bg-white gap-4 flex flex-col p-4 rounded-lg transition ease-in-out  hover:scale-105">
                      <div className="p-5 bg-gray-300 rounded-lg min-h-16">
                        <img src={val.cover_url} />
                      </div>
                      <div>
                        <h1 className="font-bold text-lg">
                          {val?.title}
                        </h1>
                        {
                          val?.authors.map((val, idx) => {
                            return (
                              <p key={idx}>{val}</p>
                            )
                          })
                        }
                      </div>
                    </div>
                  </BounceBox>
                </label>
                <input type="checkbox" id={`book-modal${val?.id ?? fakeId}`} class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box w-11/12 max-w-5xl">
                    <label for={`book-modal${val?.id ?? fakeId}`} class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg"></h3>
                    <DetailBook data={val} bookmarked={() => getBookmark()}/>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </div>
  )
}
