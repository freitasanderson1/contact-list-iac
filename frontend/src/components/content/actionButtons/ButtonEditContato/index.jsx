import { useState } from 'react';
import { UserEdit } from '../../../icons'

import { ModalEditContato } from '../../modais/ModalEditContato'

export function ButtonEditContato({contato}){

    const [showModalEditContato, setModalEditContato] = useState(false);

    const handleCloseModalEditContato = () => setModalEditContato(false);
    const handleShowModalEditContato = () => setModalEditContato(true);

    return(
        <>
            <button className='btn btnEditar' onClick={handleShowModalEditContato}> <UserEdit/> Editar </button>
            <ModalEditContato showEdit={showModalEditContato} contact={contato} closeModal={handleCloseModalEditContato}/>
        </>
    
    )
}