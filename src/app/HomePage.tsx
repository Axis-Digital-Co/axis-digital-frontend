import hp from './HomePage.module.css';
import Hero from '../components/Hero/Hero';
import OurServices from '../components/Our-services/Our-services';
import HowWeWork from '../components/How-we-work/How-we-work';

export default function HomePage() {
  return (
    <div className={hp.container}>
      <Hero />
      <OurServices />
      <HowWeWork />
    </div>
  );
}
