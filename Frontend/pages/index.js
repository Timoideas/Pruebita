import style from 'styles/pages/Index.module.css';
import Head_Main from 'heads/Main.head';
import {
  Body,
  Section,
  Content,
} from 'components/timoideas/Timoideas.components';
import { useState } from 'react';
import fetch from 'node-fetch';
import { FetchPostData } from 'libraries/fetch/Index.fetch';

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
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder='name'
            />
            <input
              type='text'
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder='username'
            />
            <input
              type='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder='password'
            />
            <input
              type='text'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder='email'
            />
            <input
              type='text'
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
              placeholder='telefono'
            />
            <button
              onClick={async () => {
                await FetchPostData('http://localhost:4000/users', {
                  Name,
                  Username,
                  Password,
                  Email,
                  Telefono,
                });
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
