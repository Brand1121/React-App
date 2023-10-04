import './About.css'
import Brand from '../assets/Brand.png'

const About = () => (
    <div className='containerInf'>
        <img className='imgBrand' src={Brand} alt="img Brand" />
        <h2>Brandon Jiménez Lozano</h2>
        <h2>Edad: 25 años</h2>
        <h2>Correo: brandonjl.1160@gmail.com</h2>
        <a className='botonEnviarCorreo' href = "mailto: brandonjl.1160@gmail.com">Send Email</a>
        <p>Hola, me esta gustando mas la programacion, aprendo muchas cosas
            y despierta mas mi interes sobre el aprendizaje sobre IT y Aspiro a trabajar en un
            entorno que fomente la innovación y el aprendizaje continuo, donde pueda
            colaborar con otros profesionales creativos y seguir perfeccionando mis
            habilidades en el desarrollo web.
        </p>

    </div>

)

export default About;