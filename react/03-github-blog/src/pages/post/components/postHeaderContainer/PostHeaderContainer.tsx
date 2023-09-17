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

type PostContentProps = {
  url: string
  title: string
  login: string
  created_at: string
}

export function PostHeaderContainer({
  url,
  title,
  login,
  created_at,
}: PostContentProps) {

  function calculateDaysAgo(created_at: string) {
    const createdDate = new Date(created_at)
    const currentDate = new Date()

    const timeDifference = currentDate - createdDate
    const daysAgo = Math.floor(timeDifference / (1000 * 3600 * 24))

    return daysAgo
  }

  const createdPostDate = calculateDaysAgo(created_at)

  function postDate(createdPostDate: number) {
    console.log(createdPostDate)
    if (createdPostDate < 1) {
      return 'Há menos de um dia'
    } else if (createdPostDate < 2) {
      return 'Há 1 dia'
    } else {
      return <span> Há {calculateDaysAgo(created_at)} dias</span>
    }
  }

  return (
    <PostHeaderInfoContainer>
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </Link>
        <a href={url}>
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>
      <strong>{title}</strong>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} /> {login}
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarAlt} /> {postDate(createdPostDate)}
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} /> comments
        </li>
      </ul>
    </PostHeaderInfoContainer>
  )
}
