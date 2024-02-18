import React, { useState, useEffect } from 'react'
import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

async function apiCall() {
    try {

        let response = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=aef7a0648e474752a1391e74b06719aa');
        let resData = await response.json();
        let newsData = resData;

        return newsData;

    } catch (error) {
        console.log(error);
    }
}


const Home = () => {

    const [newsData, setNewsData] = useState({})

    const { publishedAt } = useParams()

    const searchedData = useSelector(state => state.newsData)

    useEffect(() => {

        clickGetNews()

    }, [publishedAt, searchedData])


    const clickGetNews = async () => {

        const stringedNewdData = localStorage.getItem('newsData');
        const fetchedNewsData = JSON.parse(stringedNewdData)

        if (!fetchedNewsData) {
            const fetchedNewsData = await apiCall();
            const newsDataString = JSON.stringify(fetchedNewsData);
            localStorage.setItem('newsData', newsDataString);
            localStorage.setItem('newsDataSearched', newsDataString);
        }

        Object.keys(searchedData).length == 0 ? fetchedNewsData && setNewsData(fetchedNewsData) : setNewsData(searchedData);

        // console.log(searchedData);

    }

    return (
        <>
            {
                Object.keys(newsData).length == 0 ? <Loader onClick={clickGetNews} /> :
                    <div className='mt-[56px] p-4 container mx-auto flex justify-around gap-10 flex-wrap'>
                        <Card data={newsData} />
                    </div>
            }
        </>
    )
}

export default Home
