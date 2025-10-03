import css from './Our-services.module.css';

export default function OurServices() {
  return (
    <section id="services" className={css.servicesSection}>
      <h3 className={css.title}>Our Services</h3>
      <h2 className={css.mainTitle}>Comprehensive solutions for your business</h2>
      <div>
        <ul className={css.servicesList}>
          <li className={css.servicesItem}>
            <h2 className={css.itemTitle}>Design Studio</h2>
            <p className={css.itemText}>
              We create a strong visual identity: branding, UI/UX design, and graphics that help
              your business stand out.
            </p>
            <img
              src="/public/img/our-services/figma.jpg"
              srcSet="/public/img/our-services/figma@2x.jpg 2x"
              alt="Design Studio"
              className={css.itemImg}
            />
          </li>
          <li className={css.servicesItem}>
            <h2 className={css.itemTitle}>Web Development</h2>
            <p className={css.itemText}>
              We develop modern websites and web applications that are fast, user-friendly, and
              responsive to any device.
            </p>
            <img
              src="/public/img/our-services/coding.jpg"
              srcSet="/public/img/our-services/coding@2x.jpg 2x"
              alt="Web Development"
              className={css.itemImg}
            />
          </li>
          <li className={css.servicesItem}>
            <h2 className={css.itemTitle}>Marketing</h2>
            <p className={css.itemText}>
              We launch marketing campaigns, manage SMM, and SEO to ensure your business is found by
              customers and grows steadily.
            </p>
            <img
              src="/public/img/our-services/marketing.jpg"
              srcSet="/public/img/our-services/marketing@2x.jpg 2x"
              alt="Marketing"
              className={css.itemImg}
            />
          </li>
        </ul>
      </div>
      <div>
        <ul className={css.servicesFeaturesList}>
          <li className={css.servicesFeaturesListItem}>
            <p className={css.servicesFeaturesListText}>UX/UI design</p>
          </li>
          <li className={css.servicesFeaturesListItem}>
            <p className={css.servicesFeaturesListText}>AI Solutions</p>
          </li>
          <li className={css.servicesFeaturesListItem}>
            <p className={css.servicesFeaturesListText}>Technical Support</p>
          </li>
          <li className={css.servicesFeaturesListItem}>
            <p className={css.servicesFeaturesListText}>SEO Optimization</p>
          </li>
          <li className={css.servicesFeaturesListItem}>
            <p className={css.servicesFeaturesListText}>Website Maintenance</p>
          </li>
          <li className={css.servicesFeaturesListItem}>
            <p className={css.servicesFeaturesListText}>Domain and Hosting</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
