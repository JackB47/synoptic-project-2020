import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import SweetInputGroup from "../sweet-input-group"

export default function SweetCard({ currentSweet }) {
  const [sweet, setSweet] = useState({
    id: "",
    type: "",
    price: "",
    imageUrl: "",
  })

  // Update the sweet data when the currentSweet prop is available
  useEffect(() => {
    const { id, type, pricePerGram, imageUrl } = currentSweet
    setSweet({
      type,
      price: pricePerGram,
      imageUrl,
      id,
    })
  }, [currentSweet])

  return (
    <div className="sweet-card">
      <div>
        <img
          className="sweet-card__image"
          alt={`Stock example of ${sweet.type}`}
          src={sweet.imageUrl}
        />
        <div>
          <Link to={`/product/${sweet.id}`}>{sweet.type}</Link>
          <p>&pound;{sweet.price}/gram</p>
        </div>
        <SweetInputGroup sweet={sweet} />
      </div>
    </div>
  )
}

SweetCard.propTypes = {
  currentSweet: PropTypes.shape.isRequired,
}
