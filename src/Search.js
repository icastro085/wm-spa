import React from 'react';

import SearchNav from './SearchNav';
import SearchActions from './SearchActions';
import VehiclesList from './VehiclesList';
import SearchFilterMake from './SearchFilterMake';
import SearchFilterModel from './SearchFilterModel';
import SearchFilterVersion from './SearchFilterVersion';
import SearchType from './SearchType';
import SearchLocation from './SearchLocation';

export default function Search() {
  return (
    <section className="search-container">
      <SearchNav />

      <section className="filter-container">
        <form>
          <div className="row">
            <SearchType />
          </div>

          <div className="row">
            <SearchLocation />

            <SearchFilterMake />

            <SearchFilterModel />

            <div className="col-3 col-6-sm col-12-smx col-12-smxx">
              <div className="field">
                <label>Ano Desejado:</label>
                <select className="text-right">
                  <option>100km</option>
                </select>
              </div>
            </div>

            <div className="col-3 col-6-sm col-12-smx col-12-smxx">
              <div className="field">
                <label>Faixa de preço:</label>
                <select className="text-right">
                  <option>100km</option>
                </select>
              </div>
            </div>

            <SearchFilterVersion />
          </div>

          <SearchActions />
        </form>
      </section>

      <VehiclesList />
    </section>
  );
}
