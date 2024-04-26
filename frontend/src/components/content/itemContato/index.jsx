export const ItemContato = ({contato}) => {
    return(
        <>
            <li>
                <img src={contato.imagem} alt={'Imagem de Perfil '+ contato.nome} width={50} height={50}/>
                <span>{contato.nome}</span>
                <span>{contato.email}</span>
                <span>{contato.celular}</span>
            </li>
        </>
    )
}