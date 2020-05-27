import React, { useState, useEffect } from "react"
import localForage from "localforage"
import sweetData from "../data/sweets.json"

export default function Basket() {
  const [orderedSweets, setOrderedSweets] = useState([])
  const filterById = id => {
    return sweetData.filter(sweetData => {
      return sweetData["id"] == id
    })[0]
  }

  useEffect(async () => {
    const currentOrder = (await localForage.getItem("currentOrder")) || []
    setOrderedSweets(currentOrder)
  }, [])

  return (
    <div>
      <h1>Here</h1>
      {console.log(orderedSweets)}
      <p>
        {orderedSweets.map(sweet => (
          <>
            <p>{filterById(sweet.id).type}</p>
            <p>{sweet.quantity}</p>
          </>
        ))}
      </p>
    </div>
  )
}
