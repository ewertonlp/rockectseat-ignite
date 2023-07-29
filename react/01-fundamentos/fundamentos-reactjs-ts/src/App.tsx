import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ewertonlp.png',
      name: 'Ewerton Lopes',
      role: 'Frontend Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'paragraphjane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-07-27 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ewertonlp.png',
      name: 'Ewerton Lopes',
      role: 'Frontend Developer,',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'paragraphjane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-07-26 20:00:00'),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
