import { useContext } from 'react'
import { userDataContext } from '../../pages/App'
import ProfilePic from '../../assets/img/usuario/perfil.jpg'
import { Link } from 'react-router-dom'
const Suggestion = () => {

  const { userName, setUserName } = useContext(userDataContext)

  return (
    <>
    <div className="suggestion-container-relative">
      <aside className="suggestion-container">
          <Link className="profile-section" to="/Profile">
            <img className='profile-section-pic' src={ProfilePic} alt="Foto de perfil del usuario" />
            <div className="profile-section-info">
              <span>{userName}</span>
              <span className='sub-user'>Lucas Córdoba</span>
            </div>
            <span className='change-button'>Cambiar</span>
          </Link>
        <div className="suggestion-section">
          <span>Sugerencas para ti</span>
          <span>ver Todo</span>
        </div>
        <div className="suggestion-body">

          <div className="suggestion-item">
            <img className='profile-section-pic' src={ProfilePic} alt="Foto de perfil del usuario" />
              <div className="profile-section-info">
                <span>{userName}</span>
                <span className='sub-user'>Aguacate Sigue esta cuenta</span>
              </div>
              <span className='change-button'>Seguir</span>
          </div>


          <div className="suggestion-item">
            <img className='profile-section-pic' src={ProfilePic} alt="Foto de perfil del usuario" />
              <div className="profile-section-info">
                <span>{userName}</span>
                <span className='sub-user'>Aguacate Sigue esta cuenta</span>
              </div>
              <span className='change-button'>Seguir</span>
          </div>

          <div className="suggestion-item">
            <img className='profile-section-pic' src={ProfilePic} alt="Foto de perfil del usuario" />
              <div className="profile-section-info">
                <span>{userName}</span>
                <span className='sub-user'>Aguacate Sigue esta cuenta</span>
              </div>
              <span className='change-button'>Seguir</span>
          </div>

          <div className="suggestion-item">
            <img className='profile-section-pic' src={ProfilePic} alt="Foto de perfil del usuario" />
              <div className="profile-section-info">
                <span>{userName}</span>
                <span className='sub-user'>Aguacate Sigue esta cuenta</span>
              </div>
              <span className='change-button'>Seguir</span>
          </div>

        </div>
          <div className="suggestion-footer">
              <ul className="suggestion-footer-list">
                <li>Informacion</li>
                <li>Ayuda</li>
                <li>Prensa</li>
                <li>API</li>
                <li>Empleo</li>
                <li>Privacidad</li>
                <li>Condiciones</li>
                <li>Ubicaciones</li>
                <li>Idioma</li>
                <li>Meta Verified</li>
              </ul>
            <span>© 2023 INSTAGRAM FROM META</span>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Suggestion