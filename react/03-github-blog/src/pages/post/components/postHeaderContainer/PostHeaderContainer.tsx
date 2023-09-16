import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarAlt,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { PostHeaderInfoContainer } from './PostStyle'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostHeaderContainer() {
  return (
    <PostHeaderInfoContainer>
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </Link>
        <a href="">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
      <strong>Título do Post</strong>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} /> login
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarAlt} /> date
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} /> comments
        </li>
      </ul>
    </PostHeaderInfoContainer>
  )
}
