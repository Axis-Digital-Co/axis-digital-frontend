import he from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={he.hero}>
      <h1 className={he.title}>
        Bringing your <br /> dream into <span className={he.spanT}>reality</span>
      </h1>
      <p className={he.text}>
        A small team with a big passion for web development. We craft responsive user-friendly
        websites that bring ideas to life.
      </p>
      <button className={he.btn}>Book A Meeting</button>
    </section>
  );
}
