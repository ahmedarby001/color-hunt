import Head from 'next/head';
import React, { Fragment } from 'react'
import Header from '../../components/header'

function LikesPage() {
   return (
      <Fragment>
         <SEO />
         <Header />
      </Fragment>
   )
}

const SEO = () => (
   <Head>
      <title>Color Hunt - My Liked Palettes</title>
   </Head>
);

export default LikesPage
