import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container, Row, Col, Card } from "react-bootstrap"
import cart from "./cart" // link to cart here
import merch from "./merch" // link to merch here
import StoreNav from "../components/StoreNav"
import "../styling/store.css"

// each item id represents an item and its size
// when adding items to the cart, check cart for item by id
// update quantity of item if item is found, else add to cart
// id or sku should look like 0-00-0 (hat-typeOfHat-small), 0-00-1 (hat-typeOfHat-medium), etc...

class Store extends React.Component {
  state = {
    // pass to cart and merch
    cart: [],
    item: {
      id: "",
      quantity: 0,
    },
    itemView: [],
    clotheView: "hat",
  }

  pushItem = () => {
    // pass to merch
    // push item to cart array
  }

  showItems = () => {
    // get sku list from database according to clotheView variable
    // assign sku list to itemView
    // map through sku list and get first item pic from each unique sku by first 2 numbers
    // display each item as card
    // each card gets a link to merch
    return <div>hello showItems</div>
  }

  toggleItemView = ({ target: { id } }) => {
    // pass to StoreNav
    console.log(" value", id)
    this.setState({ clotheView: id })
  }

  render() {
    return (
      <Layout>
        <StoreNav
          selected={this.state.clotheView}
          toggleItemView={this.toggleItemView}
        />
        <Container className="merchDisplay">holy goddami shi cid</Container>
        <Link className="cartLink" to="cart">
          <i class="fas fa-shopping-cart" />
        </Link>
      </Layout>
    )
  }
}

export default Store
