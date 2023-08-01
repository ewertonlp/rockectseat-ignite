import { useState } from 'react';

import { Trash } from 'phosphor-react';
import styles from './TaskCard.module.css';

interface taskProps {
  id: string;
  descricao: string;
  onDeleteTask: () => void;
  onHandleTaskComplete: (id: string) => void;
}

export function TaskCard({
  id,
  descricao,
  onDeleteTask,
  onHandleTaskComplete,
}: taskProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedBoxChange = () => {
    setIsChecked(!isChecked);
    onHandleTaskComplete(id);
  };

  return (
    <div key={id} className={styles.task}>
      <div className={styles.checkContainer}>
        <label>
          <input
            type="checkbox"
            title="Clique para marcar tarefa como concluída"
            checked={isChecked}
            onChange={handleCheckedBoxChange}
          />
          <span className={styles.checkmark}></span>
        </label>
      </div>
      <div className={`${styles.descricao} ${isChecked ? styles.checked : ''}`}>
        <p>{descricao}</p>
      </div>
      <div className={styles.deleteIcon}>
        <p>
          <Trash onClick={onDeleteTask} />
        </p>
      </div>
    </div>
  );
}
