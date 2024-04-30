import { useState } from 'react';
import { ModalAddContato } from '../../modais/ModalAddContato'
import { UserAdd } from '../../../icons'

export function ButtonEditContato(){

    const [showModalAddContato, setModalAddContato] = useState(false);

    const handleCloseModalAddContato = () => setModalAddContato(false);
    const handleShowModalAddContato = () => setModalAddContato(true);

    return(
        <>
            <button className='btn btnAdicionar' onClick={handleShowModalAddContato}><UserAdd/>Novo Contactus</button>
            <ModalAddContato show={showModalAddContato} closeModal={handleCloseModalAddContato}/>
        </>
    
    )
}