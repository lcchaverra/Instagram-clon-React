import {userDataContext} from '../../pages/App'
import ProfilePic from '../../assets/img/usuario/perfil.jpg'
import { useContext } from 'react'
import HistoryItem from './HistoryItem'
import HistoryPic from '../../assets/img/usuario/15.jpg'
import HistoryPic2 from '../../assets/img/usuario/16.jpg'
import HistoryPic3 from '../../assets/img/usuario/17.jpg'
import HistoryPic4 from '../../assets/img/usuario/18.jpg'
import HistoryPic5 from '../../assets/img/usuario/19.jpg'
import HistoryPic6 from '../../assets/img/usuario/20.jpg'
import HistoryPic7 from '../../assets/img/usuario/21.jpg'

const Histories = () => {

    const { userName, setUserName } = useContext(userDataContext)

  return (
    <>
        <div className="histories-container">
            <HistoryItem photo={ProfilePic} userName={userName} historyPhoto={HistoryPic}/>
            <HistoryItem photo={ProfilePic} userName={userName} historyPhoto={HistoryPic2}/>
            <HistoryItem photo={ProfilePic} userName={userName} historyPhoto={HistoryPic3}/>
            <HistoryItem photo={ProfilePic} userName={userName} historyPhoto={HistoryPic4}/>
            <HistoryItem photo={ProfilePic} userName={userName} historyPhoto={HistoryPic5}/>
            <HistoryItem photo={ProfilePic} userName={userName} historyPhoto={HistoryPic6}/>
            <HistoryItem photo={ProfilePic} userName={userName} historyPhoto={HistoryPic7}/>
        </div>
    </>
  )
}

export default Histories