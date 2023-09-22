import NewsItem from "./NewsItem"
import NewPic from '../../assets/img/usuario/1.jpg'
import NewPic2 from '../../assets/img/usuario/3.jpg'
import NewPic3 from '../../assets/img/usuario/10.jpg'
import NewPic4 from '../../assets/img/usuario/8.jpg'
import NewPic5 from '../../assets/img/usuario/9.jpg'

const NewsContainer = () => {
  return (
    <>
        <div className="News-Container">
            <NewsItem NewPic={NewPic} />
            <NewsItem NewPic={NewPic2} />
            <NewsItem NewPic={NewPic3} />
            <NewsItem NewPic={NewPic4} />
            <NewsItem NewPic={NewPic5} />
        </div>
    </>
  )
}

export default NewsContainer