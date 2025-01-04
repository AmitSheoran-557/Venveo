import './App.css';
import Hero from './../src/components/Hero'
import Features from './../src/components/Features'
import SatisfiedClient from './../src/components/SatisfiedClient'
import Marketing from './../src/components/Marketing'
import OutSmart from './../src/components/OutSmart'
import GrowthPartner from './../src/components/GrowthPartner'
import ActualResult from './../src/components/ActualResult'
import LearnForm from './../src/components/LearnForm'
import Goals from './../src/components/Goals'
import Footer from './../src/common/Footer'
import BackToTop from './common/BackToTop';

function App() {
  return (
    <>
      <Hero/>
      <Features/>
      <SatisfiedClient />
      <Marketing />
      <OutSmart />
      <GrowthPartner />
      <ActualResult />
      <LearnForm />
      <Goals />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
