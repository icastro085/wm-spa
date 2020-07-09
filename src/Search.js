import React from 'react';

import { Checkbox } from './Form';

export default function Search() {
  return (
    <section className="search-container">
      <nav>
        <ul>
          <li className="active">
            <i className="fas fa-car" />
            <div>
              <span className="superscript-text">COMPRAR</span>
              CARROS
            </div>
          </li>
          <li>
            <i className="fas fa-motorcycle" />
            <div>
              <span className="superscript-text">COMPRAR</span>
              MOTOS
            </div>
          </li>
        </ul>
      </nav>

      <section className="filter-container">
        <form>
          <Checkbox label="Novo" value="new" />

          <Checkbox label="Usado" value="used" />
        </form>
      </section>
    </section>
  );
}
