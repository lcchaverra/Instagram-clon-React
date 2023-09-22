import HistoriesModal from './HistoriesModal'
import { useState } from 'react' 
import CloseIcon from '../../assets/icons/cruz.svg'

const HistoryItem = ({photo, userName, historyPhoto}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
        <div onClick={openModal} className="history-item">
            <img src={photo} alt="foto de perfil de la historia" />
            <span>{userName}</span>
        </div>

        {modalIsOpen && 
          <HistoriesModal>
            <div className="History-close-modal-container">
              <button className="History-modal-button" onClick={closeModal}><img src={CloseIcon} alt="Icono de Cerrar modal" /></button>     
            </div>
            <img src={historyPhoto} alt="Imagen de la publicacion para el modal" />
          </HistoriesModal>
        }
    </>
  )
}

export default HistoryItem