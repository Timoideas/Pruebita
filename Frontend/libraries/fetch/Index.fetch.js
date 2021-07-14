import fetch from 'node-fetch';
const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;
export const GET_Index = (url, token) =>
  fetch(BACKEND_API + url, { headers: { auth: token } }).then((res) =>
    res.json()
  );
export const POST_Index = (url, data) =>
  fetch(BACKEND_API + url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
export const PUT_Index = (url, data, token) =>
  fetch(BACKEND_API + url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      auth: token,
    },
  }).then((res) => res.json());
export const DELETE_Index = (url, token) =>
  fetch(BACKEND_API + url, {
    method: 'DELETE',
    headers: { auth: token },
  }).then((res) => res.json());

import fetch from 'node-fetch';
const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;
export const GET_Index = (url, token) =>
  fetch(BACKEND_API + url, { headers: { auth: token } }).then((res) =>
    res.json()
  );
export const POST_Index = (url, data) =>
  fetch(BACKEND_API + url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
export const PUT_Index = (url, data, token) =>
  fetch(BACKEND_API + url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      auth: token,
    },
  }).then((res) => res.json());
export const DELETE_Index = (url, token) =>
  fetch(BACKEND_API + url, {
    method: 'DELETE',
    headers: { auth: token },
  }).then((res) => res.json());
