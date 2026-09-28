import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './styles.module.css';

export function CountDown() {
  const taskContext = useTaskContext();
  const { formattedSecondsRamaining } = taskContext.state;

  return <div className={styles.container}>{formattedSecondsRamaining}</div>;
}
