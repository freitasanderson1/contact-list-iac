import { Delete, CloseIcon } from '../../../icons';
import { apiContacts } from '../../../../services/api'
import ListUpdate  from '../../../callContacts/ListUpdates'

import { useState } from 'react';

import '../modal.css'



export function ModalRemoveContato({showDelete,contact,closeModal}){
    const [id, setId] = useState(contact.id)

    async function deleteContact(){
        await apiContacts.delete(`/${id}`).then((result) => {
            document.querySelector('#mensagemDelete').classList.add("d-none")
            document.querySelector('#mensagemDeleteSuccess').classList.remove("d-none")
        })
    }

    if(showDelete){
        return(
            <>
                <div className='ModalBackdrop'>
                    <div className='Modal' style={{minHeight:"20vh"}}>
                        <div className='ModalHeader'>
                            <span className='fs-2'>Remover Contato</span>
                            <CloseIcon className={'danger'} onClick={(event) => {closeModal, ListUpdate()}}/>
                        </div>
                        <hr />
                        <div className='ModalBody'>
                            <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                                <div id="mensagemDelete" style={{backgroundColor:"#980404",color:"#FFFFFF",fontWeight:"600",padding:"1rem",borderRadius:"8px"}}>
                                    <span>
                                        Deseja remover o contado de {contact.nome}? 
                                        Essa ação é irreversível.
                                    </span>
                                </div>
                                <div className="d-none" id="mensagemDeleteSuccess" style={{backgroundColor:"#980404",color:"#FFFFFF",fontWeight:"600",padding:"1rem",borderRadius:"8px"}}>
                                    <span>
                                        Contato removido.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="ModalFooter" style={{justifyContent:"end"}}>
                            <button className="btn btnExcluir" style={{paddingRight:"1rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}} onClick={deleteContact}>
                                <Delete/>
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            </>        
            
        )
    }else{
        return null
    }
}