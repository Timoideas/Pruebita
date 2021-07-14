import Head_Main from 'heads/Main.head';
import {
  Section,
  Body,
  Content,
} from 'components/timoideas/Timoideas.components';

import FetchGetData from 'libraries/fetch/Index.fetch';
import useSWR from 'swr';
export default function Users() {
  const { data, error } = useSWR('http://localhost:4000/users', FetchGetData);
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
  return (
    <>
      <Head_Main />
      <Body>
        <Section>
          <Content center>
            <h1>Users</h1>
            <button>Get data</button>
          </Content>
        </Section>
      </Body>
    </>
  );
}
