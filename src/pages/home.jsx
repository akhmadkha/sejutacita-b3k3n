import BounceBox from 'components/_animations/bounce-box'
import React, { useEffect, useState } from 'react'
import { getBooks, getCategory } from 'services/api/book'
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import DetailBook from './detail-book';
import SearchEngine from 'components/search-engine';

export default function Home() {
  const queryParams = new URLSearchParams(window.location.search);
  const { idCategory } = useParams()
  const location = useLocation()
  let navigate = useNavigate();

  const [categoryData, setcategoryData] = useState([])
  const [bookData, setBookData] = useState([])
  const [originalBookData, setoriginalBookData] = useState([])
  const [searchKeyword, setsearchKeyword] = useState(null)

  const [categoryQuery, setcategoryQuery] = useState(idCategory ?? 1)
  const [page, setpage] = useState(queryParams.get("page") ? (parseInt(queryParams.get("page"))) : 0)

  useEffect(() => {

    // let pageQuery = queryParams.get("page")
    // setpage(pageQuery)
    retriveCategory()
    return () => {

    }
  }, [])

  useEffect(() => {
    // console.log(idCategory)
    setcategoryQuery(idCategory ?? 1)

    // console.log(Boolean(categoryData.length))
    if (Boolean(categoryData.length)) {
      retriveBook()
    }
    return () => {

    }
  }, [location])
  // console.log(categoryQuery)


  const retriveCategory = () => {
    getCategory().then(res => {
      setcategoryData(res.data)
      retriveBook()
    })
  }

  const retriveBook = () => {
    let getBookFromLS = localStorage.getItem('books-data') ?? "[]"
    let existingBook = JSON.parse(getBookFromLS)
    const checkQueryCategory = idCategory ? parseInt(idCategory) : 1
    const existingBooksInCategory = existingBook.find(x => ((x.categoryId === (checkQueryCategory)) && (x.page === page)))

    if(Boolean(existingBooksInCategory)){
      setBookData(existingBooksInCategory?.books ?? [])
            setoriginalBookData(existingBooksInCategory?.books ?? [])
    } else {
      getBooks({ categoryId: idCategory ?? 1, page: page, size: 10 }).then(res => {

        let store = {
          categoryId: checkQueryCategory,
          page: page,
          books: res.data
        }
  
        if (Boolean(existingBook)) {
          if (Boolean(existingBooksInCategory)) {
            console.log("ada data yang sama")
            setBookData(existingBooksInCategory?.books ?? [])
            setoriginalBookData(existingBooksInCategory?.books ?? [])
          } else {
            localStorage.setItem(`books-data`, JSON.stringify([...existingBook, store]))
            setBookData(res.data)
            setoriginalBookData(res.data)
          }
  
        } else {
          localStorage.setItem(`books-data`, [store])
          setBookData(res.data)
          setoriginalBookData(res.data)
        }
  
      })
    }

    
  }

  const previousPage = () => {
    if (page > 0) {
      let number = page <= 2 ? 1 : 2
      setpage(parseInt(page) - 1)
      // navigate('?page=' + (parseInt(page) - 1));
      navigate('?page=' + page);
    }
  }

  const nextPage = () => {
    setpage(parseInt(page) + 1)
    navigate('?page=' + (parseInt(page) + 2));
  }

  return (
    <div>
      {/* <BounceBox>
        <div className='bg-green-600 w-full rounded-xl p-10 border transform transition-all duration-150 ease-out scale-100'>H</div>
      </BounceBox> */}
      <div className='my-10'>
        <h1 className='pb-4 text-lg font-bold'>Kategori</h1>
        <div className="flex gap-2">
          {
            categoryData.map((val, idx) => {
              let i = 0.1
              return (
                <BounceBox delay={Math.round(idx * 10) / 100}>
                  <Link to={"/" + val.id}>
                    <button onClick={() => setpage(0)} className={`btn btn-accent ${parseInt(categoryQuery) !== parseInt(val.id) ? "btn-outline" : ""}`}>{val.name}
                    </button>
                  </Link>
                </BounceBox>
              )
            })
          }
        </div>
      </div>
      <div className="flex justify-between items-center py-8">
        <h1>Hasil untuk kategori {categoryData.find(x => x.id === (idCategory ? parseInt(idCategory) : 1))?.name}</h1>
        <SearchEngine
          category={idCategory ? parseInt(idCategory) : 1}
          searched={(x) => {
            setBookData(x.mergedArray)
            console.log(x.keyword)
            setsearchKeyword(x.keyword)
          }}
          canceled={() => {
            setsearchKeyword(null)
            setBookData(originalBookData)
          }}
        />
      </div>
      {
        Boolean(searchKeyword) ? <div className="flex w-full items-center py-8">
          <h1 className='mx-auto'>Hasil pencarian untuk "{searchKeyword}"</h1>
        </div>
          : null
      }
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        {
          bookData?.map((val, idx) => {
            const fakeId = Math.random()
            return (
              <>
                <label for={`book-modal${val.id ?? fakeId}`} class="modal-button">
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
                <input type="checkbox" id={`book-modal${val.id ?? fakeId}`} class="modal-toggle" />
                <div class="modal">
                  <div class="modal-box w-11/12 max-w-5xl">
                    <label for={`book-modal${val.id ?? fakeId}`} class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg"></h3>
                    <DetailBook data={val}/>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      {
        Boolean(searchKeyword) ? null : <div className="flex mt-8 items-center justify-center">
          <div class="btn-group">
            <button onClick={() => { previousPage() }} class="btn">«</button>
            <button class="btn">Page {parseInt(page) + 1}</button>
            <button onClick={() => { nextPage() }} class="btn">»</button>
          </div>
        </div>
      }
    </div>
  )
}
