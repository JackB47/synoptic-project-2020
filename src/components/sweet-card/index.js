import React, { useEffect, useState } from "react"
import localForage from "localforage"
import Button from "../button"
import Input from "../input"
import { Link } from "gatsby"

export default function SweetCard({ currentSweet }) {
  const [sweet, setSweet] = useState({
    id: "",
    type: "",
    price: "",
    imageUrl: "",
  })
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const { id, type, pricePerGram, imageUrl } = currentSweet
    setSweet({
      type,
      price: pricePerGram,
      imageUrl,
      id,
    })
  }, [currentSweet])

  const handleQuantityChange = change => {
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

  const handleSubmit = async (e, sweet) => {
    e.preventDefault()
    const currentOrder = (await localForage.getItem("currentOrder")) || []
    if (quantity > 0) {
      if (currentOrder.find(item => item.id === currentSweet.id)) {
        currentOrder.find(
          item => item.id === currentSweet.id
        ).quantity += quantity
      } else {
        currentOrder.push({ id: currentSweet.id, quantity })
      }

      setQuantity(0)
      return localForage.setItem("currentOrder", currentOrder)
    }
  }

  return (
    <div className="sweet-card">
      <div>
        <img className="sweet-card__image" src={sweet.imageUrl} />
        <div>
          <Link to={`/product/${sweet.id}`}>{sweet.type}</Link>
          <p>&pound;{sweet.price}/gram</p>
        </div>
        <div className="sweet-card__input-group">
          <div>
            <Button
              variant="pink"
              isRound
              onClick={() => handleQuantityChange("dec")}
            >
              &minus;
            </Button>
          </div>
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
              onClick={() => handleQuantityChange("inc")}
            >
              &#43;
            </Button>
          </div>
        </div>
        <div>
          <Button
            disabled={quantity <= 0}
            type="submit"
            onClick={e => handleSubmit(e, sweet.type)}
          >
            Add to Basket
          </Button>
        </div>
      </div>
    </div>
  )
}
