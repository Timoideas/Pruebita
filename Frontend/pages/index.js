import style from 'styles/pages/Index.module.css';
import Head_Main from 'heads/Main.head';
import {
  Body,
  Section,
  Content,
} from 'components/timoideas/Timoideas.components';
import { useState } from 'react';
import fetch from 'node-fetch';
export default function Index() {
  const [Name, setName] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [Telefono, setTelefono] = useState('');
  return (
    <>
      <Head_Main />
      <Body>
        <Section>
          <Content center flex={0.5}>
            <input
              type='text'
              onClick={(e) => {
                setName(e.target.value);
              }}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder='name'
            />
            <input
              type='text'
              onClick={(e) => {
                setUsername(e.target.value);
              }}
              placeholder='username'
            />
            <input
              type='password'
              onClick={(e) => {
                setPassword(e.target.value);
              }}
              placeholder='password'
            />
            <input
              type='text'
              onClick={(e) => {
                setEmail(e.target.value);
              }}
              placeholder='email'
            />
            <input
              type='text'
              onClick={(e) => {
                setTelefono(e.target.value);
              }}
              placeholder='telefono'
            />
            <button
              onClick={async () => {
                const datos = {
                  Name,
                  Username,
                  Password,
                  Email,
                  Telefono,
                };
                const data = await fetch('http://localhost:4000/users', {
                  method: 'post',
                  body: JSON.stringify(datos),
                  headers: { 'Content-Type': 'application/json' },
                });

                const res = await data.json();
                console.log(res);
              }}
            >
              Enviar datos
            </button>
          </Content>
        </Section>
      </Body>
    </>
  );
}
