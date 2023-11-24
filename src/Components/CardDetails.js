import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, REMOVE } from "../Redux/actions/action";
import { ADD } from "../Redux/actions/action";

const CardDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getdata = useSelector((state) => state.cartreducer.carts);
  const history = useNavigate();

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  //remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };
  return (
    <div>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div
            className="iteamsdetails"
            style={{ marginTop: "6rem", borderRadius: "2rem" }}
          >
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img
                      style={{ paddingLeft: "3rem", borderRadius: "1rem" }}
                      src={ele.imgdata}
                      alt=""
                    />
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong>:{ele.rname}
                          </p>

                          <p>
                            <strong>Price</strong>:₹ {ele.price}
                          </p>

                          <p>
                            <strong>Dishes</strong>:{ele.address}
                          </p>

                          <p>
                            <strong>Total</strong>:₹ {ele.price * ele.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                ele.qnty <= 1
                                  ? () => dlt(ele.id)
                                  : () => remove(ele)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 24 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating:</strong>
                            <span
                              style={{
                                background: "green",
                                color: "fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating}
                            </span>
                          </p>
                          <p>
                            <strong>Order Review:</strong>
                            <span>{ele.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove:</strong>
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(ele.id)}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardDetails;
