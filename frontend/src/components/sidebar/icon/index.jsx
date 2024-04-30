import Icone from '../../../assets/icon.svg'
import './icon.css'
export function Icon(){

    return (
        <>  
        <div className='divIcon' onClick={event =>  window.location.href='/'} style={{cursor:"pointer"}}>
            <img className='svgIcon' src={Icone} alt="Icone Contactus" width={30}/> 
            <span className='ContactusName'>
                Contactus
            </span>
        </div>

        </>
    )
}