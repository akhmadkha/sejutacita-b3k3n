import React, { useState } from 'react'

export default function SearchEngine(props) {
    const { category, searched, canceled } = props
    const [keyword, setkeyword] = useState("")

    function search(params) {
        const dataBook = localStorage.getItem('books-data') ?? "[]"
        const parsedBook = JSON.parse(dataBook)
        const searchedData = parsedBook.filter((x) => {
            return(
                x.categoryId === (category ?? 1)
            )
        })
        let result = []
        searchedData.forEach(element => {
            let temp = element?.books.filter((x) => {
                return(
                    x.title.includes(keyword)
                )
            })

            result.push(temp)
        });
        let mergedArray = [].concat.apply([], result)

        searched({
            mergedArray, keyword
        })
    }

    function cancel() {
        canceled()
    }
    return (
        <div className='flex justify-center items-center gap-2'>
            <input onChange={(e) => {
                setkeyword(e.target.value)
                if(e.target.value === ""){
                    cancel()
                }
            }} type="text" placeholder="Cari disini" class="input input-bordered input-accent w-full max-w-md" />
            <button onClick={() => search()} className="btn btn-accent">
                Cari
            </button>
        </div>
    )
}
