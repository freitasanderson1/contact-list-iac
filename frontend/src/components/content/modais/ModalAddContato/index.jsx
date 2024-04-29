import '../modal.css'

import { CloseIcon, ImageUploadIcon, UserAdd } from '../../../icons';
import { useState } from 'react';
import { apiContacts } from '../../../../services/api'

function createNewContactus(){
    document.querySelectorAll('.formAddContato input').forEach((input) => {
        if(input.value=='' || 
            (input.name ==='email' && !input.value.includes('@'))||
            (input.name ==='telefone' && input.value.length< 16)
        ){
            document.querySelector(`#${input.id}_helpText`).classList.remove('d-none')
        }else{
            document.querySelector(`#${input.id}_helpText`).classList.add('d-none')
            newContactPost()
        }
    })
}

async function newContactPost(){
    console.log(document.querySelector('#novo_telefone').value.replace('(','').replace(')','').replace('-','').replace(' ','').replace(' ',''))
    
    const data = new FormData();

    data.append("nome", document.querySelector('#novo_nome').value)
    data.append("email", document.querySelector('#novo_email').value)
    data.append("celular", document.querySelector('#novo_telefone').value.replace(' ','').replace('(','').replace(')','').replace('-','').replace(' ',''))
    data.append("imagem", document.querySelector('#nova_imagem').files[0])
    data.append("dataNascimento", document.querySelector('#novo_dataNascimento').value)
    
    await apiContacts.post(
        '',
        data,
        {headers: 
            {
                "content-type": "multipart/form-data"
            }
        }
    ).then((result) =>{
        console.log(result.status,result.statusText)
    }).catch((err)=>{return null})

}

function hiddenInput(e){
    if(e.target.name =='telefone'){
        e.target.value =  e.target.value.replace(/[a-zA-Z]/g, '');

        let input = e.target.value;
        
    
        input = input.replace(/\D/g, '');

    
        let formattedInput = '';
        if (input.length > 0) {
            formattedInput = '(' + input.substring(0, 2);
            if (input.length > 2) {
                formattedInput += ') ' + input.substring(2, 3) + ' ' + input.substring(3, 7);
                if (input.length > 7) {
                    formattedInput += '-' + input.substring(7, 11);
                }
            }
        }

        e.target.value = formattedInput;

        document.querySelector(`#${e.target.id}_helpText`).classList.add('d-none')
    }
    if (e.target.name==='email'){ 
        if(!e.target.value.includes('@')){
            document.querySelector(`#${e.target.id}_helpText`).classList.remove('d-none')
        }
        else{
            document.querySelector(`#${e.target.id}_helpText`).classList.add('d-none')

        }
    }


}

export function ModalAddContato({show,closeModal}) {
    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    if(show){
        return (
            <>
                <div className='ModalBackdrop'>
                    <div className='Modal'>
                        <div className='ModalHeader'>
                            <span className='fs-2'>Novo Contato</span>
                            <CloseIcon className={'danger'} onClick={closeModal}/>
                        </div>
                        <hr />
                        <div className='ModalBody'>
                            <div className="formAddContato">
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <div className="divInput">
                                        <span className="labelForm">Nome:</span>
                                        <input onInput={hiddenInput} id="novo_nome" name="nome" className="formControl" placeholder="Fulano da Silva" type="text" required />
                                    </div>
                                    <small id="novo_nome_helpText" className='d-none helpText'>Por favor, insira um Nome.</small>
                                </div>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <div className="divInput">
                                        <span className="labelForm">Email:</span>
                                        <input onInput={hiddenInput} id="novo_email" name="email" className="formControl" placeholder="fulano@mail.com" style={{margin:"0 1rem 0 0"}} type="email" required />
                                    </div>
                                    <small id="novo_email_helpText" className='d-none helpText'>Por favor insira um email válido</small>
                                </div>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <div className="divInput">
                                        <span className="labelForm">Telefone:</span>
                                        <input onInput={hiddenInput} id="novo_telefone" name="telefone" className="formControl" placeholder="(63) 94002-8922" style={{width:"100%"}} type="text" required />
                                    </div>
                                    <small className='helpText'>Somente números</small>
                                    <small id="novo_telefone_helpText" className='d-none helpText'>Por favor insira um telefone válido</small>
                                </div>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <div className="divInput">
                                        <span className="labelForm" style={{width:"75%"}}>Data de Nascimento:</span>
                                        <input onInput={hiddenInput} id="novo_dataNascimento" name="dataNascimento" className="formControl" style={{width:"75%", margin:"0 1rem 0 0"}} type="date" required />
                                    </div>
                                    <small id="novo_dataNascimento_helpText" className='d-none helpText'>Por favor insira uma data de nascimento</small>
                                </div>
                                
                                <div className="fotoDiv">
                                    <span className="labelForm" style={{width:"15%",marginRight:"0"}}>Foto:</span>
                                    <input id="nova_imagem" onInput={hiddenInput} onChange={handleChange} name="nova_imagem" type="file" hidden/>
                                    <label htmlFor="nova_imagem" className="btn btnUpload">
                                        <ImageUploadIcon/>
                                        Selecionar Imagem
                                    </label>
                                    <small id="nova_imagem_helpText" className='d-none helpText' style={{marginLeft:"18rem"}}>Por favor, selecione uma imagem</small>
                                    <small style={{marginInline:"auto",marginTop:"1rem", marginBottom:"1rem"}}>Prévia Imagem</small>
                                    <img className="imagePreview" src={file} />
                                </div>

                            </div>


                            <div className="ModalFooter">
                                <button className="btn btnExcluir" style={{paddingRight:"1rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}} onClick={closeModal}>
                                    <CloseIcon/>
                                    Cancelar
                                </button>

                                <button className="btn btnAdicionar" style={{paddingInline:"1rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}} onClick={createNewContactus}>
                                    <UserAdd/>
                                    Salvar Novo Contactus
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </>
        );
    }else{
        return null
    }
}