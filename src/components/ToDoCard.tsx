import { ToDoType } from '../types'
import Card from 'react-bootstrap/Card';

type ToDoCardProps = {
    todo: ToDoType
}

export default function ToDoCard({ todo }: ToDoCardProps) {
    console.log(todo);
    return (
        <Card className='my-3 bg-custom' text='white'>
            <Card.Header>{ todo.dateCreated }</Card.Header>
            <Card.Body>
                <Card.Title>{ todo.title }</Card.Title>
                {/* <Card.Subtitle>{ todo.author.username }</Card.Subtitle> */}
                <Card.Text>{ todo.body }</Card.Text>
            </Card.Body>
            <Card.Footer className='bg-custom2'>
                <small className="text-muted">Author: {todo.author.username}</small>
            </Card.Footer>
        </Card>
    )
}
