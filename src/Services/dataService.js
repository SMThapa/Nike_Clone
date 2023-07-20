export async function getOrders(){
    const token = JSON.parse(sessionStorage.getItem('token'));
    const id = JSON.parse(sessionStorage.getItem('nkid'))

    const res = await fetch(`https://nike-clone-server.onrender.com/order?userInfo.userId=${id}`, {
        method:"GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
    })
    if(!res.ok){
        // eslint-disable-next-line no-throw-literal
        throw ({message: res.statusText, status: res.status});
    }
    const data = await res.json()
    return data
}


export async function createOrder(cartList, total, user, payment, deliveryDate){
    const token = JSON.parse(sessionStorage.getItem('token'));
    const order = {
        products: cartList,
        total_sum: total,
        quantity: cartList.length,
        userInfo:user,
        payment: payment,
        deliveryDate: deliveryDate
    }
    const res = await fetch(`https://nike-clone-server.onrender.com/660/order`, {
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
        body: JSON.stringify(order)
    })
    if(!res.ok){
        // eslint-disable-next-line no-throw-literal
        throw ({message: res.statusText, status: res.status});
    }
  
    const data = await res.json();
    return data  
}

 