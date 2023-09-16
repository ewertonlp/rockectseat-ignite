import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUserGroup,
  faBuildingUser,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { UserInfo, UserInfoContainer, UserInfoTitle } from './UserStyle'

type UserContainerProps = {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: string
}

export default function UserContainer({
  avatar_url,
  name,
  html_url,
  bio,
  login,
  company,
  followers,
}: UserContainerProps) {
  return (
    <UserInfoContainer>
      <img src={avatar_url} alt="" />
      <UserInfo>
        <UserInfoTitle>
          <strong>{name}</strong>
          <a href={html_url}>
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </UserInfoTitle>
        <p>{bio}</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} /> {login}
          </li>
          <li>
            <FontAwesomeIcon icon={faBuildingUser} /> {company}
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} /> {followers}
          </li>
        </ul>
      </UserInfo>
    </UserInfoContainer>
  )
}
