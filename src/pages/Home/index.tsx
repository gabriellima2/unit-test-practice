import { FormEvent } from "react"
import { useDispatch } from "react-redux";

import { Form } from "../../components/Form";
import { Users } from "../../components/Users";

import { addUser } from "../../redux/slices/userSlice";

export function Home() {
  const dispatch = useDispatch();

  const handleSubmit = (values: string) => {
    if (!values) return;

    dispatch(addUser(values));
  }

  return (
    <>
    <Users.Quantity />
    <Form handleSubmit={handleSubmit}/>
    <main>
      <Users.List />
    </main>
    </>
  )
}
