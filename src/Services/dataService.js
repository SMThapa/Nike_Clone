export async function getOrders(){
    const token = JSON.parse(sessionStorage.getItem('token'));
    const id = JSON.parse(sessionStorage.getItem('nkid'))

    const res = await fetch(`http://localhost:8000/660/order?userInfo.userId=${id}`, {
        method:"GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
    })
    const data = await res.json()
    
    return data
}


export async function createOrder(cartList, total, user, payment){
    const token = JSON.parse(sessionStorage.getItem('token'));
    const order = {
        products: cartList,
        total_sum: total,
        quantity: cartList.length,
        userInfo:user,
        payment: payment
    }
    const res = await fetch("http://localhost:8000/660/order", {
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body: JSON.stringify(order)
    })
  
    const data = await res.json();
    return data  
}

 