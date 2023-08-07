import React, { useState } from 'react';
import axios from 'axios';

const BuscarActualizarEliminarCasa = () => {
  const [idCasa, setIdCasa] = useState('');
  const [tipo, setTipo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ancho, setAncho] = useState('');
  const [largo, setLargo] = useState('');
  const [actualizacionExitosa, setActualizacionExitosa] = useState(false);
  const [eliminacionExitosa, setEliminacionExitosa] = useState(false); 

  const handleIdCasaChange = (event) => {
    setIdCasa(event.target.value);
  };

  const buscarCasa = () => {
    axios.get(`https://localhost:7095/Casa/BuscarCasa?idCasa=${idCasa}`)
      .then(response => {
        const casa = response.data;
        setTipo(casa.tipo);
        setDireccion(casa.direccion);
        setAncho(casa.ancho);
        setLargo(casa.largo);
      })
      .catch(error => {
        console.error('Error al obtener datos de la casa:', error);
        setTipo('');
        setDireccion('');
        setAncho('');
        setLargo('');
      });
  };

  const actualizarCasa = () => {
    const datosActualizados = {
      idCasa,
      tipo,
      direccion,
      ancho,
      largo
    };
  
    axios.put(`https://localhost:7095/Casa/ActualizarCasa`, datosActualizados)
      .then(response => {
        setActualizacionExitosa(true);
      })
      .catch(error => {
        console.error('Error al actualizar datos de la casa:', error);
        setActualizacionExitosa(false);
      });
  };

  const eliminarCasa = () => {
    axios.delete(`https://localhost:7095/Casa/EliminarCasa?idCasa=${idCasa}`)
      .then(response => {
        setEliminacionExitosa(true);
        // Limpiar los campos después de eliminar el vendedor
        setTipo('');
        setDireccion('');
        setAncho('');
        setLargo('');
      })
      .catch(error => {
        console.error('Error al eliminar la casa:', error);
        setEliminacionExitosa(false);
      });
  };

  return (
    <div className="container mt-5">
  <div className="card bg-dark text-white">
    <div className="card-header bg-primary">
      <h2 className="text-center">Buscar, actualizar o eliminar Casa</h2>
    </div>
    <div className="card-body">
      <div className="mb-3">
        <label htmlFor="idCasa" className="form-label">ID de la Casa:</label>
        <input type="text" className="form-control bg-secondary text-white" id="idCasa" value={idCasa} onChange={handleIdCasaChange} />
        <button className="btn btn-primary mt-2" onClick={buscarCasa}>Buscar</button>
      </div>

      {tipo && (
        <div>
          <h3>Casa encontrada</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="tipo" className="form-label">Tipo:</label>
              <input type="text" className="form-control bg-secondary text-white" id="tipo" value={tipo} onChange={e => setTipo(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">Dirección:</label>
              <input type="text" className="form-control bg-secondary text-white" id="direccion" value={direccion} onChange={e => setDireccion(e.target.value)} />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="ancho" className="form-label">Ancho:</label>
                <input type="text" className="form-control bg-secondary text-white" id="ancho" value={ancho} onChange={e => setAncho(e.target.value)} />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="largo" className="form-label">Largo:</label>
                <input type="text" className="form-control bg-secondary text-white" id="largo" value={largo} onChange={e => setLargo(e.target.value)} />
              </div>
            </div>
            <button className="btn btn-success me-2" onClick={actualizarCasa}>Actualizar</button>
            {actualizacionExitosa && <p className="text-success">¡Los datos de la casa se actualizaron con éxito!</p>}
            <button className="btn btn-danger" onClick={eliminarCasa}>Eliminar</button>
            {eliminacionExitosa && <p className="text-success">¡La casa ha sido eliminada con éxito!</p>}
          </form>
        </div>
      )}
    </div>
  </div>
</div>
  )}


export default BuscarActualizarEliminarCasa