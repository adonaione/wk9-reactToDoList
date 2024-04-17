import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { ToDoFormDataType } from '../types';


type ToDoFormProps = {
    addNewToDo: (data: ToDoFormDataType) => void
}

export default function ToDoForm({ addNewToDo}: ToDoFormProps) {
    const [newToDo, setNewToDo] = useState<ToDoFormDataType>({
        title: '',
        body: '',
        dueDate: '',
        completed: false
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.name, event.target.value);
        setNewToDo({
            ...newToDo,
            [event.target.name]: event.target.value
        });
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addNewToDo(newToDo)
    }

    return (
        <Card className='my-3'>
            <Card.Body>
                <h3 className="text-center">Create New ToDo</h3>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control name='title' placeholder='Enter New ToDo Title' value={newToDo.title} onChange={handleInputChange} />
                    <Form.Label>Body</Form.Label>
                    <Form.Control name='body' placeholder='Enter New ToDo Body' value={newToDo.body} onChange={handleInputChange} />
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control name='dueDate' placeholder='Enter New ToDo Due Date' value={newToDo.dueDate} onChange={handleInputChange} />
                    <Button className='mt-3 w-100' variant='success' type='submit'>Create ToDo</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}