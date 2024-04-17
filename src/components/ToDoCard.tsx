import { ToDoType } from '../types'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


type ToDoCardProps = {
    todo: ToDoType,
    completed: boolean,
    handleClick: () => void
}

export default function ToDoCard({ todo, completed, handleClick }: ToDoCardProps) {
    
    // const changeCompleteStatus = useState('false');
    
    return (
        <Card className='my-3 bg-custom' text='white'>
            <Card.Header>{ todo.dateCreated }</Card.Header>
            <Card.Body>
                <Card.Title>{ todo.title }</Card.Title>
                {/* <Card.Subtitle>{ todo.author.username }</Card.Subtitle> */}
                <Card.Text>{ todo.body }</Card.Text>
                <Card.Text>{ todo.dueDate }</Card.Text>
                <Card.Text>{completed ? `Complete` : 'Incomplete'}</Card.Text>
                {/* create a button that toggles complete and incomplete */}
                <Button variant='primary' onClick={handleClick}>Change Completion Status</Button>
            </Card.Body>
            <Card.Footer className='bg-custom2'>
                <small className="text-muted">Author: {todo.author.username}</small>
            </Card.Footer>
        </Card>
    )
}
