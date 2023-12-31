import React, { useState } from 'react';
import axios from 'axios';

const AgregarCasa = () => {
  const [tipo, setTipo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ancho, setAncho] = useState('');
  const [largo, setLargo] = useState('');

  const handleFormSubmit = (event) => {

    // Objeto con los datos del vendedor a enviar
    const casaData = {
      tipo: tipo,
      direccion: direccion,
      ancho: ancho,
      largo: largo
    };

    // Realizar la petición POST a la API para agregar el nuevo vendedor
    axios.post(`https://localhost:7095/Casa/AgregarCasa`, casaData)
      .then(response => {
        // Limpiar los campos del formulario después de agregar el vendedor exitosamente
        setTipo('');
        setDireccion('');
        setAncho('');
        setLargo('');

        console.log('Casa agregada:', response.data);
      })
      .catch(error => {
        console.error('Error al agregar casa:', error);
      });
  };

  return (
    <div className="container mt-5">
    <div className="card bg-dark text-white">
      <div className="card-header bg-primary">
        <h2 className="mb-0">Agregar Casa</h2>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="tipo" className="form-label">Tipo:</label>
            <input type="text" id="tipo" className="form-control bg-secondary text-white" value={tipo} onChange={(event) => setTipo(event.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">Dirección:</label>
            <input type="text" id="direccion" className="form-control bg-secondary text-white" value={direccion} onChange={(event) => setDireccion(event.target.value)} required />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="ancho" className="form-label">Ancho:</label>
              <input type="text" id="ancho" className="form-control bg-secondary text-white" value={ancho} onChange={(event) => setAncho(event.target.value)} required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="largo" className="form-label">Largo:</label>
              <input type="text" id="largo" className="form-control bg-secondary text-white" value={largo} onChange={(event) => setLargo(event.target.value)} required />
            </div>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default AgregarCasa