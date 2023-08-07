import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-dark text-light">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4">
                <h4>Contacto</h4>
                <p>Dirección: Calle Principal #123, Ciudad</p>
                <p>Teléfono: (123) 456-7890</p>
                <p>Email: info@inmobiliaria.com</p>
              </div>
              <div className="col-md-4">
                <h4>Síguenos en redes sociales</h4>
                <div className="social-icons">
                  <a href="" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-light me-3"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              <div className="col-md-4">
                <h4>Horario de atención</h4>
                <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 1:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
          <div className="bg-secondary py-2 text-center">
            <p className="m-0">&copy; 2023 Inmobiliaria. Todos los derechos reservados.</p>
          </div>
        </footer>
      );
    };
    
    export default Footer;