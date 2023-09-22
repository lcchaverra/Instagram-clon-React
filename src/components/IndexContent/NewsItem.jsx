import ProfilePic from '../../assets/img/usuario/perfil.jpg'
import { useState } from 'react'
import PostModal from './PostModal'
import CloseIcon from '../../assets/icons/cruz.svg'

const NewsItem = ({NewPic}) => {

    const [liked,setliked] = useState(false)

    const like = () => {
        setliked(!liked)
      }

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

  return (
    <>
        <div className="NewsItem">
            <div className="New-item-user-Data">
                <div className="New-item-user-data-start">
                    <img src={ProfilePic} alt="Foto de perfil del usuario de la publicacion" />
                    <p className='New-userName'>UsuarioRandom</p>
                    <span className='New-time'>3 d</span>
                    <div className='New-Follow'>Seguir</div>
                </div>
                <div className="New-item-user-data-end">...</div>
            </div>

            <div className="New-Photo">
                <img src={NewPic} alt="Imagen de la publicación del usuario" />
            </div>

            <div className="reactions-sections">
                <div className="icons-sections">
                    <div className="icons-start">
                          <svg onClick={like} aria-label="Me gusta" className={`x1lliihq x1n2onr6 ${liked ? 'liked' :' '}`} color="rgb(245, 245, 245)" fill={`${liked ? "rgb(245, 0, 0)" : "rgb(245, 245, 245)" }`} height="24" role="img" viewBox="0 0 24 24" width="24"><title>Me gusta</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                          <svg aria-label="Comentar" className="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comentar</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                          <svg aria-label="Compartir publicación" className="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Compartir publicación</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                          </div>
                          <svg aria-label="Guardar" className="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Guardar</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                    </div>
                        <span>{liked
                          ?
                          <div className="user-liked">
                          <img className="user-comment-profile-pic" src={ProfilePic} alt="Foto de Perfil del Usuario" />
                          <span>1 Me gusta</span>
                          </div> 
                          : "ㅤ"}
                        </span>

                        <div className="user-new-data">
                            <span>UsuarioRandom</span>
                            <p>Soy una descripcion bien profunda :v</p>
                        </div>

                        <div className="prev-comments-section">
                            <span onClick={openModal}>Ver los 4656 comentarios</span>
                            <p><strong>LaSalchiesGod</strong> Soy un comentario de prueba</p>
                        </div>
                    <div className="post-comments-sections">
                        <svg aria-label="Emoji" className="x1lliihq x1n2onr6" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                        <input className="comment-input" placeholder="Agrega un comentario..." type="text" />
                    </div>
                </div>
        </div>

        {modalIsOpen && 
            <PostModal>
                <div className="close-modal-container">
                    <button className="close-modal-button" onClick={closeModal}><img src={CloseIcon} alt="Icono de Cerrar modal" /></button>     
                </div>
                <img src={NewPic} alt="Imagen de la publicacion para el modal" />
            </PostModal>
        }
    </>
  )
}

export default NewsItem