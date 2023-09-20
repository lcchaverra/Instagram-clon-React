import { useState } from "react"
import PostModal from "./PostModal"
import CloseIcon from '../../../assets/icons/cruz.svg'

const Post = ( {id, title, description, image} ) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <div className="grid-item">
          <img onClick={openModal} src={image} alt={title}/>
      </div>

      {modalIsOpen && 
        <PostModal>
          <div className="close-modal-container">
            <button className="close-modal-button" onClick={closeModal}><img src={CloseIcon} alt="Icono de Cerrar modal" /></button>     
          </div>
          <img src={image} alt="Imagen de la publicacion para el modal" />
        </PostModal>
      }
    </>
  )
}

export default Post