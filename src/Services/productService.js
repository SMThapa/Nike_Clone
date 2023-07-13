export async function getProduct(id=''){
    const res = await fetch(`http://localhost:8000/products/${id}`);
    const json = await res.json();
    return json
}

export async function getAllProducts(searchTerm){
    const response = await fetch(`http://localhost:8000/products?name_like=${searchTerm ? searchTerm : ''}`)
    const data = await response.json()
    return data
}

