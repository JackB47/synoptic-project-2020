import React, { useEffect, useState } from "react"
import localForage from "localforage"
import Button from "../button"
import Input from "../input"
import { Link } from "gatsby"
import SweetInputGroup from "../sweet-input-group"

export default function SweetCard({ currentSweet }) {
  const [sweet, setSweet] = useState({
    id: "",
    type: "",
    price: "",
    imageUrl: "",
  })

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
        <img className="sweet-card__image" src={sweet.imageUrl} />
        <div>
          <Link to={`/product/${sweet.id}`}>{sweet.type}</Link>
          <p>&pound;{sweet.price}/gram</p>
        </div>
        <SweetInputGroup sweet={sweet} />
      </div>
    </div>
  )
}
