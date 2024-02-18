import React, { useEffect } from 'react'
import img from '../../assets/images/image1.jpg'
import { Link, useParams } from 'react-router-dom'

const NewsDetails = () => {

  const { publishedAt } = useParams()

  const stringedNewdData = localStorage.getItem('newsData');
  const newsData = JSON.parse(stringedNewdData)

  const stringedNewdDataNew = localStorage.getItem('newsDataSearched');
  const newsDataNew = JSON.parse(stringedNewdDataNew)

  const mergedArticles = newsData.articles.concat(newsDataNew.articles);

  const uniqueArticles = mergedArticles.reduce((acc, curr) => {
    if (!acc.find(item => item.publishedAt === curr.publishedAt)) {
      acc.push(curr);
    }
    return acc;
  }, []);

  const selectedNews = uniqueArticles.filter(item => item.publishedAt == publishedAt);

  useEffect(() => {



  }
    , [publishedAt])


  return (
    <>
      {
        selectedNews.map((item) => (
          <div className='container mx-auto p-5 mt-[56px]'>

            <Link to='/' className='fixed left-[1%] bg-amber-200 px-2 rounded top-[10%] font-bold'>BACK</Link>

            <h2 className='font-bold text-4xl mb-5 text-center'>{item.title}</h2>

            <div className='w-full h-[70vh] mb-5'>
              <img className='w-full h-full object-contain' src={item.urlToImage ? item.urlToImage : img} alt="" />
            </div>

            <div className='mb-2'>
              <h4>Published At : {item.publishedAt}</h4>
            </div>

            <div className='mb-5'>
              <p className='font-semibold text-lg'>{item.description}</p>
            </div>

            <div className='mb-5'>
              <p className=''>{item.content}</p>
            </div>

            <div>
              <h5 className='font-semibold'>Author : {item.author}</h5>
            </div>

          </div>
        ))
      }

    </>
  )
}

export default NewsDetails
