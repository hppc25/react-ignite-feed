
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import  './global.css';
import styles from './App.module.css';

function App() {

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <div>Hello Ignite</div>
      </div>
   </>
  )
}

export default App
