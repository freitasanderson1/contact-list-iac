import { useState } from 'react';
import { Delete } from "../../../icons";

import { ModalRemoveContato } from "../../modais/ModalRemoveContato";

export function ButtonRemoveContato({contato}){
    const [showModalRemoveContato, setModalRemoveContato] = useState(false);

    const handleCloseModalRemoveContato = () => setModalRemoveContato(false);
    const handleShowModalRemoveContato = () => setModalRemoveContato(true);

    return(
        <>
            <button className='btn btnExcluir' onClick={handleShowModalRemoveContato}> <Delete/> Excluir </button>
            <ModalRemoveContato showDelete={showModalRemoveContato} contact={contato} closeModal={handleCloseModalRemoveContato}/>
        </>
    )
}