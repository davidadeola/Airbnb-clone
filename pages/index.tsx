import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>David Airbnb App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-3xl font-semibold pb-5'>Inspiration for your next trip</h2>
            <h1>London</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Id quisquam eius autem ullam, adipisci omnis modi tenetur
              amet voluptates non totam doloremque sed, voluptate quae beatae 
              debitis voluptatum? Temporibus, dolores.</p>
        </section>
      </main>
    </div>
  ) 
}

