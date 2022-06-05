import { BookmarkIcon } from '@heroicons/react/outline'
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/solid'
import { Player } from 'components/player'
import BounceBox from 'components/_animations/bounce-box'
import React, { useRef, useEffect, useState } from 'react'

class CheckLSBook {
  constructor(id) {
    this.id = id
  }
  existingBook() {
    let existing = localStorage.getItem('bookmarks') ?? "[]"
    let parsedExisting = JSON.parse(existing)

    return parsedExisting
  }
  check() {
    let existing = localStorage.getItem('bookmarks') ?? "[]"
    let parsedExisting = JSON.parse(existing)
    const checkExisting = Boolean(parsedExisting.find((x) => {
      return x.id === this.id
    }))
    return checkExisting
  }
}

export default function DetailBook(props) {
  const playerRef = useRef(null)
  const { id, title, authors, cover_url, description, sections, audio_length } = props.data
  const {bookmarked} = props
  const [isBookmarked, setisBookmarked] = useState(false)

  useEffect(() => {
    let classBook = new CheckLSBook(id)
    if (classBook.check()) setisBookmarked(true)
    return () => {
    }
  }, [])

  function switchBookmark() {
    let classBook = new CheckLSBook(id)
    let store = props.data

    if (classBook.check()) {
      let removedBook = classBook.existingBook().filter((x) => {
        return x.id !== id
      })
      localStorage.setItem('bookmarks', JSON.stringify(removedBook))
      setisBookmarked(false)
      bookmarked(false)
    } else {
      localStorage.setItem('bookmarks', JSON.stringify([...classBook.existingBook(), store]))
      setisBookmarked(true)
      bookmarked(true)
    }

  }

  return (
    <div className='w-full'>
      <div className="flex w-full">
        <div className="w-2/4 px-10">
          <div className="w-full bg-gray-400 rounded-xl p-10">
            <img src={cover_url ?? ""} />
          </div>
        </div>
        <div className="w-2/4 flex flex-col gap-4">
          <div className="flex justify-start">
            <button onClick={() => switchBookmark()} class="btn btn-ghost gap-2">
              {
                isBookmarked ?
                  <>
                    <BookmarkIconSolid className="h-5 w-5 text-blue-500" />
                    Hapus dari Bookmark
                  </>
                  :
                  <>
                    <BookmarkIcon className="h-5 w-5 text-blue-500" />
                    Tambah ke Bookmark
                  </>
              }
            </button>
          </div>
          <BounceBox delay={0.1}>
            <h1 className="text-4xl font-bold">
              {title ?? ""}
            </h1>
          </BounceBox>
          <BounceBox delay={0.2}>
            {
              authors?.map((val, idx) => {
                return (
                  <p key={idx}>{val}</p>
                )
              })
            }
          </BounceBox>
          <BounceBox delay={0.3}>
            <p>{description ?? ""}</p>
          </BounceBox>
          <BounceBox delay={0.35}>
            <div id="playerId" ref={playerRef}>
              <Player />
            </div>
          </BounceBox>

        </div>
      </div>

      <div className='px-10 mt-20'>
        <BounceBox delay={0.4}>
          <h1 className='text-xl font-bold mb-4'>Section</h1>

        </BounceBox>

        <div className="flex flex-col gap-4">
          {
            sections?.map((val, idx) => {
              return (
                <div key={idx}>
                  <BounceBox delay={0.5}>
                    <div class="collapse rounded-lg">
                      <input type="checkbox" class="peer" />
                      <div class="collapse-title bg-base-200 text-base-200-content peer-checked:bg-accent peer-checked:text-accent-content">
                        {val?.title}
                      </div>
                      <div class="collapse-content bg-base-200 text-base-200-content peer-checked:bg-accent peer-checked:text-accent-content">
                        <p>{val?.content}</p>
                      </div>
                    </div>
                  </BounceBox>
                </div>

              )
            })
          }
        </div>
      </div>
    </div>
  )
}
