import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ObtenerConstructoras = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la petición GET a la API local
    axios.get('https://localhost:7095/Constructora')
      .then(response => {
        setData(response.data); // Guardar los datos de la respuesta en el estado
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
    <div className="card bg-dark text-white">
      <div className="card-header bg-primary">
        <h2 className="text-center">Constructoras</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID Constructora</th>
              <th>Razón Social</th>
              <th>Representante</th>
              <th>Contacto</th>
              <th>Estado</th>
              <th>Dirección</th>
              <th>Código Postal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((constructora, index) => (
              <tr key={index}>
                <td>{constructora.id_constructora}</td>
                <td>{constructora.razon_social}</td>
                <td>{constructora.representante}</td>
                <td>{constructora.contacto}</td>
                <td>{constructora.estado}</td>
                <td>{constructora.direccion}</td>
                <td>{constructora.codigo_postal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
}

export default ObtenerConstructoras