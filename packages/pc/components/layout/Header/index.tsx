import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="p-10">
      <ul>
        <li>
          <Link href="/aaa">
            <a>aaa</a>
          </Link>
        </li>
        <li>
          <Link href="/bbb">
            <a>bbb</a>
          </Link>
        </li>
        <li>
          <Link href="/ccc">
            <a>ccc</a>
          </Link>
        </li>
        <li>
          <Link href="/ddd">
            <a>ddd</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
