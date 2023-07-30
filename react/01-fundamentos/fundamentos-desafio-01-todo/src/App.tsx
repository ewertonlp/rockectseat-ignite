import { ChangeEvent, FormEvent, useState } from 'react';
import { Header } from './components/header/Header';
import { api } from './services/api';

import { PlusCircle, Trash } from 'phosphor-react';
import styles from './App.module.css';
import './global.css';

function App() {
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
    console.log(newTask);
  }

  async function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const response = await api.post('/tarefas');
    alert('ok');
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            name="taskInput"
            onChange={handleCreateNewTaskChange}
            value={newTask}
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle />
          </button>
        </form>
        <div className={styles.headerTasks}>
          <div className={styles.taskList}>
            <p>Tarefas criadas</p>
            <p className={styles.taskListNumber}>5</p>
          </div>
          <div className={styles.taskConclude}>
            <p>Concluídas</p>
            <p className={styles.taskConcludeNumber}>2 de 5</p>
          </div>
        </div>
        <div className={styles.task}>
          <div className={styles.checkContainer}>
            <input
              type="checkbox"
              title="Clique para marcar tarefa como concluída"
            />
            <span className={styles.checkmark}></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            fuga impedit Tempora fuga impedit
          </p>
          <p>
            <Trash />
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
