import React from 'react';

import SearchNav from './SearchNav';
import SearchActions from './SearchActions';
import VehiclesList from './VehiclesList';
import SearchFilterMake from './SearchFilterMake';
import SearchFilterModel from './SearchFilterModel';
import SearchFilterVersion from './SearchFilterVersion';
import SearchType from './SearchType';
import SearchLocation from './SearchLocation';
import SearchFilterYear from './SearchFilterYear';
import SearchFilterPrice from './SearchFilterPrice';

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

            <SearchFilterYear />

            <SearchFilterPrice />

            <SearchFilterVersion />
          </div>

          <SearchActions />
        </form>
      </section>

      <VehiclesList />
    </section>
  );
}
