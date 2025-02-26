import globe from '../assets/globe.png'
import '../styles/style.css'


export default function Header() {
    return (
        <header>
            <img className='header-globe' src={globe} alt='Globe logo'/>
            <h1 className='header-title'>my travel journal.</h1>
        </header>
    )
}