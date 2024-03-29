import React from "react";
import Contact from "../Component/Contact";
import logo from '../assets/img/logo.png';
import hero from '../assets/img/hero-img.png';
import about from '../assets/img/about.jpg';
import values1 from '../assets/img/values-1.png';
import values2 from '../assets/img/values-2.png';
import values3 from '../assets/img/values-3.png';


const Home = () => {

  return (
    <>

      <header id="header" className="header fixed-top bg-white">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

          <a className="logo d-flex align-items-center">
            <img src={logo} />
            <span>FlexStart</span>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a className="nav-link scrollto" href="../login">Login</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </header>

      <section id="hero" className="hero d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">We offer modern solutions for growing your business</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={hero} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

      </section>

      <main id="main">
        <section id="about" className="about">

          <div className="container" data-aos="fade-up">
            <div className="row gx-0">

              <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div className="content">
                  <h3>Who We Are</h3>
                  <h2>Expedita voluptas omnis cupiditate totam eveniet nobis sint iste. Dolores est repellat corrupti reprehenderit.</h2>
                  <p>
                    Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt et. Inventore et et dolor consequatur itaque ut voluptate sed et. Magnam nam ipsum tenetur suscipit voluptatum nam et est corrupti.
                  </p>
                  <div className="text-center text-lg-start">
                    <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <img src={about} className="img-fluid" alt="" />
              </div>

            </div>
          </div>

        </section>

        <section id="values" className="values">

          <div className="container" data-aos="fade-up">

            <header className="section-header">
              <h2>Our Values</h2>
              <p>Odit est perspiciatis laborum et dicta</p>
            </header>

            <div className="row">

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="box">
                  <img src={values1} className="img-fluid" alt="" />
                  <h3>Ad cupiditate sed est odio</h3>
                  <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                </div>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                <div className="box">
                  <img src={values2} className="img-fluid" alt="" />
                  <h3>Voluptatem voluptatum alias</h3>
                  <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
                </div>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                <div className="box">
                  <img src={values3} className="img-fluid" alt="" />
                  <h3>Fugit cupiditate alias nobis.</h3>
                  <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
                </div>
              </div>

            </div>

          </div>

        </section>

  <Contact />

      </main>

    </>
  )
}

export default Home;