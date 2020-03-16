import Head from 'next/head'

import { Main, H1, Header, Layout } from '../app/styles'

export default () => (
  <>
    <Head>
      <title>Stuf</title>
      <link rel='icon' href='/favicon.ico' />
      <link
        href='https://fonts.googleapis.com/css2?family=Pacifico&display=swap'
        rel='stylesheet'
      ></link>
    </Head>

    <Layout>
      <Header justify='left'>
        <H1>Stuf</H1>
      </Header>
      <Main></Main>
      <footer></footer>
    </Layout>
  </>
)
