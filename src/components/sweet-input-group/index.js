import React, { useState } from "react"
import localForage from "localforage"

import Button from "../button"
import Input from "../input"

export default function SweetInputGroup({ sweet, variant }) {
  const [quantity, setQuantity] = useState(0)

  // Increment or Decrement if buttons are clicked
  const handleButtonQuantityChange = change => {
    if (change === "dec" && quantity > 0) {
      return setQuantity(quantity - 1)
    } else if (change === "inc") {
      return setQuantity(quantity + 1)
    }

    return null
  }

  const handleInputChange = e => {
    setQuantity(parseInt(e.target.value))
  }

  // Add the current selected sweets to localForage
  const handleSubmit = async (e, sweet) => {
    e.preventDefault()
    const currentOrder = (await localForage.getItem("currentOrder")) || []
    if (quantity > 0) {
      if (currentOrder.find(item => item.id === sweet.id)) {
        currentOrder.find(item => item.id === sweet.id).quantity += quantity
      } else {
        currentOrder.push({ id: sweet.id, quantity })
      }

      setQuantity(0)
      return localForage.setItem("currentOrder", currentOrder)
    }
  }

  return (
    <>
      <div
        className={`sweet-card__input-group ${
          variant === "inline" && "sweet-card__input-group--spaced"
        }`}
      >
        <Button
          variant="pink"
          isRound
          onClick={() => handleButtonQuantityChange("dec")}
        >
          &minus;
        </Button>
        <Input
          className="sweet-card__input"
          isCentered
          min={0}
          type="number"
          defaultValue={0}
          value={quantity}
          onChange={handleInputChange}
        />
        <div>
          <Button
            variant="green"
            isRound
            onClick={() => handleButtonQuantityChange("inc")}
          >
            &#43;
          </Button>
        </div>
        {variant === "inline" && (
          <Button
            disabled={quantity <= 0}
            type="submit"
            onClick={e => handleSubmit(e, sweet)}
          >
            Add to Basket
          </Button>
        )}
      </div>
      <div>
        {variant !== "inline" && (
          <Button
            disabled={quantity <= 0}
            type="submit"
            onClick={e => handleSubmit(e, sweet)}
          >
            Add to Basket
          </Button>
        )}
      </div>
    </>
  )
}
