import {Alert, Button} from 'react-bootstrap';

function ValiderPanier(props){
    return (
        <Alert id='validate' className='m-3' variant='success'>
            <Button variant="success">Valider le panier</Button>
        </Alert>
    );
}

export default ValiderPanier;