import './App.css'

function App() {

  return (
    <div className='App'>
      <div className="navbar">
        <div className='logo'>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
        </div>
        <div className='nav-links'>
          <h1>Sobre Nosotros</h1>
          <h1>Especificaciones</h1>
          <h1>Contacta con Nosotros</h1>
        </div>
      </div>

      <section className="seccion" id='inicio'>
        <div className="info">
          <h1>MedSync</h1>
          <h3>MedSync es una producto dedicado al monitoreo y gestión de la salud de sus usuarios. Nuestras soluciones utilizan herramientas altamente precisas para proporcionar datos exactos y en tiempo real, con el objetivo de mejorar el cuidado de los pacientes.</h3>
        </div>
        <div className='inicioImg'>
          <img src="https://www.clikisalud.net/wp-content/uploads/2018/09/ritmo-card%C3%ADaco.jpg" alt="" />
        </div>
      </section>

      <section className='seccionSNI' id='sobreNosotros'>
        <h1>Sobre Nosotros</h1>
        <div className='sobreNosotrosInfo'>
          <div className='sniP'>
            <h1>Misión</h1>
            <p>Empoderar a los profesionales de la salud y pacientes mediante soluciones IoT que faciliten la monitorización continua, promoviendo un cuidado preventivo y eficiente.</p>
          </div>
          <div className="sniI">
            <img src="https://i.insider.com/62bdc5eaada84d0019b78d79?width=300" alt="" />
          </div>
        </div>
        <div className='sobreNosotrosInfo'>
          <div className="sniI">
            <img src="https://images.ctfassets.net/q2vojxd7ywwe/1a0l1EtYvx74cgTUcWNGfU/1909e77b3e9e688fe15be85dfe070632/medical-workers-front-computer.jpg?fm=jpg&q=85&w=300" alt="" />
          </div>
          <div className='sniP'>
            <h1>Visión</h1>
            <p>Convertirse en el líder global en soluciones médicas IoT, transformando el enfoque del cuidado de la salud con soluciones innovadoras que mejoren la calidad de vida de sus usuarios.</p>
          </div>
        </div>
      </section>

      <section className='seccionESP' id='especificaciones'>
        <h1>Especificaciones</h1>
        <div className='espElementos'>
          <div className='espElementoInd'>
            <h2>ESP32 Devit1</h2>
            <p>Microcontrolador ESP con conexión WiFi y Bluetooth.</p>
            <img src="https://i0.wp.com/www.teslaelectronic.com.pe/wp-content/uploads/2021/09/ESP32-DEVKITC-V4.1.png?fit=1000%2C1000&ssl=1" alt="" />
          </div>
          <div className='espElementoInd'>
            <h2>Sensor de Pulso Cardiaco HW-827</h2>
            <p>Sensor HW-827 utilizado con Arduino para probar la frecuencia cardíaca.</p>
            <img src="https://img.joomcdn.net/ae9a4f3cb02b5f7cfcf7e029f7eda535ff9e0854_original.jpeg" alt="" />
          </div>
          <div className='espElementoInd'>
            <h2>Foco Led</h2>
            <p>Pequeño foco led para indicar el funcionamiento del dispositivo.</p>
            <img src="https://www.prayogindia.in/wp-content/uploads/2018/06/led-5mm-white-prayogindia-600x600.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className='seccionSNI' id='sobreNosotros'>
        <h1>Contacta con Nosotros</h1>
        <div className='contacto'>
          <h2>Para cotizaciones acerca del producto, por favor escribir al correo</h2>
          <h2>medsyncbussines@gmail.com</h2>
        </div>
      </section>

      <div className='footer'>
        <div className='copyright'>
          <h3>© 2024 MedSync. Todos los derechos reservados.</h3>
        </div>
        <div className='socialnetwork'>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="white"  stroke="white"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-twitter"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" /></svg>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
        </div>
      </div>
    </div>
  )
}

export default App
