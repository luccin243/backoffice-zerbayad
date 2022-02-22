import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import {
  Stack,
  Grid,
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link,
  CircularProgress,
  Button,
  Card,
  List,
  ListItem,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";

import { useNavigate, useParams  } from 'react-router-dom'

import { getOrder } from "../../redux/actions/orderActions";

function Order(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const  { id } = useParams();

  const order = useSelector((state) => state?.orders?.order);

  useEffect(() => {
    dispatch(getOrder(id));
  }, []);

  return (
    <div>
      <Button
        onClick={() => navigate('/orders')}
        variant="contained"
        color="primary"
      >
        Go Back
      </Button>
      <Typography component="h5" variant="h5" align="center">
        Order Number : {order.data && order.data._id}
      </Typography>
       
       <Stack spacing={4}>
       <Card>
            <List>
              <ListItem>
                <Typography component="h4" variant="h4">
                  Order Items
                </Typography>
              </ListItem>
              <ListItem>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {order.data &&
                        order.data.product.map((item) => (
                          <TableRow key={item._id}>
                            <TableCell>
                              <img
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                              ></img>
                            </TableCell>

                            <TableCell>
                              <Typography>{item.name}</Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>{item.quantity}</Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>{item.price}</Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </ListItem>
            </List>
          </Card>

          <Card>
              <List>
                <ListItem>
                  <Typography component="h4" variant="h4">
                    Shipping Address
                  </Typography>
                </ListItem>
                <ListItem>
                  {order.data && (
                    <Typography variant="5">{order.data.name} </Typography>
                  )}
                </ListItem>
                <ListItem>
                  {order.data && (
                    <Typography variant="h6">
                      {" "}
                      {order.data.city} {order.data.postalcode}{" "}
                      {order.data.country}{" "}
                    </Typography>
                  )}
                </ListItem>
                <ListItem>
                  {order.data && (
                    <Typography variant="h6"> {order.data.phone}</Typography>
                  )}
                </ListItem>
                <ListItem>
                  {order.data && (
                    <Typography variant="h6"> {order.data.email}</Typography>
                  )}
                </ListItem>
              </List>
            </Card>

       </Stack>

        
    </div>
  );
}

export default Order;
