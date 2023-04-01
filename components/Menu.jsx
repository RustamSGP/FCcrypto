import React from 'react';
import Link from 'next/link';
 // импортируем стили из globals.css

const Menu = () => {
  return (
    <nav> 
      <ul>
        <li>
          <Link href="/Home">Главная</Link>
        </li>
        <li>
          <Link href="/about">O нас</Link>
        </li>
        <li>
          <Link href="/market">Фан Шоп</Link>
        </li>
        <li>
          <Link href="/tickets">Билетная Касса</Link>
        </li>
        <li>
          <Link href="http://reality.cryptogamesplay.com/">Salut Foundation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;