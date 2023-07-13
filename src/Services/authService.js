export async function authLogin(userDetails){
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {"content-Type": "application/json"},
      body: JSON.stringify(userDetails)
    })
    const data = await res.json()
    return data;
}

export async function authRegister(userDetails){
    const res = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(userDetails)
      })
    const data = await res.json()
    return data;
}

