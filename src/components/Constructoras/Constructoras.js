import React from 'react'
import AgregarConstructora from '../AgregarConstructora'
import ObtenerConstructoras from '../ObtenerConstructoras'
import BuscarConstructora from '../BuscarActualizarEliminarConstructora'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Constructoras = () => {
  return (
    <>
        <Header/>
        <AgregarConstructora/>
        <ObtenerConstructoras/>
        <BuscarConstructora/>
        <Footer/>
    </>
  )
}

export default Constructoras