import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Badge } from "@mui/material";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Style.css";
import { DLT } from "../Redux/actions/action";
import { useDispatch } from "react-redux";
import { LuCrown } from "react-icons/lu";
import { Button } from "bootstrap";

const Header = () => {
  const [price, setPrice] = useState(0);

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const Total = () => {
    let price = 0;
    getdata.map((ele, key) => {
      price = ele.price + price;
    });
    setPrice(price);
  };
  useEffect(() => {
    Total();
  }, [Total]);

  return (
    <div>
      <Navbar
        className=" "
        bg="dark"
        data-bs-theme="dark"
        style={{
          marginLeft: "90px",
          height: "100px",
          width: "90%",
          borderRadius: "0px 0px 30px 30px",
          position: "fixed",
          top: 0,
          zIndex: "1",
        }}
      >
        <Container>
          <i
            className="text-white flex justify-center float-left -mx-5  "
            style={{ fontSize: "50px", fontFamily: "fantasy" }}
          >
            Meal King <LuCrown style={{ color: "yellow" }} />
          </i>
          <NavLink
            to="/"
            className="text-decoration-none text-light mx-5 text-xl"
            style={{ fontFamily: "fantasy", fontSize: "20px" }}
          >
            Add to Cart
          </NavLink>
          <div
            className="bg-fuchsia-800"
            style={{ height: "50px", width: "50px" }}
          ></div>
          <Nav className="me-auto">
            <NavLink
              to="/"
              className="text-decoration-none text-light "
              style={{ fontFamily: "fantasy", fontSize: "20px" }}
            >
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, curser: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div className="" style={{ width: "25rem", padding: 10 }}>
              <table>
                <thead>
                  <tr
                    style={{
                      fontSize: "2rem",
                      textDecoration: "none",
                      fontFamily: "Agdasima",
                    }}
                  >
                    <th style={{ marginLeft: "2rem" }}>My Cart</th>
                  </tr>
                  <hr />
                </thead>

                <tbody style={{ fontFamily: "fantasy" }}>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{
                                  width: "5rem",
                                  height: "5rem",
                                  margin: "1rem",
                                  borderRadius: "1rem",
                                }}
                                alt=""
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price: ₹ {e.price}</p>
                            <p>Quantity: {e.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(e.id)}
                            >
                              <i className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>
                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}
                          >
                            <i className="fas fa-trash largetrash"></i>
                          </td>
                        </tr>
                        <hr />
                      </>
                    );
                  })}
                  <p className="text-center">Total: ₹ {price}</p>
                </tbody>
              </table>
              <button
                className=" text-white "
                style={{
                  background: "#f01543",
                  border: "none",
                  width: "15rem",
                  height: "3rem",
                  fontSize: "1.2rem",
                  borderRadius: "2rem",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Process to Checkout
              </button>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 22 }}>Your Cart is Empty</p>
              <img
                src="./cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
              <img src="public\dil1.png" alt="" />
            </div>
          )}
        </Menu>
      </Navbar>
    </div>
  );
};

export default Header;
