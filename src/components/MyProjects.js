import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

// Components
import Footer from './Footer';
// import Header from './Header';
import HeroUnit from './HeroUnit';
import ScrollToTop from './ScrollToTop';
import ProjectsCards from './ProjectsCards';

function MyProjects() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Header /> */}
      <main>
        <HeroUnit />
        <ScrollToTop />
        <ProjectsCards />
      </main>
      <Footer />
    </React.Fragment >
  );
}

export default MyProjects;