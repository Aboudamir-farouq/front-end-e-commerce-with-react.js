import React from "react";
import {Button, Card, Modal } from "react-bootstrap";

class Cardproduct extends React.Component{
    render(){
        return (
            <>
                <Card className="m-3" style={{maxWidth:"90vw"}}>
                    <Card.Img variant="top" src={this.props.src} className="m-3" style={{width:"150px"}}/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text>{"prix : " + this.props.price + " DH"}</Card.Text>
                        <Card.Text>{"catégorie : " + this.props.category}</Card.Text>
                        <Button variant="primary" onClick={this.props.clickhandler}>Ajouter au panier</Button>
                        <Modal show={this.props.show}>
                            <Modal.Body>
                                <p>le produit a bien été ajouté au panier</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.props.hidemodalhandler}>ok</Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default Cardproduct;