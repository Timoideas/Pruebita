import fetch from 'node-fetch';

const FetchGetData = async (url, datos) => {
  const data = await fetch(url);
  const res = await data.json();
  return res;
};

export async function FetchPostData(url, datos) {
  const data = await fetch(url, {
    method: 'post',
    body: JSON.stringify(datos),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await data.json();

  console.log(res);
}

// Backend
// 'http://localhost:4000/users/changepasswod'

export async function FetchPutData() {}

export async function FetchDeleteData() {}

export default FetchGetData;
