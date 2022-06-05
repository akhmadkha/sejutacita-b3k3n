import BounceBox from 'components/_animations/bounce-box'
import React, { useEffect, useState } from 'react'
import { getBooks, getCategory } from 'services/api/book'
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import DetailBook from './detail-book';
import SearchEngine from 'components/search-engine';
import SearchNotFound from 'components/_lottie/search-notfound';
import CategorySkeleton from 'components/_skeletons/category-skeleton';
import BookSkeleton from 'components/_skeletons/book-skeleton';
import NotFoundLottie from 'components/_lottie/not-found';
import ErrorLottie from 'components/_lottie/error';

export default function Home() {
  const queryParams = new URLSearchParams(window.location.search);
  const { idCategory } = useParams()
  const location = useLocation()
  let navigate = useNavigate();

  const [categoryData, setcategoryData] = useState([])
  const [bookData, setBookData] = useState([])
  const [originalBookData, setoriginalBookData] = useState([])
  // loading
  const [loadingCategory, setloadingCategory] = useState(false)
  const [loadingBooks, setloadingBooks] = useState(false)
  // error
  const [categoryError, setcategoryError] = useState(null)
  const [booksError, setbooksError] = useState(null)

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
    setloadingCategory(true)
    getCategory().then(res => {
      setloadingCategory(false)
      setcategoryData(res.data)
      retriveBook()
    }).catch((err) => {
      setcategoryError(err.response.status)
      setloadingCategory(false)
    })
  }

  const retriveBook = () => {
    let getBookFromLS = localStorage.getItem('books-data') ?? "[]"
    let existingBook = JSON.parse(getBookFromLS)
    const checkQueryCategory = idCategory ? parseInt(idCategory) : 1
    const existingBooksInCategory = existingBook.find(x => ((x.categoryId === (checkQueryCategory)) && (x.page === page)))

    if (Boolean(existingBooksInCategory)) {
      setBookData(existingBooksInCategory?.books ?? [])
      setoriginalBookData(existingBooksInCategory?.books ?? [])
    } else {
      setloadingBooks(true)
      getBooks({ categoryId: idCategory ?? 1, page: page, size: 10 }).then(res => {
        setloadingBooks(false)
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
        .catch(err => {
          setloadingBooks(false)
          setbooksError(err.response.status)
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

  const renderCategory = () => {
    if (categoryError !== null) {
      return (
        <div className='flex justify-center items-center'>
          <p>Gagal memuat data</p>
        </div>
      )
    } else {
      return (
        <div className="flex flex-wrap gap-2">
          {
            categoryData.map((val, idx) => {
              return (
                <BounceBox delay={Math.round(idx * 10) / 100}>
                  <Link to={"/" + val.id}>
                    <button onClick={() => {
                      setbooksError(null)
                      setpage(0)
                    }} className={`btn btn-accent ${parseInt(categoryQuery) !== parseInt(val.id) ? "btn-outline" : ""}`}>{val.name}
                    </button>
                  </Link>
                </BounceBox>
              )
            })
          }
        </div>
      )
    }
  }

  const renderBook = () => {
    if (booksError !== null) {
      if (booksError === 404) {
        return (
          <div>
            <NotFoundLottie />
          </div>
        )
      } else {
        return (
          <div>
            <ErrorLottie />
          </div>
        )
      }
    } else {
      return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-3">
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
                      <DetailBook data={val} />
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      )
    }
  }

  return (
    <div>
      <BounceBox>
        <div class="hero min-h-10 rounded-xl" style={{backgroundImage: "url(https://api.lorem.space/image/furniture?w=1000&h=800)"}}>
          <div class="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-2 text-5xl font-bold">"</h1>
              <p class="mb-0">A room without books is like a body without a soul.</p>
              <h1 class="mt-2 text-5xl font-bold">-</h1>
            </div>
          </div>
        </div>
      </BounceBox>

      <div className='my-10'>
        <h1 className='pb-4 text-lg font-bold'>Kategori</h1>
        {
          loadingCategory ?
            <div className="flex gap-2">
              <CategorySkeleton />
              <CategorySkeleton />
              <CategorySkeleton />
            </div>
            :
            renderCategory()
        }
      </div>
      <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between items-center py-8">
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
        Boolean(searchKeyword) ? <>
          <div className="flex w-full items-center py-8">
            <h1 className='mx-auto'>Hasil pencarian untuk "{searchKeyword}"</h1>
          </div>
          {
            bookData.length < 1 ?
              <div className="pt-8">
                <SearchNotFound />
              </div> : null
          }
        </>
          : null
      }
      {
        loadingBooks ?
          <div className="grid gap-4 grid-cols-3 grid-rows-3">
            <BookSkeleton />
            <BookSkeleton />
            <BookSkeleton />
            <BookSkeleton />
          </div>
          :
          renderBook()
      }
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
