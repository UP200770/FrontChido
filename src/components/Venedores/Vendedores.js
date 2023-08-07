import React from 'react'
import AgregarVendedor from '../AgregarVendedor'
import ObtenerVendedores from '../ObtenerVendedores'
import BuscarVendedor from '../BuscarActualizarEliminarVendedor'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Vendedores = () => {
  return (
    <>
    <Header/>
    <AgregarVendedor/>
    <ObtenerVendedores/>
    <BuscarVendedor/>
    <Footer/>
    </>
  )
}

export default Vendedores