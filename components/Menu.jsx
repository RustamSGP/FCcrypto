import React from 'react';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">O нас</Link>
        </li>
        <li>
          <Link to="/fan-shop">Фан Шоп</Link>
        </li>
        <li>
          <Link to="/ticket-office">Билетная Касса</Link>
        </li>
        <li>
          <Link to="/team">Команды клуба</Link>
          <ul>
            <li>
              <Link to="/team/adults">Взрослые</Link>
            </li>
            <li>
              <Link to="/team/2008">2008</Link>
            </li>
            <li>
              <Link to="/team/2009">2009</Link>
            </li>
            <li>
              <Link to="/team/2011">2011</Link>
            </li>
            <li>
              <Link to="/team/2012">2012</Link>
            </li>
            <li>
              <Link to="/team/girls">девочки</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/salut-foundation">Salut Foundation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;