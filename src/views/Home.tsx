import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToDoCard from '../components/ToDoCard';
import ToDoForm from '../components/Form';
import { ToDoFormDataType, ToDoType } from '../types';



type Sorting = {
  idAsc: (a: ToDoType, b:ToDoType) => number,
  idDesc: (a: ToDoType, b:ToDoType) => number,
  titleAsc: (a: ToDoType, b:ToDoType) => number,
  titleDesc: (a: ToDoType, b:ToDoType) => number,
}

type HomeProps = {
  isLoggedIn: boolean,
  handleClick: () => void
}

export default function Home({isLoggedIn, handleClick}: HomeProps) {

  const [showForm, setShowForm] = useState(false);
  const [todos, setToDos] = useState<ToDoType[]>([
    {
        author: {
            dateCreated: "Fri, 29 Mar 2024 16:58:44 GMT",
            email: "adonai.devs@gmail.com",
            firstName: "Adonai",
            id: 1,
            lastName: "Romero",
            username: "adonaione"
        },
        body: "Do the dishes",
        dateCreated: "Fri, 29 Mar 2024 17:00:35 GMT",
        id: 1,
        title: "Clean",
        dueDate: "Mon, 01 Apr 2024 17:00:35 GMT",
        completed: false
    },
    {
        author: {
            dateCreated: "Tue, 14 Apr 2024 16:58:44 GMT",
            email: "adonai.devs@gmail.com",
            firstName: "Adonai",
            id: 1,
            lastName: "Romero",
            username: "adonaione"
        },
        body: "Code that App",
        dateCreated: "Tue, 16 Apr 2024 17:00:35 GMT",
        id: 2,
        title: "Homework",
        dueDate: "Mon, 01 Apr 2024 17:00:35 GMT",
        completed: false
    },
    {
      author: {
          dateCreated: "Tue, 14 Apr 2024 16:58:44 GMT",
          email: "adonai.devs@gmail.com",
          firstName: "Adonai",
          id: 1,
          lastName: "Romero",
          username: "adonaione"
      },
      body: "Go to bwell to guide a meditation session.",
      dateCreated: "Tue, 16 Apr 2024 17:00:35 GMT",
      id: 3,
      title: "Guide Meditation",
      dueDate: "Mon, 01 Apr 2024 17:00:35 GMT",
      completed: false
  },
  {
    author: {
        dateCreated: "Tue, 14 Apr 2024 16:58:44 GMT",
        email: "adonai.devs@gmail.com",
        firstName: "Adonai",
        id: 1,
        lastName: "Romero",
        username: "adonaione"
    },
    body: "Go to the Jemez Mountains to microdose Bufo.",
    dateCreated: "Tue, 16 Apr 2024 17:00:35 GMT",
    id: 4,
    title: "Father Blessing",
    dueDate: "Mon, 01 Apr 2024 17:00:35 GMT",
    completed: false
}
])

  const [searchTerm, setSearchTerm] = useState('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {

    const sortFunctions:Sorting = {
      idAsc: (a:ToDoType, b:ToDoType) => a.id - b.id,
      idDesc: (a:ToDoType, b:ToDoType) => b.id - a.id,
      titleAsc: (a:ToDoType, b:ToDoType) => a.title > b.title ? 1 : -1,
      titleDesc: (a:ToDoType, b:ToDoType) => b.title > a.title ? 1 : -1
  }
    const func = sortFunctions[e.target.value as keyof Sorting];
    const newSortedArr = [...todos].sort(func);
    setToDos(newSortedArr);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  const addNewToDo = (newToDoData: ToDoFormDataType) => {
    const author = {id: 1, firstName: 'Adonai', lastName: 'Romero', email: 'adonai.devs@gmail.com', username: 'adonaione', dateCreated: "Tue, 14 Apr 2024 16:58:44 GMT"}
    const newToDo: ToDoType = {...newToDoData, id:todos.length+1, dateCreated:new Date().toString(), author}
    setToDos([...todos, newToDo]);
    setShowForm(false);
  }

  return (
    <>
      <h1>The ToDo List by React</h1>
        <Button variant='primary' onClick={handleClick}>Click Me!</Button>
        <h2>{isLoggedIn ? `Welcome Back` : 'Please Log In or Sign Up'}</h2>
        <Row>
          <Col xs={12} md={8}>
            <Form.Control value={searchTerm} placeholder='Search ToDos' onChange={handleInputChange} />
          </Col>
          <Col>
            <Form.Select onChange={handleSelectChange}>
              <option>Choose Sorting Option</option>
              <option value="idAsc">Sort By ID ASC</option>
              <option value="idDesc">Sort By ID DESC</option>
              <option value="titleAsc">Sort By Title ASC</option>
              <option value="titleDesc">Sort By Title DESC</option>
            </Form.Select>
          </Col>
          <Col>
            <Button className='w-100' variant='success' onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide Form' : 'Add ToDo'}</Button>
          </Col>
        </Row>
        { showForm && <ToDoForm addNewToDo={addNewToDo}  /> }
        {todos.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase())).map( t => <ToDoCard key={t.id} todo={t} /> )}
    </>
  )
}

