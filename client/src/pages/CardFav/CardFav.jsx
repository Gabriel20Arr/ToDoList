import { useFav } from "../../contexts/FavContext"
import imgX from "/imgTests/boton-eliminar-3.png"

import style from "./CardFav.module.css"
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

export const CardFav = ({ fav }) => {
  const { deletFav} = useFav()

  const handlerDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: '',
        text: 'Sure to delete the task?',
        position: "top",
        icon: 'warning',
        confirmButtonColor: '#3498db',
        showCancelButton: true
      })

      if(result.isConfirmed) {
        const res = await deletFav(id)
      }
      
      } catch (error) {
        console.error('Error:', error);
    }
 }

  return (
    <div className={style.container0}>
      <div className={style.Fav}>
        <div className={style.Cheader}>
          <div className={style.Ctitle}>
              <h2 className={style.tittle}> {fav.title} </h2>
          </div>
          <div className={style.Cbtns}>
            <img 
                src={imgX}
                className={style.btn} 
                onClick={()=> { handlerDelete(fav._id) }}
            />
          </div>
        </div>
        
        <p className={style.description} > 
          {fav.description} 
        </p>
        
        <div className={style.contentDataBtn}>
          <p className={style.date}> {new Date(fav.date).toLocaleDateString()} </p>
        </div>
      </div>
    </div>
  )
}
