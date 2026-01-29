import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { PortfolioContext } from '../../context/PortfolioContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const { login } = useContext(PortfolioContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Dummy login logic
        login(username || 'User');
        navigate('/builder');
    };

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", background: "var(--bg-primary-light)", color: "var(--text-primary-light)" }}>
            <Card style={{ width: '400px', padding: '2rem', background: "var(--bg-card-light)", backdropFilter: "blur(15px)", border: "1px solid var(--border-light)", boxShadow: "0 8px 32px var(--shadow-light)" }} className="shadow-lg">
                <Card.Body>
                    <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>Portfolio Login</h2>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid var(--border-light)", color: "inherit" }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 1), rgba(139, 92, 246, 1))", border: "none" }}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
