import { http } from '@justinaus/shared';
import { Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';

import Layout from '../../components/layout/Layout';

const fetcher = (url: string) => http.get(url).then((res) => res.data);

export default function Csr() {
  const { data, error } = useSWR('/posts/1', fetcher);

  return (
    <Layout>
      <Head>
        <title>CSR</title>
        <meta name="description" content="CSR" />
      </Head>
      <Typography variant="h6" className="mb-4">
        CSR
      </Typography>
      {error ? (
        <div>데이터를 정상적으로 불러오지 못했습니다.</div>
      ) : (
        <div>
          <div>title: {data?.title}</div>
          <div>body: {data?.body}</div>
        </div>
      )}
    </Layout>
  );
}
