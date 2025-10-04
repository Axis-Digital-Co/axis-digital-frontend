import hp from './HomePage.module.css';
import Hero from '../components/Hero/Hero';
import OurServices from '../components/Our-services/Our-services';

export default function HomePage() {
  return (
    <div className={hp.container}>
      <Hero />
      <OurServices />
    </div>
  );
}
