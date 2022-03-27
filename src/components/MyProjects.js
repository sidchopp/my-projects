
// Components
import Footer from './Footer';
// import Header from './Header';
import HeroUnit from './HeroUnit';
import ScrollToTop from './ScrollToTop';
import ProjectsCards from './ProjectsCards';

function MyProjects() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <HeroUnit />
        <ScrollToTop />
        <ProjectsCards />
      </main>
      <Footer />
    </ >
  );
}

export default MyProjects;