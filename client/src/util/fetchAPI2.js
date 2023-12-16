const BASE_URL = "http://localhost:5000";

export const request = async (url, method, headers = {}, body = {}, isNotStringified = false) => {
    let res;
    let data;

    console.log("Request Data:", body);

    try {
        let requestOptions = {
            method: method,
            headers: headers,
        };
        if (method === 'GET') {
            res = await fetch(BASE_URL + url, requestOptions);
        } else {
            // For other request types, include the body
            requestOptions.body = isNotStringified ? body : JSON.stringify(body);
            res = await fetch(BASE_URL + url, requestOptions);
        }

        data = await res.json();
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        return { error: error.message };
    }
};
