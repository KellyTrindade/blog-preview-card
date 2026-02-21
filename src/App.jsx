import './App.css'
import Card from './Components/Card'

import publishPic from './assets/illustration-article.svg'
import avatar from './assets/image-avatar.webp'

function App() {

  const currentDate = new Date()

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Card
        publishPic={publishPic}
        tagName='Estudando'
        publishDate={currentDate}
        title='Fundamentos de HTML & CSS'
        description='Essas linguagens são a espinha dorsal de todo website, definindo sua estrutura, conteúdo e apresentação.'
        pic={avatar}
        profileName='Greg Hooper'
      />
    </div>
  )
}

export default App
