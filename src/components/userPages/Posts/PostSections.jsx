import Post from "./post"
import Post1Img from '/src/assets/post/1.jpg'
import Post2Img from '../../../assets/post/2.jpg'

export const userPosts = [{
      id: 0,
      title: 'Post 1',
      descrption: 'publicacion de prueba para el clon de react # 1',
      image: Post1Img
  },
  {
    id: 1,
    title: 'Post 2',
    descrption: 'publicacion de prueba para el clon de react # 2',
    image: Post2Img
  },
]

const PostSections = () => {
  return (
    <div className='grid-content'>
      {userPosts.map(p => (
        <Post key={p.id} 
        title={p.title} 
        descrption={p.descrption}  
        image={p.image} />
      ))}      
    </div>
  )
}

export default PostSections