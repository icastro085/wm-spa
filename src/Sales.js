import React, { useState, useRef, useEffect } from 'react';
import useGeoLocation from './hooks/useGeoLocation';

// const baseData = {

// };

export default function Sales() {
  const { location: { state, city } } = useGeoLocation();
  const locationPlaceholder = state ? `${city} - ${state}` : null;
  const [image, setImage] = useState();
  const element = useRef();

  useEffect(() => {
    const el = element.current;
    el.addEventListener('change', (ef) => {
      const fileList = ef.target.files;
      const [file] = fileList;

      const reader = new FileReader();
      reader.addEventListener('load', (er) => {
        setImage(er.target.result);
      });
      reader.readAsDataURL(file);
    });
  }, []);

  return (
    <section className="search-container">
      <h2>Cadastro do Carro</h2>
      <hr />
      <div className="form-container">
        <form>
          <div className="row">
            <div className="image-container col-6 col-12-sm">
              {
                image
                  ? <img src={image} alt="Carro" />
                  : <i className="fas fa-image" />
              }
              <input ref={element} type="file" />
            </div>
          </div>

          <div className="row">
            <div className="col-3 col-6-sm col-12-smx">
              <div className="field">
                <label>Marca:</label>
                <input type="text" placeholder="Ex: Honda" />
              </div>
            </div>

            <div className="col-3 col-6-sm col-12-smx">
              <div className="field">
                <label>Modelo:</label>
                <input type="text" placeholder="Ex: City" />
              </div>
            </div>

            <div className="col-6 col-12-sm col-12-smx">
              <div className="field">
                <label>Versão:</label>
                <input type="text" placeholder="Ex: 1.5 DX 16V FLEX 4P AUTOMÁTICO" />
              </div>
            </div>

            <div className="col-3 col-6-sm col-12-smx">
              <div className="field">
                <label>Cor:</label>
                <input type="text" placeholder="Ex: Azul" />
              </div>
            </div>

            <div className="col-3 col-6-sm col-12-smx">
              <div className="field">
                <label>KM:</label>
                <input type="text" placeholder="Ex: 100km" />
              </div>
            </div>

            <div className="col-3 col-6-sm col-12-smx">
              <div className="field">
                <label>Anor Fabricação:</label>
                <input type="number" className="text-right" placeholder="Ex: 1999" />
              </div>
            </div>

            <div className="col-3 col-6-sm col-12-smx">
              <div className="field">
                <label>Anor Modelo:</label>
                <input type="number" className="text-right" placeholder="Ex: 1999" />
              </div>
            </div>

            <div className="col-12 col-12-sm col-12-smx">
              <div className="field">
                <label>Onde:</label>
                <input type="text" placeholder={`Ex: ${locationPlaceholder}`} />
              </div>
            </div>
          </div>

          <div className="row-fluid my-5">
            <button type="button" className="btn">Cadastar</button>
          </div>
        </form>
      </div>
    </section>
  );
}
