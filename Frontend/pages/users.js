import Head_Main from 'heads/Main.head';
import {
  Section,
  Body,
  Content,
} from 'components/timoideas/Timoideas.components';

import { GET_Index } from 'libraries/fetch/Index.fetch';
import useSWR from 'swr';
export default function Users() {
  const { data, error } = useSWR(['/users', 'asd'], GET_Index);
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
          </Content>
        </Section>
      </Body>
    </>
  );
}
export async function getStaticProps(context) {
  console.log(process.env.BACKEND);
  return {
    props: {
      data: 'data',
    },
  };
}
