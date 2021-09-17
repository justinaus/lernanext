import { http, IPost } from '@justinaus/shared';
import { Typography } from '@material-ui/core';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import React from 'react';

import Layout from '../../components/layout/Layout';

export async function getServerSideProps(context: GetServerSidePropsContext) {
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

export default function Ssr({ data }: Props) {
  return (
    <Layout>
      <Head>
        <title>SSR</title>
        <meta name="description" content="SSR" />
      </Head>
      <Typography variant="h6" className="mb-4">
        SSR
      </Typography>
      {data ? (
        <div>
          <div>title: {data?.title}</div>
          <div>body: {data?.body}</div>
        </div>
      ) : (
        <div>데이터를 정상적으로 불러오지 못했습니다.</div>
      )}
    </Layout>
  );
}
