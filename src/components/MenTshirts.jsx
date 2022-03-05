import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductError,
  getProductLoading,
  getShirtsDiscount,
  getShirtsFiltered,
  getShirtsSucess,
} from "../Store/Products/actions";
import styles from "./Product.module.css";
import { ProductCard } from "./ProductCard";

export const MenTshirts = () => {
  // const [tshirts, setTshirts] = useState([]);
  const [brandName, setBrandName] = useState([]);
  const [check, setCheck] = useState(false);
  const [sort, setSort] = useState("");
  let { loading, tshirts, error } = useSelector((state) => ({
    loading: state.product.loading,
    error: state.product.error,
    tshirts: state.product.shirt,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    dispatch(getProductLoading());
    fetch(`https://myntradb.herokuapp.com/men-t-shirts`)
      .then((r) => r.json())
      .then((r) => {
        dispatch(getShirtsSucess(r));
        let list = r.slice(0, 10).map((item) => item.brand_name);
        setBrandName(list);
      })
      .catch((e) => dispatch(getProductError(e)));
  };
  const handleFilters = (s) => {
    dispatch(getProductLoading());
    let filteredShirts = tshirts.filter((item) => item.brand_name === s);
    dispatch(getShirtsFiltered(filteredShirts));
  };
  const discount = (value) => {
    dispatch(getProductLoading());
    let list = tshirts.filter((item) => item.price.discount >= value);
    dispatch(getShirtsDiscount(list));
  };
  const sorting = (val) => {
    if (val === "high") {
      tshirts.sort((a, b) => b.customer_rating - a.customer_rating);
      setSort("high");
    } else {
      tshirts.sort((a, b) => a.customer_rating - b.customer_rating);

      setSort("low");
    }
  };
  return (
    <>
      {loading ? (
        <div style={{ width: "100px", margin: "auto" }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
        <div className={styles.body}>
          <div>
            <div style={{ float: "left" }} className={styles.upperDiv}>
              <p>
                Home/ Clothing/ <b>T-shirts For Men</b>
              </p>
              <b>T-shirts For Men</b>
            </div>
            <div
              className={styles.upperDiv2}
              style={{
                float: "right",
              }}
            >
              <div>
                <Box sx={{ minWidth: 120, height: 30 }}>
                  <FormControl fullWidth>
                    <InputLabel>Sort By</InputLabel>
                    <Select
                      value={sort}
                      label="Sort By"
                      onChange={(e) => sorting(e.target.value)}
                    >
                      <MenuItem value={"high"}>Rating High to Low</MenuItem>
                      <MenuItem value={"low"}>Rating Low to High</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>

          <div className={styles.filterDiv}>
            <b>FILTERS</b>
            <Button
              size="small"
              sx={{ padding: "0px", margin: "0px" }}
              onClick={(e) => {
                window.location.reload();
              }}
            >
              Clear
            </Button>
            <div className={styles.filterDiv1}>
              <div>
                <span style={{ fontWeight: "500" }}>CATEGORIES</span>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <input type="checkbox" />
                <label style={{ marginLeft: "1rem" }}>T-shirts</label>
              </div>
            </div>
            <div className={styles.filterDiv1}>
              <div>
                <span style={{ fontWeight: "500" }}>BRAND</span>
              </div>

              <div style={{ marginTop: "1rem" }}>
                {brandName.map((item, i) => (
                  <div
                    key={i}
                    style={{ marginTop: "0.2rem" }}
                    onChange={() => handleFilters(item)}
                  >
                    <input type="checkbox" onClick={(e) => setCheck(!check)} />
                    <label style={{ marginLeft: "1rem" }}>{item}</label>{" "}
                  </div>
                ))}
              </div>

              <div className={styles.filterDiv1}>
                <div>
                  <span style={{ fontWeight: "500" }}>PRICE</span>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input type="checkbox" />
                  <label style={{ marginLeft: "1rem" }}>
                    Rs. 269 to Rs. 1702
                  </label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input type="checkbox" />
                  <label style={{ marginLeft: "1rem" }}>
                    Rs. 1702 to Rs. 3135
                  </label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input type="checkbox" />
                  <label style={{ marginLeft: "1rem" }}>
                    Rs. 3135 to Rs. 4568
                  </label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input type="checkbox" />
                  <label style={{ marginLeft: "1rem" }}>
                    Rs. 4568 to Rs. 6001
                  </label>
                </div>
              </div>
              <div className={styles.filterDiv1}>
                <div>
                  <span style={{ fontWeight: "500" }}>DISCOUNT</span>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="10"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>10% and above</label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="20"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>20% and above</label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="30"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>30% and above</label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="40"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>40% and above</label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="50"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>50% and above</label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="60"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>60% and above</label>
                </div>
                <div style={{ marginTop: "0.3rem" }}>
                  <input
                    type="checkbox"
                    name="70"
                    onChange={(e) => discount(e.target.name)}
                  />
                  <label style={{ marginLeft: "1rem" }}>70% and above</label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            {tshirts.map((item) => (
              <div key={item.id}>
                <ProductCard {...item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
