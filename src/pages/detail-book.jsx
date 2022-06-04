import { Player, PlayerBottom } from 'components/player'
import BounceBox from 'components/_animations/bounce-box'
import React, { useRef, useEffect, useState } from 'react'

export default function DetailBook() {
  const playerRef = useRef(null)
  const [showBottomPlayer, setshowBottomPlayer] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', trackScroll)

    return () => {
      document.removeEventListener('scroll', trackScroll)
    }
  }, [])

  const trackScroll = () => {
    let element = document.getElementById('playerId')
    // console.log(element.getBoundingClientRect().top)
    if (element.getBoundingClientRect().bottom < 0) {
      if (!showBottomPlayer) {
        setshowBottomPlayer(true)
      }
    } else {
      setshowBottomPlayer(false)
    }
  }

  console.log(showBottomPlayer)

  return (
    <div className='w-full'>
      <div className="flex w-full">
        <div className="w-2/4 px-10">
          <div className="w-full bg-gray-400 rounded-xl p-10"></div>
        </div>
        <div className="w-2/4 flex flex-col gap-4">
          <div className="flex justify-start">
            <button class="btn btn-ghost gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Button
            </button>
          </div>
          <BounceBox delay={0.1}>
            <h1 className="text-4xl font-bold">
              The Intelligent Investor
            </h1>
          </BounceBox>
          <BounceBox delay={0.2}>
            <p>Benjamin Graham</p>
          </BounceBox>
          <BounceBox delay={0.3}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur vo</p>
          </BounceBox>
          <BounceBox delay={0.35}>
            <div id="playerId" ref={playerRef}>
              <Player />
            </div>
          </BounceBox>

        </div>
      </div>
      <div className="flex items-center justify-center">
        {
          showBottomPlayer ? <div className="fixed mx-auto bottom-4 z-50">
            <PlayerBottom />
          </div> : null
        }
      </div>

      <div className='px-10 mt-20'>
        <BounceBox delay={0.4}>
          <h1 className='text-xl font-bold mb-4'>Section</h1>

        </BounceBox>

        <div className="flex flex-col gap-4">
          <BounceBox delay={0.5}>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </BounceBox>
          <BounceBox delay={0.5}>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </BounceBox>
          <BounceBox delay={0.5}>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </BounceBox>
          <BounceBox delay={0.5}>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </BounceBox>
          <BounceBox delay={0.5}>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </BounceBox>
          <BounceBox delay={0.5}>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </BounceBox>
          <BounceBox delay={0.5}>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </BounceBox>
          <BounceBox delay={0.5}>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </BounceBox>
          <BounceBox delay={0.5}>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </BounceBox>
          <BounceBox delay={0.5}>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </BounceBox>
          <BounceBox delay={0.5}>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </BounceBox>
          <BounceBox delay={0.5}>
            <div class="collapse">
              <input type="checkbox" class="peer" />
              <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
              </div>
              <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </BounceBox>
        </div>
      </div>
    </div>
  )
}
