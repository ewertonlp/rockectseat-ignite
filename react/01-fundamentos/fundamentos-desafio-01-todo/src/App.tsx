import { ChangeEvent, FormEvent, useState, useEffect } from 'react';

import { api } from './services/api';
import { Header } from './components/header/Header';
import { TaskCard } from './components/taskCard/TaskCard';

import taskIcon from './assets/task-icon.svg';
import { PlusCircle } from 'phosphor-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './App.module.css';
import './global.css';

export interface TaskType {
  _id: string;
  descricao: string;
  isComplete: boolean;
}

function App() {
  const [newTask, setNewTask] = useState('');
  const [getTasks, setGetTasks] = useState<TaskType[]>([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  async function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    try {
      const novaTarefa = { descricao: newTask, isComplete: false };
      await api.post('/tarefas', novaTarefa);
      setNewTask('');
      getAllTasks();
    } catch (error) {
      toast.error('Erro ao criar nova tarefa. Tente novamente.');
    }
  }

  async function getAllTasks() {
    try {
      const response = await api.get('/tarefas');
      setGetTasks(response.data);
    } catch (error) {
      toast.error('Erro ao buscar as tarefas.');
    }
  }

  useEffect(() => {
    getAllTasks();
  }, []);

  async function deleteTask(id: string) {
    try {
      await api.delete(`/tarefas/${id}`);
      getAllTasks();
      toast.success('Tarefa excluída com sucesso!');
    } catch (error) {
      toast.error('Erro ao deletar tarefa.');
    }
  }

  async function handleTaskComplete(id: string) {
    try {
      const taskToUpdate = getTasks.find((task) => task._id === id);
      if (!taskToUpdate) {
        return;
      }

      const updateTask = {
        ...taskToUpdate,
        isComplete: !taskToUpdate.isComplete,
      };

      await api.put(`/tarefas/${id}`, updateTask);

      setGetTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id
            ? { ...task, isComplete: updateTask.isComplete }
            : task
        )
      );
    } catch (error) {
      toast.error('Erro ao marcar a tarefa como completa.');
    }
  }

  useEffect(() => {
    getCompletedTaskCount();
  }, [getTasks]);

  async function getCompletedTaskCount() {
    try {
      const response = await api.get('/tarefas');
      const completedTasks = response.data.filter(
        (task: { isComplete: boolean }) => task.isComplete === true
      );
      setCompletedTaskCount(completedTasks.length);
    } catch (error) {
      toast.error('Erro ao buscar as tarefas completadas.');
    }
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
            name="tarefa"
            onChange={handleCreateNewTaskChange}
            value={newTask}
            required
          />
          <button type="submit" disabled={isNewTaskEmpty}>
            Criar
            <PlusCircle />
          </button>
        </form>
        <div className={styles.headerTasks}>
          <div className={styles.taskList}>
            <p>Tarefas criadas</p>
            <p className={styles.taskListNumber}>{getTasks.length}</p>
          </div>
          <div className={styles.taskConclude}>
            <p>Concluídas</p>
            <p className={styles.taskConcludeNumber}>
              {completedTaskCount} de {getTasks.length}
            </p>
          </div>
        </div>
        {getTasks.length === 0 ? (
          <div>
            <div className={styles.noTaskInfo}>
              <img src={taskIcon} alt="Icone de Tarefa" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          <div>
            {getTasks.map((task) => (
              <TaskCard
                key={task._id}
                id={task._id}
                descricao={task.descricao}
                onDeleteTask={() => deleteTask(task._id)}
                onHandleTaskComplete={() => handleTaskComplete(task._id)}
              />
            ))}
          </div>
        )}
      </div>
      <ToastContainer autoClose={2500} theme="colored" />
    </div>
  );
}

export default App;
