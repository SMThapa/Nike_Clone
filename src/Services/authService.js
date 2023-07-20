export async function authLogin(userDetails){
  // const res = await fetch(`https://nike-clone-server.onrender.com/login`, {
  const res = await fetch(`https://nike-clone-server.onrender.com/login`, {
    method: "POST",
    headers: {"content-Type": "application/json"},
    body: JSON.stringify(userDetails)
  })
  if(!res.ok){
    // eslint-disable-next-line no-throw-literal
    throw ({message: res, status: res.status});
  }
  const data = await res.json()
  return data;
}

export async function authRegister(userDetails){
  const res = await fetch(`https://nike-clone-server.onrender.com/register`, {   
      method: "POST",
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(userDetails)
    })
    if(!res.ok){
      // eslint-disable-next-line no-throw-literal
      throw ({message: res.statusText, status: res.status});
  }
  const data = await res.json()
  return data;
}

export async function findUser(id, token){
  const res = await fetch(`https://nike-clone-server.onrender.com/660/order?userInfo.userId=${id}`, {
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
