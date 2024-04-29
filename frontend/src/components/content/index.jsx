import './content.css'
import { ListaContatos } from './listacontatos'
import { ButtonAddContato } from './actionButtons/ButtonAddContato'

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
                <ListaContatos/>
            </div>
        </>
    )
}