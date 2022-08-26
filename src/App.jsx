
import { Header } from './components/Header';
import  './global.css';
import styles from './App.module.css';

function App() {

  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Header/>
        <div>Hello Ignite</div>
      </div>
   </>
  )
}

export default App
