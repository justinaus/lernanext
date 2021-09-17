import { Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';

import Layout from '../../components/layout/Layout';

export default function StaticGenerationWithoutData() {
  return (
    <Layout>
      <Head>
        <title>Static Generation without Data</title>
        <meta name="description" content="Static Generation without Data" />
      </Head>
      <Typography variant="h6" className="mb-4">
        Static Generation without Data
      </Typography>
      <div>hi hello</div>
    </Layout>
  );
}
