import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { debounce } from 'lodash'

import logo from '../../assets/terminal-solid.svg'

import UserContainer from './components/userContainer/UserContainer'
import { HomeCover, PostCard, PostCardContainer, SearchPost } from './Styles'
import { api } from '../../services/api'
import { TruncateText } from '../../utils/TruncatedText'
import { SearchForm } from './components/searchForm'

interface UserDataType {
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
  number: number
}

export default function Homepage() {
  const [userData, setUserData] = useState<UserDataType[]>([])
  const [postData, setPostData] = useState<PostCard[]>([])
  const [inputData, setInputData] = useState('')
  const [filteredIssues, setFilteredIssues] = useState<PostCard[]>([])
  const username = 'ewertonlp'
  const owner = 'ewertonlp'
  const repo = 'rockectseat-ignite'
  const navigate = useNavigate()

  const fetchUserData = async () => {
    try {
      const response = await api.get(`https://api.github.com/users/${username}`)
      setUserData(response.data)
    } catch (error) {
      console.error('Erro ao buscar os dados do usuário:', error)
    }
  }

  const fetchAllPostsData = async () => {
    try {
      const response = await api.get(`/repos/${owner}/${repo}/issues`)
      setPostData(response.data)
    } catch (error) {
      console.error('Erro ao buscar issues:', error)
    }
  }

  useEffect(() => {
    fetchUserData()
    fetchAllPostsData()
  }, [])

  const fetchSearchData = async () => {
    try {
      const response = await api.get(
        `/search/issues?q=is:issue+${inputData}%20repo:${username}/${repo}`
      )
      const issues = response.data.items || []
      setFilteredIssues(issues)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

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

  const debouncedFetchSearchData = debounce(fetchSearchData, 500)

  useEffect(() => {
    if (inputData) {
      debouncedFetchSearchData()
    }
  }, [debouncedFetchSearchData, inputData])

  console.log(filteredIssues)

  return (
    <div>
      <HomeCover>
        <img src={logo} alt="" />
        <Link to="/">
          <span>GITHUB BLOG</span>
        </Link>
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
        <div className="search-title">
          <h3>Publicações</h3>
          {postData.length < 2 ? (
            <span>{postData.length} publicação</span>
          ) : (
            <span>{postData.length} publicações</span>
          )}
        </div>
        <SearchForm
          setInputData={setInputData}
          inputData={inputData}
          fetchSearchData={fetchSearchData}
        />
      </SearchPost>

      <PostCardContainer>
        {filteredIssues.length
          ? filteredIssues.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  onClick={() => handlePostClick(post.number)}
                >
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
          : postData.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  onClick={() => handlePostClick(post.number)}
                >
                  <div>
                    <strong>{post.title}</strong>
                    <span>Há {calculateDaysAgo(post.updated_at)} dias</span>
                  </div>

                  <p>
                    <TruncateText text={post.body} maxLength={200} />
                  </p>
                </PostCard>
              )
            })}
      </PostCardContainer>
    </div>
  )
}
