import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/terminal-solid.svg'

import UserContainer from './components/userContainer/UserContainer'
import {
  CustomLink,
  HomeCover,
  PostCard,
  PostCardContainer,
  SearchPost,
} from './Styles'
import { api } from '../../services/api'
import { TruncateText } from '../../utils/TruncatedText'

interface HomePage {
  avatar_url?: string
  name?: string
  html_url?: string
  bio?: string
  login?: string
  company?: string
  followers?: string
}

interface PostCard {
  id: number
  title: string
  updated_at: string
  body: string
  number:number
}

export default function Homepage() {
  const [userData, setUserData] = useState<HomePage>([])
  const [postData, setPostData] = useState<PostCard[]>([])
  const username = 'ewertonlp'
  const owner = 'ewertonlp'
  const repo = 'rockectseat-ignite'
  const navigate = useNavigate()

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
      setUserData(response.data)
    } catch (error) {
      console.error('Erro ao buscar os dados do usuário:', error)
    }
  }

  const fetchAllPostsData = async () => {
    try {
      const response = await api.get(
        `/repos/${owner}/${repo}/issues`
      )
      setPostData(response.data)
    } catch (error) {
      console.error('Erro ao buscar issues:', error)
    }
  }

  useEffect(() => {
    fetchUserData()
    fetchAllPostsData()
  }, [])

  function calculateDaysAgo(updated_at: string) {
    const updatedDate = new Date(updated_at)
    const currentDate = new Date()

    const timeDifference = currentDate - updatedDate
    const daysAgo = Math.floor(timeDifference / (1000 * 3600 * 24))

    return daysAgo
  }

  function handlePostClick(number: number) {
    navigate(`/post/${number}`)
  }

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
          {postData.length < 2 ? (
            <span>{postData.length} publicação</span>
          ) : (
            <span>{postData.length} publicações</span>
          )}
        </div>
        <input type="text" placeholder="Buscar conteúdo" width="100%" />
      </SearchPost>

      <PostCardContainer>
        {postData ? (
          postData.map((post) => {
            return (
              <PostCard key={post.id} onClick={() => handlePostClick(post.number)}>
                <div>
                  <strong>{post.title}</strong>
                  <span>Há {calculateDaysAgo(post.updated_at)} dias</span>
                </div>

                <p>
                  <TruncateText text={post.body} maxLength={200} />
                </p>
              </PostCard>
            )
          })
        ) : (
          <h3>Carregando Posts...</h3>
        )}
      </PostCardContainer>
    </div>
  )
}
