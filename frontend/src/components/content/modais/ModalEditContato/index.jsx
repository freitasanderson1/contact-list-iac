import '../modal.css'

import ReactDOM from 'react-dom/client'

import { CloseIcon, ImageUploadIcon, UserAdd } from '../../../icons';
import { useState } from 'react';
import { apiContacts } from '../../../../services/api'
import ListUpdate  from '../../../callContacts/ListUpdates'

async function editContactPost(){

    if(!(document.querySelector('#edit_telefone').value.length < 15) && (document.querySelector('#edit_email').value.includes('@'))){
  
        const data = new FormData();

        data.append("nome", document.querySelector('#edit_nome').value)
        data.append("email", document.querySelector('#edit_email').value)
        data.append("celular", document.querySelector('#edit_telefone').value.replace(' ','').replace('(','').replace(')','').replace('-','').replace(' ',''))
        data.append("imagem", document.querySelector('#edit_imagem').files[0])
        data.append("dataNascimento", document.querySelector('#edit_dataNascimento').value)
        
        var msg = document.querySelector('#msg')
        var htmlMsg = ReactDOM.createRoot(msg)
        
        var id = document.querySelector('#idContatoEditar').value

        await apiContacts.patch(
            `/${id}`,
            data,
            {headers: 
                {
                    "content-type": "multipart/form-data"
                }
            }
        ).then((result) =>{
            console.log(result.status,result.statusText)
            if(result.status==201){
                
                
                htmlMsg.render(
                    <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                        <div style={{backgroundColor:"#01ee7f",color:"#FFFFFF",fontWeight:"600",paddingInline:"10rem",paddingTop:"1rem",paddingBottom:"1rem",borderRadius:"8px"}}>
                            <span>Contactus Editado</span>
                        </div>
                    </div>
                )
            }
        }).catch((err)=>{
            if(err.response.status == 400){
                htmlMsg.render(
                    <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                        <div style={{backgroundColor:"#980404",color:"#FFFFFF",fontWeight:"600",paddingInline:"10rem",paddingTop:"1rem",paddingBottom:"1rem",borderRadius:"8px"}}>
                            <span>Contactus com este Email ou Número já existente</span>
                        </div>
                    </div>
                )
            }
            return null
        })
        ListUpdate()
    }

}

const handleSubmitEditContact = async (event) => {
    event.preventDefault();
    await editContactPost();
};

function formatNumber(number){    
    var input = ''
    input = number.replace(/[a-zA-Z]/g, '')
    input = input.replace(/\D/g, '')

    var formattedInput = '';

    if (input.length > 10) {
        formattedInput = '(' + number.substring(0, 2);
        if (number.length > 2) {
            formattedInput += ') ' + number.substring(2, 3) + ' ' + number.substring(3, 7);
            if (number.length > 7) {
                formattedInput += '-' + number.substring(7, 11);
            }
        }
        return formattedInput
    }
    return input

}
export function ModalEditContato({showEdit,contact,closeModal}){
    const [id, setId] = useState(contact.id)
    const [file, setFile] = useState(contact.imagem);
    const [nome, setNome] = useState(contact.nome)
    const [email, setEmail] = useState(contact.email)
    const [telefone, setTelefone] = useState(formatNumber(contact.celular))
    const [dataNascimento, setDataNascimento] = useState(contact.dataNascimento)

    function handleChange(e) {
        if(e.target.name == 'edit_imagem'){
            setFile(URL.createObjectURL(e.target.files[0]));
        }
        else if(e.target.name == 'edit_nome'){
            setNome(e.target.value)
        }
        else if(e.target.name == 'edit_dataNascimento'){
            setDataNascimento(e.target.value)
        } 
        else if(e.target.name == 'edit_email'){
            if(!e.target.value.includes('@')){
                document.querySelector(`#${e.target.id}_helpText`).classList.remove('d-none')
            }
            else{
                document.querySelector(`#${e.target.id}_helpText`).classList.add('d-none')
            }
            setEmail(e.target.value)
        } 
        else if(e.target.name == 'edit_telefone'){
            

            document.querySelector(`#${e.target.id}_helpText`).classList.add('d-none')

            setTelefone(formatNumber(e.target.value))
        }
    }

    if(showEdit){
        
        return (
            <>
                <div className='ModalBackdrop'>
                    <div className='Modal'>
                        <div className='ModalHeader'>
                            <span className='fs-2'>Editando Contato - {contact.nome}</span>
                            <CloseIcon className={'danger'} onClick={closeModal}/>
                        </div>
                        <hr />
                        <div className='ModalBody'>
                            <div id="msg">
                                
                            </div>
                            <input id="idContatoEditar" type="hidden" value={id}/>
                            <form onSubmit={handleSubmitEditContact}>
                                <div className="formAddContato">
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <div className="divInput">
                                            <span className="labelForm">Nome:</span>
                                            <input id="edit_nome" name="edit_nome" value={nome} onChange={(e) => handleChange(e)} className="formControl" placeholder="Fulano da Silva" type="text" required />
                                        </div>
                                        <small id="edit_nome_helpText" className='d-none helpText'>Por favor, insira um Nome.</small>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <div className="divInput">
                                            <span className="labelForm">Email:</span>
                                            <input id="edit_email" name="edit_email" value={email} onChange={(e) => handleChange(e)} className="formControl" placeholder="fulano@mail.com" style={{margin:"0 1rem 0 0"}} type="email" required />
                                        </div>
                                        <small id="edit_email_helpText" className='d-none helpText'>Por favor insira um email válido</small>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <div className="divInput">
                                            <span className="labelForm">Telefone:</span>
                                            <input id="edit_telefone" name="edit_telefone" value={telefone} maxLength={16} onChange={(e) => handleChange(e)} className="formControl" placeholder="(63) 94002-8922" style={{width:"100%"}} type="text" required />
                                        </div>
                                        <small className='helpText'>Somente números</small>
                                        <small id="edit_telefone_helpText" className='d-none helpText'>Por favor insira um telefone válido</small>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <div className="divInput">
                                            <span className="labelForm" style={{width:"75%"}}>Data de Nascimento:</span>
                                            <input id="edit_dataNascimento" name="edit_dataNascimento" value={dataNascimento} onChange={(e) => handleChange(e)} className="formControl" style={{width:"75%", margin:"0 1rem 0 0"}} type="date" required />
                                        </div>
                                        <small id="edit_dataNascimento_helpText" className='d-none helpText'>Por favor insira uma data de nascimento</small>
                                    </div>
                                    
                                    <div className="fotoDiv">
                                        <span className="labelForm" style={{width:"15%",marginRight:"0"}}>Foto:</span>
                                        <input id="edit_imagem" onChange={(e) => handleChange(e)} name="edit_imagem" type="file" hidden/>
                                        <label htmlFor="edit_imagem" className="btn btnUpload">
                                            <ImageUploadIcon/>
                                            Selecionar Imagem
                                        </label>
                                        <small id="edit_imagem_helpText" className='d-none helpText' style={{marginLeft:"18rem"}}>Por favor, selecione uma imagem</small>
                                        <small style={{marginInline:"auto",marginTop:"1rem", marginBottom:"1rem"}}>Prévia Imagem</small>
                                        <img className="imagePreview" src={file} />
                                    </div>


                                </div>
                                <div className="ModalFooter">
                                    <button className="btn btnExcluir" style={{paddingRight:"1rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}} onClick={closeModal}>
                                        <CloseIcon/>
                                        Cancelar
                                    </button>

                                    <button type="submit" className="btn btnAdicionar" style={{paddingInline:"1rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}}>
                                        <UserAdd/>
                                        Salvar Contactus
                                    </button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </>
        );
    }else{
        return null
    }
}