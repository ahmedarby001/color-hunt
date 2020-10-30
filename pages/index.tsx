import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import { Fragment } from 'react';
import Head from 'next/head';
import Header from '../components/header';



const IndexPage = () => (
   <Fragment>
      <SEO />
      <Header />
   </Fragment>
);

const SEO = () => (
   <Head>
      <title>Color Hunt - Color Palettes for Designers and Artists</title>
   </Head>
);

export default IndexPage;
