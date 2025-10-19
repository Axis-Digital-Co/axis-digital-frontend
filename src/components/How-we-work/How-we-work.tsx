import css from './How-we-work.module.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaClipboardList } from 'react-icons/fa';
import { FaPaintBrush } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import HowWeWorkimg from '../../assets/img/how-we-work/how-we-work.jpg';
import HowWeWorkimg2x from '../../assets/img/how-we-work/how-we-work@2x.jpg';

export default function HowWeWork() {
  return (
    <section id="how-we-work" className={css.sectionHowWeWork}>
      <div className={css.howWeWorkWrapper}>
        <div className={css.block}>
          <h3 className={css.sectionTitle}>How we work</h3>
          <h2 className={css.mainTitle}>
            Get a dedicated web studio team at a fraction of the cost
          </h2>
          <div>
            <ul className={css.list}>
              <li className={css.item}>
                <FaClipboardList size={64} color="#7c238c" className={css.icon} />
                <div>
                  <h3 className={css.itemTitle}>1. Planning</h3>
                  <p className={css.itemText}>
                    We analyze your goals, audience, and competitors to create a project roadmap for
                    an efficient launch.
                  </p>
                </div>
              </li>
              <li className={css.item}>
                <FaPaintBrush size={57.5} color="#7c238c" className={css.icon} />
                <div>
                  <h3 className={css.itemTitle}>2. UX/UI Design</h3>
                  <p className={css.itemText}>
                    We craft intuitive designs focused on user experience, adapted for all devices.
                  </p>
                </div>
              </li>
              <li className={css.item}>
                <FaCode size={64} color="#7c238c" className={css.icon} />
                <div>
                  <h3 className={css.itemTitle}>3. Development</h3>
                  <p className={css.itemText}>
                    We code your site using modern technologies (React, Tailwind), ensuring speed
                    and security.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.rightContainer}>
          <img
            src={HowWeWorkimg}
            srcSet={`${HowWeWorkimg} 1x, ${HowWeWorkimg2x} 2x`}
            alt="Marketing"
            className={css.img}
          />
          <ScrollLink to="contactUs" smooth={true} duration={500} offset={-50} className={css.link}>
            Contact Us
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
