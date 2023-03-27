import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {

    //Trabalhando com os posts:
    const [posts, setPosts] = useState([]);

    //Chamando os posts a partir de uma requisição get e guardando seu valor
    const getPosts = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = response.data;
            setPosts(data)
        } catch (error) {
            alert('erro')
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    //Trabalhando com os comentários
    const [coments, setComents] = useState([]);

    //Chamando os comentarios a partir de uma requisição get e guardando seu valor
    const getComents = async (postId) => {
        try {
            //const postId = 1;
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments"
            );
            const data = response.data;
            setComents(data)
        } catch (error) {
            alert('erro')
        }
    }

    useEffect(() => {
        getComents();
    }, []);


    //Trabalhando com a modal:
    const [showModal, setShowModal] = React.useState(false);

    //Retorno:
    return (
        <Container fluid="md">
            <Row>
                {posts.map(post => {
                    //Listando os posts em cards
                    return (
                        <Col>
                            <Card style={{ width: '18rem', marginTop: '2.5rem' }}>
                                <Card.Img variant="top" src="./src/assets/backgroundImage.png" />
                                <Card.Body>
                                    <div key={post.id}>
                                        <Card.Title>{post.id}-{post.title}</Card.Title>
                                        <Card.Text>{post.body}</Card.Text>


                                        <div>
                                            <Button className="modal-button" onClick={()=>
                                            {
                                                //Passando o ID do post correspondente para o método de consulta de comentarios da API
                                                const postId = post.id
                                                getComents(postId)

                                                //Chamando modal
                                                setShowModal(true)
                                                
                                            }
                                        }
                                            >
                                                Ver comentários</Button>
                                            <Modal size="lg" aria-labelledby="example-modal-sizes-title-lg" show={showModal}>
                                                <Modal.Header>
                                                    <Modal.Title>comentários</Modal.Title>
                                                    <Button onClick={() => setShowModal(false)}>
                                                        Fechar
                                                    </Button>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    
                                                    {coments.map(coment => {
                                                        //listagem dos comentários
                                                        return (
                                                            <>
                                                                <p>{coment.email}</p>
                                                                <p><b>{coment.name}</b> __ {coment.body}</p>
                                                            </>
                                                        )
                                                    })}
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button onClick={() => setShowModal(false)}>
                                                        Fechar
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}

            </Row>
        </Container>

    );
}

export default App;