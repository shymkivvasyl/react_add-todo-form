import usersFromServer from '../../api/users';
import { TodoInfo } from '../TodoInfo';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

type Props = {
  todos: Todo[];
};

export const TodoList = ({ todos }: Props) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        const user = usersFromServer.find(u => u.id === todo.userId);

        return <TodoInfo key={todo.id} todo={{ ...todo, user }} />;
      })}
    </section>
  );
};
