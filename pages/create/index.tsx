import Head from 'next/head';
import React, { Fragment } from 'react'
import Header from '../../components/header'

function Create() {
   return (
      <Fragment>
         <SEO />
         <Header />
      </Fragment>
   )
}

const SEO = () => (
   <Head>
      <title>Color Hunt - Create a Color Palette</title>
   </Head>
);

export default Create
