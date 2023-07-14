export async function authLogin(userDetails){
  const res = await fetch(`${process.env.REACT_APP_HOST}/login`, {
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

export async function authRegister(userDetails){
  const res = await fetch(`${process.env.REACT_APP_HOST}/register`, {   
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
  const res = await fetch(`${process.env.REACT_APP_HOST}/660/order?userInfo.userId=${id}`, {
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
