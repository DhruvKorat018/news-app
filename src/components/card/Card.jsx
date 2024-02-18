import React from 'react'
import Loader from '../loader/Loader'
import img1 from '../../assets/images/image1.jpg'
import { useId } from 'react'
import { Link } from 'react-router-dom'


const Card = ({ data }) => {

    return (
        <>
            {
                Object.keys(data).length == 0 ? <Loader /> : data.articles.map((element) => (
                    <Link to={element.publishedAt} key={element.publishedAt} className="max-w-sm w-[384px] rounded overflow-hidden shadow-md cursor-pointer hover:shadow-red-300 transition-all duration-300">
                        <img className="w-full max-h-56 object-cover" src={element.urlToImage == null || element.urlToImage == '' ? img1 : element.urlToImage} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{element.title}</div>
                            <p className="text-gray-700 text-base">{element.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Author : {element.author}</span>
                        </div>
                    </Link>
                ))

            }

        </>

    )
}

export default Card
