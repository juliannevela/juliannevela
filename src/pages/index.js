import Head from 'next/head'
import ComingSoon from '../components/comingsoon/ComingSoon';

function HomePage() {
  return (
    <>
      <Head>
        <title>Julianne Vela: Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
       <ComingSoon />;
    </>
  )
}

export default HomePage
