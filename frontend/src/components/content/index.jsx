import './content.css'
import { ButtonAddContato } from './actionButtons/ButtonAddContato'
import CallContacts from '../callContacts/index'

export function Content(){
    return(
        <>
            <div className='container'>
                <div className='divTitle'>
                    <h1 className='fs-1'>Sua lista Contactus</h1>
                </div>
                <div className='divSubtitle'>
                    <span className='fs-2'>Contactus cadastrados</span>
                    
                    <ButtonAddContato/>
                </div>

                <CallContacts/>

            </div>
        </>
    )
}