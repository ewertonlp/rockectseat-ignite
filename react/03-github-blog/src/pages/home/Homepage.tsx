import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import logo from '../../assets/terminal-solid.svg'

import UserContainer from './components/userContainer/UserContainer'
import { HomeCover, PostCard, PostCardContainer, SearchPost } from './Styles'

interface HomePage {
  avatar_url?: string
  name?: string
  html_url?: string
  bio?: string
  login?: string
  company?: string
  followers?: string
}

export default function Homepage() {
  const [userData, setUserData] = useState<HomePage>([])
  const username = 'ewertonlp'
  const token =
    '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'

  const userAuth = axios.create({
    headers: {
      Authorization: `token ${token}`,
    },
  })

  const fetchUserData = async () => {
    try {
      const response = await userAuth.get(
        `https://api.github.com/users/${username}`
      )
      console.log(response.data)
      setUserData(response.data)
    } catch (error) {
      console.error('Erro ao buscar os dados do usuário:', error)
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div>
      <HomeCover>
        <img src={logo} alt="" />
        <span>GITHUB BLOG</span>
      </HomeCover>

      {userData ? (
        <UserContainer
          avatar_url={userData.avatar_url}
          name={userData.name}
          html_url={userData.html_url}
          bio={userData.bio}
          login={userData.login}
          company={userData.company}
          followers={userData.followers}
        />
      ) : (
        <h3> Carregando...</h3>
      )}

      <SearchPost>
        <div>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" width="100%" />
      </SearchPost>

      <PostCardContainer>
        <Link to='/post'>
        <PostCard>
          <div>
            <h2>Post Title</h2>
            <span>Há 1 dia</span>
          </div>

          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus
            quis, vehicula ac nisi. Manduma pindureta quium dia nois paga.
            Interessantiss quisso pudia.
          </p>
        </PostCard>
        </Link>
        <PostCard>
          <div>
            <h2>Post Title</h2>
            <span>Há 1 dia</span>
          </div>

          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus
            quis, vehicula ac nisi. Manduma pindureta quium dia nois paga.
            Interessantiss quisso pudia.
          </p>
        </PostCard>
        <PostCard>
          <div>
            <h2>Post Title</h2>
            <span>Há 1 dia</span>
          </div>

          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Interagi no mé, cursus
            quis, vehicula ac nisi. Manduma pindureta quium dia nois paga.
            Interessantiss quisso pudia.
          </p>
        </PostCard>
      </PostCardContainer>
    </div>
  )
}
