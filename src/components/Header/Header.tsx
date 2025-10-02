import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import h from'./Header.module.css';


export default function Header () { 
    return (
        <header className={h.container}>
            <h1 className={h.title}><RouterLink to="/" className={h.link}>Axis digital</RouterLink></h1>
            <nav className={h.nav}>
                <ul className={h.list}>
                    <li className={h.item}>
                        <RouterLink to="/" className={h.link}>Home</RouterLink>
                    </li> 
                    <li className={h.item}>
                        <ScrollLink to="services" smooth={true} duration={500} offset={-50} className={h.link}>Services</ScrollLink>
                    </li>
                    <li className={h.item}>
                        <ScrollLink to="how-we-work" smooth={true} duration={500} offset={-50} className={h.link}>How We Work</ScrollLink>
                    </li>
                    <li className={h.item}>
                        <ScrollLink to="portfolio" smooth={true} duration={500} offset={-50} className={h.link}>Portfolio</ScrollLink>
                    </li>
                    <li className={h.item}>
                        <RouterLink to="/price" className={h.link}>Price</RouterLink>
                    </li>
                    <li className={h.item}>
                        <ScrollLink to="portfolio" smooth={true} duration={500} offset={-50} className={h.link}>FAQ</ScrollLink>
                    </li>
                </ul>
            </nav>

            <button className={h.btn}>Get Started</button>
        </header>
    )
}