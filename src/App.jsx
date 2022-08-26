
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import  './global.css';
import styles from './App.module.css';
import { Post } from './components/Post';
import {posts} from './mock'

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
          <main>
            {posts.map(post => <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt} />)}
          </main>
      </div>
   </>
  )
}

export default App
