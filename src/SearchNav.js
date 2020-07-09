import React from 'react';
import classNames from 'classnames';
import useNav from './hooks/useNav';

const TABS = [
  {
    icon: 'fas fa-car',
    label: 'CARROS',
  },
  {
    icon: 'fas fa-motorcycle',
    label: 'MOTOS',
  },
];

export default function SearchNav() {
  const { tab, setTab } = useNav();

  return (
    <nav>
      <ul>
        {
          TABS.map(({ icon, label }, index) => (
            <li
              onClick={() => setTab(index)}
              className={classNames({ active: tab === index })}
              key={`nav-${label}`}
            >
              <i className={icon} />
              <div>
                <span className="superscript-text">
                  COMPRAR
                </span>
                {label}
              </div>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
