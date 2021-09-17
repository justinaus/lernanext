import { getIsValidEmail, getOnlyNumber } from '@justinaus/shared';
import { Typography } from '@material-ui/core';
import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/layout/Layout';

const Home: NextPage = () => {
  console.log(
    'utils test',
    getOnlyNumber(`123jjj123`),
    getIsValidEmail('123@naver.com'),
  );

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Lerna Next" />
      </Head>
      <Typography variant="h6" className="mb-4">
        Home
      </Typography>
    </Layout>
  );
};

export default Home;
