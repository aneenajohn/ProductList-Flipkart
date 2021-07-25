import axios from "axios";
import { useState, useEffect } from "react";
import { ProductTitle } from "./productTitle";
import "./productList.css";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useProduct } from "./productContext";
import { getFilteredData } from "../Filter/filter";
import { getSortedData } from "../Filter/sort";
import { isAddedInList, toggleActive } from "../utils/utils";

export default function ProductList() {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const {
    dispatch: productDispatch,
    sortBy,
    showInventoryAll,
    showFastDeliveryOnly
  } = useProduct();

  const useStyles = makeStyles({
    root: {
      width: 225
    },
    media: {
      height: 271
    }
  });
  const classes = useStyles();
  useEffect(() => {
    (async function () {
      try {
        setLoader(true);
        const { data } = await axios.get("http://localhost:3000/products");
        console.log(data);
        setProductsData(data);
        setLoader(false);
      } catch (err) {
        console.error(`Error happened ${err}`);
      }
    })();
  }, []);

  const sortedData = getSortedData(productsData, sortBy);

  const filteredData = getFilteredData(
    sortedData,
    showInventoryAll,
    showFastDeliveryOnly
  );

  console.log({ filteredData });
  return (
    <section className="container">
      <div
        className={isSelected ? "container__aside active" : "container__aside"}
        onClick={() => toggleActive(isSelected, setSelected)}
      >
        <div className="filter">
          <h1 className="filter-title">Filters</h1>
          <p
            className="filter--clear"
            onClick={() => productDispatch({ type: "CLEAR_FILTER" })}
          >
            CLEAR ALL
          </p>
          <div className="filter-head">
            <strong>SORT BY</strong>
          </div>
          <div className="filter-content-container">
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "PRICE_HIGH_TO_LOW"
                  })
                }
                checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
              ></input>
              Price - High to low
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "PRICE_LOW_TO_HIGH"
                  })
                }
                checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
              ></input>
              Price - Low to high
            </label>
          </div>
          <div className="filter-head">
            <strong>BRAND</strong>
          </div>
          <div className="filter-content-container">
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                checked={sortBy && sortBy === "All"}
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "All"
                  })
                }
              ></input>
              All
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "OPINA"
                  })
                }
              ></input>
              OPINA
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "VAN HEUSEN SPORT"
                  })
                }
              ></input>
              VAN HEUSEN SPORT
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "HELMONT"
                  })
                }
              ></input>
              HELMONT
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "HARPA"
                  })
                }
              ></input>
              HARPA
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "THE DRY STATE"
                  })
                }
              ></input>
              THE DRY STATE
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "Exortic Fashion"
                  })
                }
              ></input>
              Exortic Fashion
            </label>
          </div>
          <div className="filter-head">
            <strong>IDEAL FOR</strong>
          </div>
          <div className="filter-content-container">
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "Men"
                  })
                }
              ></input>
              Men
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "Women"
                  })
                }
              ></input>
              Women
            </label>
          </div>
          <div className="filter-head">
            <strong>SIZE</strong>
          </div>
          <div className="filter-content-container">
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "XS"
                  })
                }
              ></input>
              XS
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "S"
                  })
                }
              ></input>
              S
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "M"
                  })
                }
              ></input>
              M
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "L"
                  })
                }
              ></input>
              L
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "XL"
                  })
                }
              ></input>
              XL
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "XXL"
                  })
                }
              ></input>
              XXL
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="sort"
                className="filter-content"
                onChange={() =>
                  productDispatch({
                    type: "SORT",
                    payLoad: "3XL"
                  })
                }
              ></input>
              3XL
            </label>
          </div>
          <div className="filter-head">
            <strong>AVAILABILITY</strong>
          </div>
          <div className="filter-content-container">
            <label>
              <input
                type="checkbox"
                className="filter-content"
                checked={showInventoryAll}
                onChange={() => productDispatch({ type: "TOGGLE_INVENTORY" })}
              ></input>
              Include out of stock
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                className="filter-content"
                checked={showFastDeliveryOnly}
                onChange={() => productDispatch({ type: "TOGGLE_DELIVERY" })}
              ></input>
              Only fast Delivery
            </label>
          </div>
        </div>
      </div>

      <div className="container__main">
        <div className="product-list">
          <Grid container spacing={3} style={{ gap: 15 }}>
            {!isLoading &&
              filteredData.map((product) => {
                return (
                  <div key={product._id}>
                    <Grid item xs={12} sm={12} md={12} spacing={2}>
                      <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={product.imageUrl}
                          />
                        </CardActionArea>
                        <CardContent>
                          <Typography color="textSecondary">
                            {product.brand}
                          </Typography>
                          <Typography>
                            {<ProductTitle title={product.name} />}
                          </Typography>
                          <Typography>₹{product.discountedPrice}</Typography>
                          <Typography className="real-price">
                            ₹{product.realPrice}
                          </Typography>
                          <Typography>{product.offer}% off</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </div>
                );
              })}
          </Grid>
        </div>
      </div>
    </section>
  );
}
