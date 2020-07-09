import React from 'react';

import { Checkbox } from './Form';
import SearchNav from './SearchNav';

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
            <div className="col-8 group">
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

            <div className="col-4">
              <div className="field">
                <label>Marca:</label>
                <select>
                  <option>100km</option>
                </select>
              </div>
            </div>

            <div className="col-4">
              <div className="field">
                <label>Modelo:</label>
                <select>
                  <option>100km</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <div className="field">
                <label>Ano Desejado:</label>
                <select>
                  <option>100km</option>
                </select>
              </div>
            </div>

            <div className="col-4">
              <div className="field">
                <label>Faixa de preço:</label>
                <select>
                  <option>100km</option>
                </select>
              </div>
            </div>

            <div className="col-8">
              <div className="field">
                <label>Versão:</label>
                <select>
                  <option>100km</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-8">
              <button type="button" className="advanced-search-button">
                <i className="fas fa-chevron-right" />
                Busca Avançada
              </button>
            </div>

            <div className="col-2">
              <button type="button" className="clear-filters">
                Limpar filtros
              </button>
            </div>

            <div className="col-6">
              <button type="button" className="show-offers">
                VER OFERTAS
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
}
