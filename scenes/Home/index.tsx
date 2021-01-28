import Head from 'next/head';

import Hero from './Hero';
import LocationAndHours from './LocationAndHours';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Citra - Bubble Tea Cafe - Seattle, Washington</title>
      </Head>
      <Hero />
      <LocationAndHours />
    </div>
  )
}
