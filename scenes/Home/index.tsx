import Head from 'next/head';

import About from './About';
import Hero from './Hero';
import LocationAndHours from './LocationAndHours';

import { images } from '~/shared/assets';
import routes from '~/shared/routes';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Citra | Bubble Tea Cafe - Seattle, Washington</title>
        <meta property="og:title" content="Citra | Bubble Tea Cafe - Seattle, Washington" />
        <meta property="og:url" content={process.env.HOST + routes.home} />
        <meta property="og:image" content={process.env.HOST + images.SNOW_ICE} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Fresh tapioca, locally-sourced coffee, sweet treats, and more!" />
      </Head>
  
      <Hero />
      <LocationAndHours />
      <About />
    </div>
  )
}

export default Home;
