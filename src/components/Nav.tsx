import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


type NavigationProps = {
    isLoggedIn: boolean
}

export default function Navigation({ isLoggedIn }: NavigationProps){

    const [backgroundTheme] = useState('dark');
    
    return (
        <Navbar expand='lg' data-bs-theme={backgroundTheme} bg={backgroundTheme}>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>ToDo List</Navbar.Brand>
                <Navbar.Toggle aria-controls='nav-collapse' />
                <Navbar.Collapse id='nav-collapse'>
                    <Nav className='me-auto'>
                        {isLoggedIn ? (
                            <>
                                <Nav.Link href='/'>Create ToDo</Nav.Link>
                                <Nav.Link href='/'>Log Out</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
                                <Nav.Link href='/'>Log In</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
