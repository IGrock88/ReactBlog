import * as PostsConstants from '../constants/postsConstants';
export function postsReducer(state = {posts: [], is_fetching: false}, action) {
    switch (action.type){
        case PostsConstants.FETCH_POSTS_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }

        case PostsConstants.FETCH_POSTS_FULFILLED: {
            state = {...state, is_fetching: false, users: action.payload.data};
            break;
        }

        case PostsConstants.FETCH_POSTS_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }
    }
    return state;
}