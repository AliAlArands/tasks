import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const { default: CardComponent } = require("./CardComponent");

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (!cards.length) {
      axios
        .get("http://localhost:3000/products", {
          headers: {
            authorization: localStorage.getItem("accessToken"),
          },
        })
        .then((res) => setCards(res.data));
    }
  }, []);
  // console.log(cards);
  const deleteProduct = (productId) => {
    axios.delete(`http://localhost:3000/products/${productId}`, {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => {console.log(res.data); setCards(res.data.products)});
    // setCards
  };
  return (
    <div className="container my-5">
      <div className="row">
        {cards.map((card) => {
          // console.log(card.id)
          return (
            <div className="col-md-4" key={card.id}>
              {cards.length && <CardComponent data={card}  deleteProduct={deleteProduct}/>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
