import './App.css';
import Hero from './component/Hero';
import Mission from './component/Mission';
import Services from './component/Services';
import About from './component/About';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <div className=''>
        <Hero />

        {/* You can link to this by href="#about" */}
        <section id="about">
          <Mission /> 
        </section>

        {/* You can link to this by href="#services" */}
        <section id="services">
          <Services />
        </section>

        {/* You can link to this by href="#bookings" */}
        <section id="bookings">
         <About />{/* assuming Mission = bookings section */}
        </section>

        {/* Footer will be your Contact section */}
        <section id="contact">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
