import { PostContent, PostCover } from './Style'
import logo from '../../assets/terminal-solid.svg'
import { PostHeaderContainer } from './components/postHeaderContainer/PostHeaderContainer'

export function Post() {
  return (
    <>
      <PostCover>
        <img src={logo} alt="" />
        <span>GITHUB BLOG</span>
      </PostCover>
      <PostHeaderContainer />
      <PostContent>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          eligendi vero saepe eius quo error tempore quibusdam cumque
          doloremque? Repudiandae dolor beatae perspiciatis officia aut veniam,
          laboriosam vel sint distinctio.
        </p>
      </PostContent>
    </>
  )
}
