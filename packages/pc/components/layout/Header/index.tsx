import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="p-10">
      <ul>
        <li>
          <Link href="/staticGenerationWithoutData">
            <a>Static Generation without Data</a>
          </Link>
        </li>
        <li>
          <Link href="/staticGenerationWithData">
            <a>Static Generation with Data</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr">
            <a>SSR</a>
          </Link>
        </li>
        <li>
          <Link href="/csr">
            <a>CSR</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
