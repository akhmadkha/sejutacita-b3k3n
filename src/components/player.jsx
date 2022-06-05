import { PlayIcon } from '@heroicons/react/outline'
import React from 'react'
import BottomToTopBox from './_animations/bottom-to-top-box'

export function Player() {
    return (
        <>
            <div class="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
                
                <div class="space-y-2">
                    <div class="relative">
                        <div class="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div class="bg-cyan-500 dark:bg-cyan-400 w-0 h-2" role="progressbar" aria-label="music progress" aria-valuenow="0" aria-valuemin="0" aria-valuemax="4550"></div>
                        </div>
                        <div class="ring-cyan-500 dark:ring-cyan-400 ring-2 absolute top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                            <div class="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                        </div>
                    </div>
                    <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
                        <div class="text-cyan-500 dark:text-slate-100">00:00</div>
                        <div class="text-slate-500 dark:text-slate-400">75:50</div>
                    </div>
                </div>
            </div>
            <div class="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
                <div class="flex-auto flex items-center justify-evenly">
                    <button type="button" aria-label="Add to favorites">
                        <svg width="24" height="24">
                            <path d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Previous">
                        <svg width="24" height="24" fill="none">
                            <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button type="button" aria-label="Rewind 10 seconds">
                        <svg width="24" height="24" fill="none">
                            <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <button type="button" class="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause">
                    {/* <PlayIcon className='w-24 h-24'/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        {/* <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> */}
                    </svg>
                </button>
                <div class="flex-auto flex items-center justify-evenly">
                    <button type="button" aria-label="Skip 10 seconds">
                        <svg width="24" height="24" fill="none">
                            <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Next">
                        <svg width="24" height="24" fill="none">
                            <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button type="button" class="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500">
                        1x
                    </button>
                </div>
            </div></>
    )
}

export function PlayerBottom() {
    return (
        <BottomToTopBox>
            <div className='w-full flex border shadow-2xl bg-white rounded-xl overflow-hidden'>
                <div class="bg-white flex w-1/2 border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
                    <div class="flex items-center space-x-4">
                        <img src="/full-stack-radio.png" alt="" width="88" height="88" class="flex-none rounded-lg bg-slate-100" loading="lazy" />
                    </div>
                    <div class="space-y-2 mx-10">
                        <div class="relative">
                            <div class="bg-slate-100 w-36 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div class="bg-cyan-500 dark:bg-cyan-400 w-1/2 h-2" role="progressbar" aria-label="music progress" aria-valuenow="1456" aria-valuemin="0" aria-valuemax="4550"></div>
                            </div>
                            <div class="ring-cyan-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                                <div class="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
                            </div>
                        </div>
                        <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
                            <div class="text-cyan-500 dark:text-slate-100">24:16</div>
                            <div class="text-slate-500 dark:text-slate-400">75:50</div>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center px-10">
                    <div class="flex-auto flex items-center justify-evenly">
                        <button type="button" aria-label="Add to favorites">
                            <svg width="24" height="24">
                                <path d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Previous">
                            <svg width="24" height="24" fill="none">
                                <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button type="button" aria-label="Rewind 10 seconds">
                            <svg width="24" height="24" fill="none">
                                <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <button type="button" class="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause">
                        {/* <PlayIcon className='w-24 h-24'/> */}
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            {/* <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> */}
                        </svg>
                    </button>
                    <div class="flex-auto flex items-center justify-evenly">
                        <button type="button" aria-label="Skip 10 seconds">
                            <svg width="24" height="24" fill="none">
                                <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Next">
                            <svg width="24" height="24" fill="none">
                                <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button type="button" class="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500">
                            1x
                        </button>
                    </div>
                </div>
            </div>
        </BottomToTopBox>
    )
}

