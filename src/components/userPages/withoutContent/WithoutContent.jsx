import emptyPic from '../../../assets/img/empty-icon.png'

const WithoutContent = () => {
  return (
    <>
        <div className="empty-container">
            <div className="empty-pic">
                <img src={emptyPic} alt="Logo de Camara para cuando no hay contenido" />
            </div>
            <div className="empty-content">
                <h3 className='empty-title'>Comparte fotos</h3>
                <p>Cuando compartas fotos, aparecerán en tu perfil.</p>
                <span>Comparte tu primera foto</span>
            </div>
        </div>
    </>
  )
}

export default WithoutContent