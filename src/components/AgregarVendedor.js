import React, { useState } from 'react';
import axios from 'axios';

const AgregarVendedor = () => {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [genero, setGenero] = useState('');
  const [RFC, setRFC] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (event) => {

    // Objeto con los datos del vendedor a enviar
    const vendedorData = {
      nombre: nombre,
      apellidoPaterno: apellidoPaterno,
      apellidoMaterno: apellidoMaterno,
      genero: genero,
      RFC: RFC,
      telefono: telefono,
      email: email
    };

    // Realizar la petición POST a la API para agregar el nuevo vendedor
    axios.post(`https://localhost:7095/Vendedor/AgregarVendedor`, vendedorData)
      .then(response => {
        // Limpiar los campos del formulario después de agregar el vendedor exitosamente
        setNombre('');
        setApellidoPaterno('');
        setApellidoMaterno('');
        setGenero('');
        setRFC('');
        setTelefono('');
        setEmail('');

        console.log('Vendedor agregado:', response.data);
      })
      .catch(error => {
        console.error('Error al agregar vendedor:', error);
      });
  };

  return (
    <div className="container mt-5">
  <div className="card bg-dark text-white">
    <div className="card-header bg-primary">
      <h2 className="mb-0">Agregar Vendedor</h2>
    </div>
    <div className="card-body">
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" id="nombre" className="form-control bg-secondary text-white" value={nombre} onChange={(event) => setNombre(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="apellidoPaterno" className="form-label">Apellido Paterno:</label>
          <input type="text" id="apellidoPaterno" className="form-control bg-secondary text-white" value={apellidoPaterno} onChange={(event) => setApellidoPaterno(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="apellidoMaterno" className="form-label">Apellido Materno:</label>
          <input type="text" id="apellidoMaterno" className="form-control bg-secondary text-white" value={apellidoMaterno} onChange={(event) => setApellidoMaterno(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="genero" className="form-label">Género:</label>
          <select id="genero" className="form-control bg-secondary text-white" value={genero} onChange={(event) => setGenero(event.target.value)} required>
            <option value="">Seleccione una opción</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="RFC" className="form-label">RFC:</label>
          <input type="text" id="RFC" className="form-control bg-secondary text-white" value={RFC} onChange={(event) => setRFC(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono:</label>
          <input type="text" id="telefono" className="form-control bg-secondary text-white" value={telefono} onChange={(event) => setTelefono(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" className="form-control bg-secondary text-white" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Agregar</button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
}

export default AgregarVendedor