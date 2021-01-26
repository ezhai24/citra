import Head from 'next/head';

import Hero from './Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Citra - Bubble Tea Cafe - Seattle, Washington</title>
      </Head>
      <Hero />
    </div>
  )
}
