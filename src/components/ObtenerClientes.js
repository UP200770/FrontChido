import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ObtenerClientes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la petición GET a la API local
    axios.get('https://localhost:7095/Cliente')
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
      <h2>Clientes</h2>
    </div>
    <div className="card-body">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>idCliente</th>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Género</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.idCliente}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.apellidoPaterno}</td>
              <td>{cliente.apellidoMaterno}</td>
              <td>{cliente.genero}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
}

export default ObtenerClientes