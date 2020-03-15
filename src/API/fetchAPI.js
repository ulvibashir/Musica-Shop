const domain = 'https://my-json-server.typicode.com/ulvibashir/DB';

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


