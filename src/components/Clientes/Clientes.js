import React from 'react'
import AgregarCliente from '../AgregarCliente'
import ObtenerClientes from '../ObtenerClientes'
import BuscarCliente from '../BuscarActualizarEliminarCliente'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Clientes = () => {
  return (
    <>
        <Header/>
        <AgregarCliente/>
        <ObtenerClientes/>
        <BuscarCliente/>
        <Footer/>
    </>
  )
}

export default Clientes