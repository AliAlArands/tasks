import { Button, Container, Form } from "react-bootstrap";
import "./../App.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function AddProduct() {
  const { productId } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  const updateProduct = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://localhost:3000/products/${productId}`,
        {

          id : productId,
          title,
          description,
        },
        {
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          navigate("/home");
        }
      });
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={updateProduct} style={{ width: "800px", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Enter Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>description</Form.Label>
          <Form.Control
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="description"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
