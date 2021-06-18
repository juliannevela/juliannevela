import Head from 'next/head'
import ComingSoon from '../components/comingsoon/ComingSoon';

function HomePage() {
  return (
    <>
      <Head>
        <title>Julianne Vela: Software Engineer</title>
        <meta property="og:title" content="Julianne Vela: Software Engineer" key="title" />
      </Head>
       <ComingSoon />;
    </>
  )
}

export default HomePage
