import React, { Fragment } from 'react'
import Head from 'next/head';
import Header from '../../components/header';

function About() {
   return (
      <Fragment>
         <SEO />
         <Header />
      </Fragment>
   )
}

const SEO = () => (
   <Head>
      <title>Color Hunt - About</title>
   </Head>
);

export default About
