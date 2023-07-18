export async function getProduct(id=''){
    const res = await fetch(`https://nike-clone-server.onrender.com/444/products/${id}`);
    if(!res.ok){
        // eslint-disable-next-line no-throw-literal
        throw ({message: res.statusText, status: res.status});
    }
    const json = await res.json();
    return json
}

export async function getAllProducts(searchTerm){
    const response = await fetch(`https://nike-clone-server.onrender.com/444/products?name_like=${searchTerm ? searchTerm : ''}`)
    if(!response.ok){
        // eslint-disable-next-line no-throw-literal
        throw ({message: response.statusText, status: response.status});
    }
    const data = await response.json()
    return data
}

