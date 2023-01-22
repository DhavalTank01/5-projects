import React, { useReducer, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }
  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  const initialState = 0;
  //   use reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <nav className="  bg-light text-center">
        <h3 className=" p-2 text-capitalize text-center">
          Appliation of Hooks
        </h3>
      </nav>
      <div className="container-md ">
        <div className="container-fluid ">
          <div className="container">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="mydata"
                  >
                    {state}
                  </Typography>
                  <div className="btns">
                    <Button
                      variant="outlined"
                      className="btn1"
                      onClick={() => {
                        dispatch({ type: "INCR" });
                      }}
                    >
                      <AddIcon />
                    </Button>
                    <Button
                      variant="outlined"
                      className="btn2"
                      onClick={() => {
                        dispatch({ type: "DECR" });
                      }}
                    >
                      <RemoveIcon />
                    </Button>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
