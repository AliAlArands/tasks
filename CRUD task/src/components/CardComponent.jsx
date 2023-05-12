import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Title } from "./shared/StyledComponents";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CardComponent({ data, deleteProduct }) {
  const navigate = useNavigate();

  const update = (productId) => {
    navigate(`/update-product/${productId}`);
  };

  
  return (
    <Card className="mt-5">
      {data?.images ? <Card.Img variant="top" src={data?.images[0]} /> : null}

      <Card.Body>
        <Title>{data.title}</Title>
        <Card.Text>{data.description}</Card.Text>
        <Button className="mx-1" variant="primary">Go somewhere</Button>
        <Button className="mx-1" variant="secondary" onClick={() => update(data.id)}>
          Update
        </Button>
        <Button className="mx-1" variant="danger" onClick={() => deleteProduct(data.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
