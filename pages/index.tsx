import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>David Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-3xl font-semibold pb-5'>Inspiration for your next trip</h2>
          <p className='sm:px-10'>New Paragraph</p>
        </section>
      </main>
    </div>
  );
}