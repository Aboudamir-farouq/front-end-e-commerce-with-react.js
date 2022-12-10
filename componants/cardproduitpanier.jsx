import React from "react";
import {Button, Card } from "react-bootstrap";

class Cardproduitpanier extends React.Component{
    render(){
        return (
            <Card id={this.props.id} className="m-3 p-3">
                <Card.Img variant="top" src={this.props.src} style={{width:"150px"}} className="mb-3"/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.price}</Card.Text>
                    <Button variant="danger" onClick={this.props.delclickhandler}>Supprimer du panier</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Cardproduitpanier;