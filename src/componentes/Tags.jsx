import Badge from 'react-bootstrap/Badge';

const Tags = (props) => {
return(
    <div>
    <Badge bg={props.bg}>{props.etiqueta}</Badge>
    </div>
);


}

export default Tags;