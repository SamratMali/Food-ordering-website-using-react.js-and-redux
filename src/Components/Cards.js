import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import "./Style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../Redux/actions/action";
import Categories from "./Categoriesdata";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  // console.log(data);
  const [Cdata, CsetData] = useState(Categories);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      <div
        style={{
          width: "100rem",
          height: "28rem",
          border: "none",
          borderRadius: "20px",
          backgroundImage: "url('./b6.jpg')",
          marginTop: "1rem",
          marginLeft: "6rem",
        }}
        className=" "
      >
        <div className="" style={{ display: "flex" }}>
          <div className="flex">
            <p
              className="text-5xl text-white"
              style={{
                fontSize: "5rem",
                margin: "2rem",
                fontFamily: "fantasy",
              }}
            >
              Crafting your Exceptional Dining
            </p>
            <Button
              style={{
                fontSize: "5rem",
                margin: "2rem",
                marginLeft: "3rem",
                padding: "1rem",
                fontFamily: "fantasy",
                borderRadius: "2rem",
              }}
              variant="success"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <h2 className="" style={{ fontSize: "5rem", margin: "6rem" }}>
        Our Categories
      </h2>
      {/* Categories */}
      <div className="" style={{ display: "flex", marginLeft: "4rem" }}>
        {Cdata.map((element, id) => {
          return (
            <>
              <div
                className=" cat_items"
                style={{
                  display: "flex",
                  marginLeft: "4rem",
                  cursor: "pointer",
                  padding: "1rem",
                  borderRadius: "2rem",
                  boxShadow: "9rem",
                }}
              >
                <div className=" ">
                  <img
                    style={{ height: "6rem", borderRadius: "20px" }}
                    src={element.img}
                    alt=""
                  ></img>
                </div>
                <div
                  style={{
                    fontSize: "1.3rem",
                    fontFamily: "fantasy",
                    marginTop: "1rem",
                    marginLeft: "1rem",
                  }}
                >
                  <div className="">
                    <i>{element.Cname}</i>
                  </div>
                  <div>
                    <i>{element.items}</i>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div
        className=" mt-3 "
        style={{ margin: "5rem", justifyContent: "space-around" }}
      >
        <div
          className="row flex"
          style={{ margin: "", justifyContent: "space-around" }}
        >
          {data.map((element, id) => {
            return (
              <>
                <Card
                  style={{
                    width: "20rem",
                    height: "28rem",
                    border: "none",
                    borderRadius: "20px",
                  }}
                  className="mx-2 mt-4 card_style"
                >
                  <Card.Img
                    variant="top"
                    src={element.imgdata}
                    style={{ height: "16rem", borderRadius: "20px" }}
                    className="mt-3"
                  />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>Price : ₹ {element.price}</Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <Button
                        variant="warning"
                        onClick={() => send(element)}
                        className="col-lg-12 text-white"
                        style={{ borderRadius: "30px" }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
