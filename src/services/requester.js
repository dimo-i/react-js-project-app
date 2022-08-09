const request = async (method, url, data) => {
    

    try {
        let requestCreator ;
        if (method === 'GET'){
            requestCreator = fetch(url);
        } else {
            requestCreator = fetch(url, {
                method,
                headers: {
                    'content-type': 'application/json'
                }, 
                body: JSON.stringify(data)
            })
        }

        const response = await requestCreator;

        const result = await response.json();
        console.log(result)
        return result

    } catch (error) {
        console.log(error);
    }
    
}


export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const remove = request.bind({}, 'DELETE');