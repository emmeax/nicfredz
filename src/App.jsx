import './App.css';
import Hero from './component/Hero';
import Mission from './component/Mission';
import Services from './component/Services';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import FAQ from './component/FAQ'
// import NavBar from './component/NavBar'

function App() {
  return (
    <>
      <div className=''>
        {/* <NavBar/> */}
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

        <section id="">
         <FAQ />
        </section>

        {/* Footer will be your Contact section */}
        <section id="contact">
          <Contact />
        </section>

        <section id="">
          <Footer />
        </section>

      </div>
    </>
  );
}

export default App;
