import { ToDoType } from '../types'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import todos from '../views/Home';

type ToDoCardProps = {
    todo: ToDoType
}

export default function ToDoCard({ todo }: ToDoCardProps) {
    
    // const changeCompleteStatus = useState('false');
    
    return (
        <Card className='my-3 bg-custom' text='white'>
            <Card.Header>{ todo.dateCreated }</Card.Header>
            <Card.Body>
                <Card.Title>{ todo.title }</Card.Title>
                {/* <Card.Subtitle>{ todo.author.username }</Card.Subtitle> */}
                <Card.Text>{ todo.body }</Card.Text>
                <Card.Text>{ todo.dueDate }</Card.Text>
                <Card.Text>{ todo.completed ? 'Completed' : 'Incomplete' }</Card.Text>
                {/* create a button that toggles complete and incomplete */}
                <Button onClick={() => changeCompleteStatus(todo.id)}>{ todo.completed ? 'Mark Incomplete' : 'Mark Complete' }</Button>
            </Card.Body>
            <Card.Footer className='bg-custom2'>
                <small className="text-muted">Author: {todo.author.username}</small>
            </Card.Footer>
        </Card>
    )
}
