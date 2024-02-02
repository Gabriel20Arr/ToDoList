import { useEffect,useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

import { useTasks } from "../../contexts/taskContext"

import style from "./TaskFormPage.module.css"
import work from "/imgIconos/work-tools.png"
import study from "/imgIconos/study.png"
import leisure from "/imgIconos/masaje.png"
import temporary from "/imgIconos/reloj-de-arena.png"
import business from "/imgIconos/business-people.png"
import Default from "/imgIconos/reloj-de-pared.png"

export const TaskFormPage = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  const {  createTasks, taskById, UpdateTask, errores } = useTasks()
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado local para almacenar la categoría seleccionada
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    async function loadTask() {
      if(params.id){
        const task = await taskById(params.id)
        setValue('title', task.title)
        setValue("description", task.description)
        setValue("category", task.category)
      }
    } 

    loadTask()
  }, [])
  
  const onSubmit = handleSubmit( async (data) => {
    if(params.id) {
      await UpdateTask(params.id, data)
      // console.log(params.id, data);
    } else {
      await createTasks(data);
    }

      navigate('/');
  });

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const getCategoryNumber = () => {
    switch (selectedCategory) {
      case 'work':
        return <img src={work} alt="Work Icon" className={style.imgIconos} />;
      case 'study':
        return <img src={study} alt="Work Icon" className={style.imgIconos1} />;
      case 'leisure':
        return <img src={leisure} alt="Work Icon" className={style.imgIconos2} />;
      case 'temporary':
        return <img src={temporary} alt="Work Icon" className={style.imgIconos3} />;
      case 'bussines':
        return <img src={business} alt="Work Icon" className={style.imgIconos4} />;
      default:
        return <img src={Default} alt="Work Icon" className={style.imgIconos5} />;
    }
  };

  return (
    <div className={style.conteiner}>

    
      <form className={style.formC} onSubmit={onSubmit}>
        <div className={style.ContentCategory}>
            {getCategoryNumber()}
        </div>

        <div className={style.ContentErerrors}>
          { errores[0] ? <span className={style.errores2}>
            🔒 {errores[0]}
            </span> : ''
          }
        </div>

        <h1 className={style.title}> New Task </h1>
        <input 
          type="text"
          placeholder="Title"
          {...register('title', {required: true})} 
          autoFocus
          className={style.inputs}
        />
          { errors.title ?
            <span className={style.errores2}>🔒 Title {errors.title.type}</span>
            : ''
          }

        <section id="category">
          <select 
            className={style.inputs} 
            {...register('category', {required: true})}
            value={selectedCategory} 
            onChange={handleCategoryChange}
          >
            <option value="" hidden>category</option>
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="leisure">Leisure</option>
            <option value="temporary">Temporary</option>
          </select>
        </section>

          { errors.category ?
            <span className={style.errores2}>🔒 Category {errors.category.type}</span>
            : ''
          }
        
        <textarea 
          placeholder="Description"
          {...register('description', {required: true})}
          className={style.inputs2}
        ></textarea>
          { errors.description ?
            <span className={style.errores2}>🔒 Description {errors.description.type}</span>
            : ''
          }

          <button className={style.btn} > Save </button>
      </form>

    </div>
  )
}
