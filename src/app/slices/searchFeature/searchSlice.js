import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchText: '',
    newsData: {},
}

export const searchSlice = createSlice({
    name: 'search feature',
    initialState,
    reducers: {
        fetchSearchedData: (state, action) => {
            state.newsData = action.payload
            console.log(state.newsData);

            const newsDataString = JSON.stringify(action.payload);
            localStorage.setItem('newsDataSearched', newsDataString);
        },
    }
})

export const fetchSearchedRes = (keyword) => async (dispatch, getState) => {
    try {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&pageSize=15&apiKey=aef7a0648e474752a1391e74b06719aa`);
        let resData = await response.json();
        let newsData = resData;

        // getState.newsData = newsData;

        dispatch(fetchSearchedData(newsData))

    } catch (error) {
        console.log(error);
    }
}

export const { fetchSearchedData } = searchSlice.actions


export default searchSlice.reducer;