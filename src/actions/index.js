export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const API_KEY = '8aef1181042e4066a428c268e4e1078d'

export const getChannel = channel => ({
  type: SELECT_CHANNEL,
  channel,
});

export const requestPosts = () => ({
  type: REQUEST_POSTS,

});

export const receivedPosts = (json) => ({
  type: RECEIVE_POSTS,
  json: json.articles,
});


export function fetchPosts(channel) {
 return function (dispatch) {
   dispatch(requestPosts());
   return fetch(`https://newsapi.org/v1/articles?
      source=${channel}&apiKey=${API_KEY}`)
   .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
  )
   .then((json) => {
      dispatch(receivedPosts(json));
   },
  );
 };
}
