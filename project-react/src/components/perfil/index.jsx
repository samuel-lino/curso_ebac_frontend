import './perfil.css'

const Perfil = ()=>{
    const nome = 'Samuel Lino'
    const perfil_img = 'https://github.com/samuel-lino.png'
    return (
        <>
            <img className='avatar' src={perfil_img} />
            <h2 className='user-name'>{nome}</h2>
        </>
    )
};

export default Perfil;