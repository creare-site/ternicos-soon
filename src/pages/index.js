import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SideFooter from '../components/SideFooter';

import img_hero from '../assets/img-custom/hero.jpg';
import img_hero2 from '../assets/img-custom/hero2.jpg';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import { Link } from 'gatsby';

const img_set_1 = [
  {
    src: require('../assets/images/gallery/fulls/01.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/01.jpg').default,
    title: 'Great Sky',
    desc: 'Be one with the Universe',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/02.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/02.jpg').default,
    title: 'High Mountains',
    desc: 'Be one with the mountains',
  },
  {
    src: require('../assets/images/gallery/fulls/03.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/03.jpg').default,
    title: 'Any time ',
    desc: 'Be one with the time',
  }
];
const img_set_2 = [
  {
    src: require('../assets/images/gallery/fulls/05.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/05.jpg').default,
    title: 'Any Curiosity',
    desc: 'Be one with the curiosity',
    full: true,
  },
  {
    src: require('../assets/images/gallery/fulls/06.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/06.jpg').default,
    title: 'Any source of enlightenment',
    desc: 'Be one with the soul',
  },
  {
    src: require('../assets/images/gallery/fulls/07.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/07.jpg').default,
    title: 'Be in present',
    desc: 'Be one with the present',
  },
];
const img_set_3 = [
  {
    src: require('../assets/images/gallery/fulls/08.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/08.jpg').default,
    title: 'Give away',
    desc: 'Be one with the empathy',
  },
  {
    src: require('../assets/images/gallery/fulls/09.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/09.jpg').default,
    title: 'Moment',
    desc: 'Be one with the moment',
  },
  {
    src: require('../assets/images/gallery/fulls/10.jpg').default,
    thumbnail: require('../assets/images/gallery/thumbs/10.jpg').default,
    title: 'Serenity',
    desc: 'Be one with the purity',
    full: true,
  },
];
const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <section className="intro">
        <Header />
        <div className="content">
          <span className="image fill" data-position="center">
            <img src={img_hero} alt="" />
          </span>
        </div>
      </section>

      <section id="first">
        <header>
          <h2>CINE SUNTEM</h2>
        </header>
        <div className="content">
          <p>
          <strong>TernicosConstruct SRL</strong> este o societate cu capital
privat romanesc infiintata in anul 2017, domeniul principal de
activitate il reprezinta restaurarea de monumente istorice si de
patrimoniu, reabilitarea fatadelor exterioare.
          </p>
          <p>
          În functie de situatia regasita, serviciile noastre pot fi
adaptate si va putem ajuta prin confectionarea pieselor dorite în
cazul proiectului dumneavoastra fie ca e vorba de o fatada la
care lucrati, fie ca este vorba de piese particulare distruse pe
care doriti să le înlocuiti
          </p>
          <p>
          Echipa noastra de mesteri poate reconstitui orice fel
de ornament decorativ din ipsos sau beton de pe fatadele sau
din interioarele cladirilor vechi sau de patrimoniu care
sunt avariate din diverse motive.
          </p>
          <span className="image main">
            <img src={img_hero2} alt="" />
          </span>
        </div>
      </section>

      <section>
        <header>
          <h2>
            Servicii
          </h2>
        </header>
        <div className="content">
          <p>
            <strong>Suntem specializați</strong> în reabilitarea fațadelor istorice de orice tip și stil architectural
          </p>
          <ul className="feature-icons">
            <li className="icon fa-info">Reabilitare</li>
            <li className="icon fa-info">Reparatie</li>
            <li className="icon fa-info">Modernizare</li>
            <li className="icon fa-info">Intretinere</li>
          </ul>
          <p>
          Fiind autentici, atât ca execuție cât și ca materiale
folosite, reabilitarea unei fațade istorice executate de
către noi , este produsul cel mai apreciat de către
clienții noștri și nu numai, prin colaborarea cu
societatea noastră aveți posibilitatea de a reda
strălucirea și farmecul inițial al clădirii dumneavoastră
printr-o reabilitare corect executată și de cea mai înaltă
calitate.
          </p>
        </div>
      </section>

      <section>
        <header>
          <h2>
          PORTOFOLIU
          </h2>
        </header>
        <div className="content">
          <p>
            <strong>Din 2017</strong> am reusit sa finalizam proiecte ... etc. 
          </p>

          <section>
            <header>
              <h3>
              ORNAMENTE
              </h3>
              <p>
              ORNAMENTE text ... 
              </p>
            </header>
            <div className="content">
              <Gallery images={img_set_1} />
            </div>
          </section>

          <section>
            <header>
              <h3>
              Braila, Bd. Alexandu Ioan Cuza
              </h3>
              <p>
                Proiect info ... 
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_2} />
              </div>
            </div>
          </section>

          <section>
            <header>
              <h3>
              Braila, str. Teatrului
              </h3>
              <p>
              Proiect info ...
              </p>
            </header>
            <div className="content">
              <div className="gallery">
                <Gallery images={img_set_3} />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section>
        <header>
          <h2>
            Resurse
          </h2>
        </header>
        <div className="content">
          <p>
            <strong>Mai multe informatii</strong> despre proiectele noastre puteti afla in sectiunea <a href="#">blog</a>.
          </p>
          <ul className="actions">
            <li>
              <Link to="#" className="button primary large">
                Blog
              </Link>
            </li>
            { <li>
              <a href="#" className="button large">
                Documentatie
              </a>
            </li> }
          </ul>
        </div>
      </section>

      <section>
        <ContactForm />
        <SideFooter />
      </section>

      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
