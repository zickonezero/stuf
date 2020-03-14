import Head from 'next/head'

import { Main, H1, Header, Layout } from '../app/styles'

export default () => (
  <>
    <Head>
      <title>Stuf</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <Header>
        <H1>Stuf</H1>
      </Header>
      <Main></Main>
      <footer></footer>
    </Layout>
  </>
)
