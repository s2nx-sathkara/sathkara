export const URL = "http://localhost:5000";

const headers = {
    "Accept": "*/*",
    "Content-Type": "application/json",
};

export const getAllUsers = async () => {
    let options = {
        headers,
        method:"GET",
    }

    fetch(URL + '/users/all', options).then((response)=>{
        return response.json();
    });
    return null;
}

export const getUser = async (uId) => {
    let options = {
        headers,
        method:"GET",
    }

    const fetchRes = await fetch(URL + '/users/' + uId, options);
    if(fetchRes.status == 200) return await fetchRes.json();
    return null;    
}

export const updateUser = async (uId, data) => {
    let options = {
        headers,
        method:"POST",
        body:JSON.stringify(data)
    }

    const fetchRes = await fetch(URL + '/users/update/' + uId, options);
    if(fetchRes.status == 200) return fetchRes;
    return null; 
} 

export const deleteUser = async (uId) => {
    let options = {
        headers,
        method:"POST",
    }

    const fetchRes = await fetch(URL + '/users/delete' + uId, options);
    if(fetchRes.status == 200) return fetchRes;
    return null; 
} 

export const signUpUser = async (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let res = null;
    
    var raw = JSON.stringify(data);

    console.log(raw);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    await fetch(URL + "/users/signup", requestOptions)
      .then(response => response.json())
      .then(result => res = result)
      .catch(error => console.log('error', error));

    return res;

} 

export const signInUser = async (data) => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
       
        let bodyContent = JSON.stringify(data);
       
       let response = await fetch(URL + "/users/signin", { 
         method: "POST",
         mode: "cors",
         body: bodyContent,
         headers: headersList
       });
       
       let d = await response.json();
       
       return d;
} 

export const getPosts = async () => {
    let options = {
        headers,
        method:"GET",
    }

    const fetchRes = await fetch(URL + '/requests/all', options);
    if(fetchRes.status == 200) return fetchRes;
    return null;
}

export const getPost = async (rId) => {
    let options = {
        headers,
        method:"GET",
    }

    const fetchRes = await fetch(URL + '/requests/' + rId, options);
    if(fetchRes.status == 200) return fetchRes;
    return null;
}

export const getPostsProvinceAndDistrict = async (province, district) => {
    let options = {
        headers,
        method:"GET",
    }

    const fetchRes = await fetch(URL + '/requests/location/' + province + '/' +district, options);
    if(fetchRes.status == 200) return fetchRes;
    return null;
}

export const getPostsProvince = async (province) => {
    let options = {
        headers,
        method:"GET",
    }

    const fetchRes = await fetch(URL + '/requests/location/' + province, options);
    if(fetchRes.status == 200) return fetchRes;
    return null;
}

export const addPost = async (data) => {
    let options = {
        headers,
        method:"POST",
        body:JSON.stringify(data)
    }

    const fetchRes = await fetch(URL + '/requests/add', options);
    if(fetchRes.status == 200) return fetchRes;
    return null;
}

export const updatePost = async (rId, data) => {
    let options = {
        headers,
        method:"POST",
        body:JSON.stringify(data)
    }

    const fetchRes = await fetch(URL + '/requests/update/' + rId, options);
    if(fetchRes.status == 200) return fetchRes;
    return null;
}

export const deletePost = async (rId) => {
    let options = {
        headers,
        method:"POST",
    }

    const fetchRes = await fetch(URL + '/requests/delete/' + rId, options);
    if(fetchRes.status == 200) return fetchRes;
    return null;
}