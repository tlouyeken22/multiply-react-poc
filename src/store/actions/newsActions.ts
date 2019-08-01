
export const processFetchNews = () => {
    return (dispatch: any) => {
        dispatch({ type: 'FETCH_NEWS_START' })

        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3c031bcab3f945b7b64f99810241253c')
            .then(response => response.json())
            .then(data => {
                const { articles } = data;
                dispatch({ type: 'FETCH_NEWS_SUCCESS', data: articles })
            })
            .catch((err: any) => {
                dispatch({ type: 'REGISTER_ERROR', data: err });
            });
    }
}