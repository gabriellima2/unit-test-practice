import { useDispatch, useSelector } from "react-redux";

import { DefaultButton } from "../DefaultButton";

import { removeUser, userSelect } from "../../redux/users/slice";
import "./styles.css";

const Quantity = () => {
  const users = useSelector(userSelect);

  return (
    <header>
      <h1>Total de usuários: {users.length}</h1>
    </header>
  );
}

const List = () => {
  const users = useSelector(userSelect);
  const dispatch = useDispatch();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <p>{user.name}</p>
          <DefaultButton
            title={`Remover ${user.name}`}
            handleClick={() => dispatch(removeUser(user.id))}
          >
            Remover
          </DefaultButton>
        </li>
      ))}
    </ul>
  );
}

export const Users = { List, Quantity };
