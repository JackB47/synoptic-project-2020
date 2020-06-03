import React, { useState, useEffect } from "react"
import localForage from "localforage"

import deliveryData from "../data/delivery.json"
import sweetData from "../../sweets.json"
import Layout from "../components/layout"
import Button from "../components/button"
import SEO from "../components/seo"

export default function Basket() {
  const [orderedSweets, setOrderedSweets] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [postage, setPostage] = useState(0)
  const [grossWeight, setGrossWeight] = useState(0)
  const filterById = id => {
    return sweetData.filter(sweetData => {
      return sweetData["id"] === id
    })[0]
  }

  async function getCurrentOrder() {
    const currentOrder = (await localForage.getItem("currentOrder")) || []
    setOrderedSweets(currentOrder)
  }

  useEffect(() => {
    getCurrentOrder()
  }, [])

  useEffect(() => {
    let subtotal = subTotal
    const prices = orderedSweets.map(
      sweet =>
        filterById(sweet.id).pricePerGram *
        (sweet.quantity * filterById(sweet.id).weight)
    )

    for (let i = 0; i < prices.length; i++) {
      subtotal = subtotal + prices[i]
      setSubTotal(subtotal)
    }
  }, [orderedSweets])

  useEffect(() => {
    let grossweight = grossWeight
    const weights = orderedSweets.map(
      sweet => filterById(sweet.id).weight * sweet.quantity
    )

    for (let i = 0; i < weights.length; i++) {
      grossweight = grossweight + weights[i]
      setGrossWeight(grossweight)
    }
  }, [orderedSweets])

  useEffect(() => {
    deliveryData.map(
      weightBracket =>
        grossWeight > weightBracket.minWeight &&
        grossWeight <= weightBracket.maxWeight &&
        setPostage(weightBracket.price)
    )
  }, [grossWeight, subTotal])

  const handleCheckout = () => {
    if (grossWeight < 40) {
      return alert(
        "The minimum weight for delivery is 40g, please add more before proceeding to checkout"
      )
    }

    alert("Thank you for ordering")
    localForage.clear()
  }

  return (
    <Layout>
      <SEO title="Basket Page" />
      <div style={{ maxWidth: 600 }}>
        <h1 className="title">Your Basket</h1>
        <table className="table" cellSpacing={12}>
          <thead className="table__head">
            <tr>
              <td>Item</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {orderedSweets.length > 0 &&
              orderedSweets.map(sweet => {
                const price =
                  filterById(sweet.id).pricePerGram *
                  (sweet.quantity * filterById(sweet.id).weight)
                return (
                  <tr>
                    <td className="table__cell-title">
                      {filterById(sweet.id).type}
                    </td>
                    <td>{sweet.quantity}</td>
                    <td>&pound;{price.toFixed(2)}</td>
                  </tr>
                )
              })}

            <tr>
              <td colSpan={3} className="table__divider"></td>
            </tr>
            <tr>
              <td className="table__cell-title">Sub-total</td>
              <td />
              <td>&pound;{subTotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="table__cell-title">Gross Weight</td>
              <td />
              <td>
                {grossWeight > 1000
                  ? `${(grossWeight / 1000).toFixed(2)}kg`
                  : `${grossWeight}g`}
              </td>
            </tr>
            <tr>
              <td className="table__cell-title">Postage &amp; Packaging</td>
              <td />
              <td>&pound;{postage}</td>
            </tr>
            <tr>
              <td colSpan={3} className="table__divider"></td>
            </tr>
            <tr>
              <td className="table__cell-title">Grand Total</td>
              <td />
              <td>&pound;{(subTotal + postage).toFixed(2)}</td>
            </tr>
            {grossWeight < 40 && (
              <tr>
                <td>The minimum weight for delivery is 40g</td>
              </tr>
            )}
          </tbody>
        </table>
        <div style={{ float: "right" }}>
          <Button onClick={handleCheckout}>Proceed to Checkout</Button>
        </div>
      </div>
    </Layout>
  )
}
