
const initState = {
    authError: "",
    loading: false,
    newsArticles: {}
};

const newsReducer = (state = initState, action: any) => {
    switch (action.type) {

        case 'FETCH_NEWS_START':
            console.log('started fetching news');
            return {
                ...state,
                loading: true
            }

        case 'FETCH_NEWS_ERROR':
            console.log('failed fetching news');
            return {
                ...state,
                authError: action.data.message,
                loading: false
            }

        case 'FETCH_NEWS_SUCCESS':
            console.log('successfully fetched news');
            return {
                ...state,
                authError: "",
                loading: false,
                newsArticles: action.data
            }

        default:
            return state;
    }
}

export default newsReducer;
