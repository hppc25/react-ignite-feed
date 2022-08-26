
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import  './global.css';
import styles from './App.module.css';
import { Post } from './components/Post';

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
          <main>
            <Post></Post>
            <Post></Post>
          </main>
      </div>
   </>
  )
}

export default App
