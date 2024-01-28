import { useEffect } from "react"
import { useFav } from "../../contexts/FavContext"
import { CardFav } from '../CardFav/CardFav'

import style from "./Favorite.module.css"

export const Favorite = () => {
  const { AllFav, fav } = useFav()

  // console.log("Fav", Fav);

  useEffect(() => {
    AllFav()
  }, [])
  
  return (
    <div className={style.container}>
    <h1 className={style.title}>⭐ Favorite ⭐</h1>
    <div className={style.container0}>
      { 
        fav?.map((fav) => (
          <CardFav fav={fav} key={fav._id}/>
        ))
      }
    </div>
    </div>
  )
}
