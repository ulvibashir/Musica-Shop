// const domain = 'https://my-json-server.typicode.com/ulvibashir/DB';


/* If you want use local DB/db.json you need to run json-server 3004 port */
const domain = 'http://localhost:3004';

function fetchFabric(endpoint, method) {

    return async (getParams = '', postParams = {}) => {
        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if (method !== 'GET') {
            options.method = method;
            options.body = JSON.stringify(postParams)
        }

        const res = await fetch(`${domain}${endpoint}${getParams}`, options);
        return res.json();
    }
}

export const musicsFetch = fetchFabric('/musics', 'GET');
export const cardFetch = fetchFabric('/card', 'GET');
export const addCard = fetchFabric('/card', 'POST');
export const editCard = fetchFabric('/card', 'PUT');
export const deleteCard = fetchFabric('/card', 'DELETE');
export const addFavorite = fetchFabric('/favorites', 'POST');
export const deleteFavorite = fetchFabric('/favorites', 'DELETE');
export const favoritesFetch = fetchFabric('/favorites', 'GET');





