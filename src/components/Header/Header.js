import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg rounded navbar bg-white border mb-4 container-fluid shadow ">
    <div className="container">
      <a className="navbar-brand " href="/">Inmobiliaria</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <a className="nav-link text-primary" href="/vendedores">Vendedores</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary" href="/casas">Casas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary" href="/constructoras">Constructoras</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-primary" href="/clientes">Clientes</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header