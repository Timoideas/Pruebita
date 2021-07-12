import style from 'styles/pages/Index.module.css';
import Head_Main from 'heads/Main.head';
import {
  Body,
  Section,
  Content,
} from 'components/timoideas/Timoideas.components';

export default function Index() {
  return (
    <>
      <Head_Main />
      <Body>
        <Section>
          <Content center flex={0.5}>
            <input type='text' placeholder='name' />
            <input type='text' placeholder='username' />
            <input type='text' placeholder='password' />
            <input type='text' placeholder='email' />
            <input type='text' placeholder='telefono' />
          </Content>
        </Section>
      </Body>
    </>
  );
}
