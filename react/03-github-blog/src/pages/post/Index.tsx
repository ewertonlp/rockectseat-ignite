import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostContent, PostCover } from './Style'
import logo from '../../assets/terminal-solid.svg'
import { PostHeaderContainer } from './components/postHeaderContainer/PostHeaderContainer'
import { api } from '../../services/api'

interface PostContent {
  number: number
  title: string
  login: string
  created_at: string
  body: string
  url: string
}

export function Post() {
  const [postData, setPostData] = useState<PostContent>([])
  const { number } = useParams()
  const owner = 'ewertonlp'
  const repo = 'rockectseat-ignite'

  async function getPostDataById() {
    try {
      const response = await api.get(`/repos/${owner}/${repo}/issues/${number}`)
      setPostData(response.data)
    } catch (error) {
      throw new Error('Erro ao buscar a issue: ' + error.message)
    }
  }

  useEffect(() => {
    getPostDataById()
  }, [number])

 

  return (
    <>
      {postData ? (
        <div>
          <PostCover>
            <img src={logo} alt="" />
            <span>GITHUB BLOG</span>
          </PostCover>
          <PostHeaderContainer
            title={postData.title}
            login={owner}
            created_at={postData.created_at}
            url={postData.url}
          />
          <PostContent>
            <p>{postData.body}</p>
          </PostContent>
        </div>
      ) : (
        <h4>Carregando Post</h4>
      )}
    </>
  )
}
