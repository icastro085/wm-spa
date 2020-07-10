import React from 'react';

import { Checkbox } from './Form';
import SearchNav from './SearchNav';
import SearchActions from './SearchActions';
import VehiclesList from './VehiclesList';
import SearchFilterMake from './SearchFilterMake';
import SearchFilterModel from './SearchFilterModel';

export default function Search() {
  return (
    <section className="search-container">
      <SearchNav />

      <section className="filter-container">
        <form>
          <div className="row">
            <div className="col-2">
              <Checkbox label="Novo" value="new" />
            </div>
            <div className="col-2">
              <Checkbox label="Usado" value="used" />
            </div>
          </div>

          <div className="row">
            <div className="col-6 group">
              <div className="field">
                <label className="where">
                  <i className="fas fa-map-marker-alt" />
                  Onde:
                </label>
                <input type="text" />
              </div>

              <div className="field input-radius">
                <label>Raio:</label>
                <select>
                  <option>100km</option>
                </select>
              </div>
            </div>

            <SearchFilterMake />

            <SearchFilterModel />
          </div>

          <div className="row">
            <div className="col-3">
              <div className="field">
                <label>Ano Desejado:</label>
                <select>
                  <option>100km</option>
                </select>
              </div>
            </div>

            <div className="col-3">
              <div className="field">
                <label>Faixa de preço:</label>
                <select>
                  <option>100km</option>
                </select>
              </div>
            </div>

            <div className="col-6">
              <div className="field">
                <label>Versão:</label>
                <select>
                  <option>100km</option>
                </select>
              </div>
            </div>
          </div>

          <SearchActions />
        </form>
      </section>

      <VehiclesList />
    </section>
  );
}
