import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

class WindTurbine extends Component {
    render () {
      return (
        <BrowserRouter className="WindTurbine_container">
          <div class="cover-container flex-column">
            <header class="mb-auto">  
              <div>
                <Header />
              </div>
            </header>

            <main class="align-items-center">
              <div >
                <Content />
              </div>
            </main>

            <footer class="mt-auto text-white-50">
              <div>
                <Footer />
              </div>
              </footer>
          </div>
        </BrowserRouter>
      )
    }
  }

export default WindTurbine;

if (document.getElementById('WindTurbineContent')) {
    ReactDOM.render(<WindTurbine />, document.getElementById('WindTurbineContent'));
}
