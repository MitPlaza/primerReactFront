import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
         {props.descripcion}
        </Card.Text>
        <Tags bg={props.bg} etiqueta={props.etiqueta}/>
      </Card.Body>
    </Card>
  );
}

export default MyCard;