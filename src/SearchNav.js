import React from 'react';
import classNames from 'classnames';
import useNav from './hooks/useNav';

const TABS = [
  {
    icon: 'fas fa-car',
    label: 'search.nav.car',
  },
  {
    icon: 'fas fa-motorcycle',
    label: 'search.nav.bike',
  },
];

export default function SearchNav() {
  const { tab, setTab } = useNav();

  TABS.forEach((currentTab) => {
    currentTab.label = __(currentTab.label);// eslint-disable-line no-param-reassign
  });

  return (
    <div className="search-nav-bar">
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
                    {__('search.nav.buy')}
                  </span>
                  {label}
                </div>
              </li>
            ))
          }
        </ul>
      </nav>
      <a className="button-sales" href="/#/sales/create">
        {__('search.nav.sales-car')}
      </a>
    </div>
  );
}
