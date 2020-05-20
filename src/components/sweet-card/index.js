import React, { useEffect, useState } from "react"

export default function SweetCard({ currentSweet }) {
  const [sweet, setSweet] = useState({ type: "", price: "" })
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const { type, pricePerGram } = currentSweet
    setSweet({
      type,
      price: pricePerGram,
    })
  }, [currentSweet])

  const handleQuantityChange = change => {
    console.log(quantity)
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

  const handleSubmit = (e, sweet) => {
    e.preventDefault()
    localStorage.setItem(("currentOrder"[sweet] = quantity))
  }

  return (
    <div
      style={{
        textAlign: "center",
        flex: "0 0 18%",
        marginBottom: 40,
        marginRight: 40,
      }}
    >
      <div>
        <img src="https://picsum.photos/200" />
        <div>
          <p>{sweet.type}</p>
          <p>&pound;{sweet.price}/gram</p>
        </div>
        <div>
          <button type="button" onClick={() => handleQuantityChange("dec")}>
            -1
          </button>
          <input
            min={0}
            type="number"
            defaultValue={0}
            value={quantity}
            onChange={handleInputChange}
          />
          <button type="button" onClick={() => handleQuantityChange("inc")}>
            +1
          </button>
          <div>
            <button type="submit" onClick={e => handleSubmit(e, sweet.type)}>
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
