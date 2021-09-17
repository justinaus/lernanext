import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';

import Footer from './Footer';
import Header from './Header';

type Props = React.PropsWithChildren<React.ReactNode> & {};

export default function Layout({ children }: Props) {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, 'min-h-screen flex flex-col')}>
      <Header />
      <main className="p-10 flex-1">{children}</main>
      <Footer />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 2460,
    minWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#ffffff',
  },
});
