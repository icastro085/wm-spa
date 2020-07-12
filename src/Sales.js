import React, { useState, useRef, useEffect } from 'react';
import { Select } from './Form';
import useGeoLocation from './hooks/useGeoLocation';
import useMake from './hooks/useMake';
import useModel from './hooks/useModel';
import useVersion from './hooks/useVersion';
import useAlert from './hooks/useAlert';

const baseData = {
  Color: '',
  Image: '',
  KM: 0,
  MakeID: '',
  ModelID: '',
  Price: '',
  VersionID: '',
  YearFab: '',
  YearModel: '',
  Location: '',
};

export default function Sales() {
  const { location: { state, city } } = useGeoLocation();
  const locationPlaceholder = state ? `${city} - ${state}` : null;
  const [image, setImage] = useState();
  const element = useRef();
  const [data, setData] = useState({ ...baseData });

  const { make, getMake } = useMake();
  const { model, getModel, setModel } = useModel();
  const { version, getVersion, setVersion } = useVersion();
  const { setAlert } = useAlert();

  const onChangeField = (field, value) => {
    data[field] = value;
    setData({ ...data });
  };

  const onUpload = (ef) => {
    const fileList = ef.target.files;
    const [file] = fileList;

    const reader = new FileReader();
    reader.addEventListener('load', (er) => {
      setImage(er.target.result);
      onChangeField('Image', er.target.result);
    });
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    getMake();
  }, []);

  useEffect(() => {
    if (data.MakeID) {
      getModel({ MakeID: data.MakeID });
    } else {
      setModel([]);
    }
  }, [data.MakeID]);

  useEffect(() => {
    if (data.ModelID) {
      getVersion({ ModelID: data.ModelID });
    } else {
      setVersion([]);
    }
  }, [data.ModelID]);

  const onSave = () => {
    const cars = JSON.parse(localStorage.getItem('webmotors.cars') || '[]');
    cars.push(data);
    localStorage.setItem('webmotors.cars', JSON.stringify(cars));

    setAlert({ message: 'Cadastro realizado com sucesso!' });
  };

  return (
    <section className="search-container">
      <h2>{__('create.title')}</h2>
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
              <input ref={element} type="file" onChange={onUpload} />
            </div>
          </div>

          <div className="row">
            <div className="col-3 col-6-sm col-12-smx">
              <div className="field">
                <Select
                  onChange={(ID) => onChangeField('MakeID', ID)}
                  value={data.MakeID}
                  items={make}
                  placeholder="Ex: Honda"
                >
                  {__('search.filters.make')}
                </Select>
              </div>
            </div>

            <div className="col-3 col-6-sm col-12-smx">
              <div className="field">
                <Select
                  onChange={(ID) => onChangeField('ModelID', ID)}
                  value={data.ModelID}
                  items={model}
                  placeholder="Ex: City"
                >
                  {__('search.filters.model')}
                </Select>
              </div>
            </div>

            <div className="col-6 col-12-sm col-12-smx">
              <div className="field">
                <Select
                  onChange={(ID) => onChangeField('VersionID', ID)}
                  value={data.VersionID}
                  items={version}
                  placeholder="Ex: 1.0 MPI EL 8V FLEX 4P MANUAL"
                >
                  {__('search.filters.version')}
                </Select>
              </div>
            </div>

            <div className="col-3 col-6-sm col-12-smx">
              <div className="field">
                <label>{__('create.field.color')}</label>
                <input
                  type="text"
                  placeholder="Ex: Azul"
                  onChange={(e) => onChangeField('Color', e.target.value)}
                />
              </div>
            </div>

            <div className="col-3 col-6-sm col-12-smx">
              <div className="field">
                <label>{__('create.field.km')}</label>
                <input
                  type="number"
                  className="text-right"
                  placeholder="Ex: 100000"
                  onChange={(e) => onChangeField('KM', e.target.value)}
                  value={data.KM}
                  min={0}
                />
              </div>
            </div>

            <div className="col-3 col-6-sm col-12-smx">
              <div className="field">
                <label>{__('create.field.year-fab')}</label>
                <input
                  type="number"
                  className="text-right"
                  placeholder="Ex: 1999"
                  onChange={(e) => onChangeField('YearFab', e.target.value)}
                  value={data.YearFab}
                  min={1}
                />
              </div>
            </div>

            <div className="col-3 col-6-sm col-12-smx">
              <div className="field">
                <label>{__('create.field.year-model')}</label>
                <input
                  type="number"
                  className="text-right"
                  placeholder="Ex: 1999"
                  onChange={(e) => onChangeField('YearModel', e.target.value)}
                  value={data.YearModel}
                  min={1}
                />
              </div>
            </div>

            <div className="col-12 col-12-sm col-12-smx">
              <div className="field">
                <label>{__('create.field.location')}</label>
                <input
                  type="text"
                  placeholder={`Ex: ${locationPlaceholder}`}
                  onChange={(e) => onChangeField('Location', e.target.value)}
                  value={data.Location}
                />
              </div>
            </div>
          </div>

          <div className="row-fluid my-5">
            <button type="button" className="btn" onClick={onSave}>
              {__('create.addButton')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
