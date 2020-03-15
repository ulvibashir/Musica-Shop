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
