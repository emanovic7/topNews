

const API_KEY = '8aef1181042e4066a428c268e4e1078d'

export const getChannel = channel =>




export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_CATS_REQUEST' });
    return fetch('http://www.catapi.com')
      .then(response => response.json())
      .then(cats => dispatch({ type: 'ADD_CATS', cats }));
  };
}
