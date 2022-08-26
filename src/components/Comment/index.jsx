import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './styles.module.css';
import { Avatar } from '../Avatar';

export function Comment({content}) {

   function handleDelete() {
    props.onDeleteComment(props.content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/hppc25.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Helder Correia</strong>
              <time
                title='06 de Junho de 2022 às 15h30'
                dateTime="2022-06-06 15:33:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button 
              title='Deletar comentário'
              onClick={handleDelete}
              >
              <Trash size={24} />
            </button>
          </header>

          <p>{content} </p>
        </div>
        <footer><button><ThumbsUp /> Aplaudir <span>20</span></button></footer>
      </div>
    </div>
  )
}