import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = () => async dispatch => {
    const res = await jsonPlaceHolder.get('/posts')
    dispatch({type: 'FETCH_POSTS', payload: res})
}

export default fetchPosts