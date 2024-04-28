import './content.css'
import { ListaContatos } from './listacontatos'
import { UserAdd } from '../icons'

export function Content(){

    return(
        <>
            <div className='container'>
                <div className='divTitle'>
                    <h1 className='fs-1'>Sua lista Contactus</h1>
                </div>
                <div className='divSubtitle'>
                    <span className='fs-2'>Contactus cadastrados</span>
                    <div>
                        <button className='btn btnAdicionar'><UserAdd/>Novo Contactus</button>
                    </div>
                </div>
                <ListaContatos/>
            </div>
        </>
    )
}