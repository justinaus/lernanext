import { http, IPost } from '@justinaus/shared';
import { Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';

import Layout from '../../components/layout/Layout';

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.

  let data;

  try {
    const response = await http.get('/posts/1');

    // map data.

    data = response?.data;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      data: data || null,
    },
  };
}

interface Props {
  data: IPost | null;
}

export default function StaticGenerationWithData({ data }: Props) {
  return (
    <Layout>
      <Head>
        <title>Static Generation with Data</title>
        <meta name="description" content="Static Generation with Data" />
      </Head>
      <Typography variant="h6" className="mb-4">
        Static Generation with Data
      </Typography>
      <div>title: {data?.title}</div>
      <div>body: {data?.body}</div>
    </Layout>
  );
}
