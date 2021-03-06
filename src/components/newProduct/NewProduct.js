import SaveIcon from "@mui/icons-material/Save";
import { Checkbox, FormControlLabel } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Layout } from "components";
import { URL } from "config/url";
import React from "react";

const NewProduct = () => {
  const [product, setProduct] = React.useState({
    name: "",
    category: "",
    price: 0,
    priceS: null,
    priceM: null,
    priceL: null,
    procentege: 0,
    priceSizes: [],
    description: "",
    story: "",
    sell: false,
    images: null,
    formData: new FormData(),
    loading: false,
  });
  const categories = [
    { name: "Lorem Ipsum", id: 1 },
    { name: "Laudantium veritatis", id: 2 },
    { name: "Quidem nostrum", id: 3 },
  ];
  const {
    name,
    category,
    price,
    procentege,
    priceS,
    priceM,
    priceL,
    description,
    story,
    sell,
    formData,
    loading,
  } = product;

  const handleChange = (props, event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setProduct({ ...product, [props]: value });
    if (event.target.type === "file") {
      Object.values(event.target.files).forEach((el) => {
        formData.append("images", el);
      });
    } else {
      formData.set(props, value);
    }
  };

  const onSubmit = async () => {
    formData.set("priceSizes", [priceS, priceM, priceL]);
    setProduct({ ...product, loading: true });
    try {
      const res = await axios.post(`${URL}/products/add/azgarden`, formData);
      if (res.data?.success) {
        setProduct({ ...product, loading: false });
        console.log(res.data);
        alert("Success");
      }
    } catch (e) {
      setProduct({ ...product, loading: false });
    }
  };

  return (
    <Stack spacing={2}>
      <TextField
        fullWidth
        value={name}
        label="Product Name"
        onChange={(e) => handleChange("name", e)}
        variant="outlined"
      />
      <FormControl fullWidth>
        <InputLabel id="product-category">Product Category</InputLabel>
        <Select
          labelId="product-category"
          id="product-category"
          value={category}
          label="Product Category"
          onChange={(e) => handleChange("category", e)}
        >
          {categories.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Stack direction="row" spacing={2}>
        <TextField
          fullWidth
          label="Product Price"
          variant="outlined"
          onChange={(e) => handleChange("price", e)}
          type="number"
          value={price}
          sx={{ flex: 2 }}
        />
        <TextField
          fullWidth
          label="Percentage"
          variant="outlined"
          onChange={(e) => handleChange("procentege", e)}
          type="number"
          value={procentege}
          sx={{ flex: 1 }}
        />
      </Stack>
      <Stack direction={{xs: "column", md: "row"}} spacing={2}>
        <TextField
          fullWidth
          label="Product Price - S"
          variant="outlined"
          onChange={(e) => handleChange("priceS", e)}
          type="number"
          value={priceS}
        />
        <TextField
          fullWidth
          label="Product Price - M"
          variant="outlined"
          onChange={(e) => handleChange("priceM", e)}
          type="number"
          value={priceM}
        />
        <TextField
          fullWidth
          label="Product Price - L"
          variant="outlined"
          onChange={(e) => handleChange("priceL", e)}
          type="number"
          value={priceL}
        />
      </Stack>
      <TextField
        fullWidth
        label="Product Description"
        variant="outlined"
        onChange={(e) => handleChange("description", e)}
        multiline
        value={description}
        rows={3}
      />
      <TextField
        fullWidth
        label="Product Story"
        variant="outlined"
        onChange={(e) => handleChange("story", e)}
        multiline
        value={story}
        rows={6}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={sell}
            onChange={(e) => handleChange("sell", e)}
            name="gilad"
          />
        }
        label="Sell"
      />
      <input type="file" multiple onChange={(e) => handleChange("images", e)} />
      <Box>
        <Button
          variant="contained"
          onClick={onSubmit}
          sx={{ px: 4, py: 2 }}
          startIcon={<SaveIcon />}
        >
          {loading ? "Loading..." : "Save"}
        </Button>
      </Box>
    </Stack>
  );
};

export default NewProduct;
