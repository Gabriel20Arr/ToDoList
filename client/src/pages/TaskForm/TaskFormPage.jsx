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

export const TaskFormPage = () => {
  const { register, handleSubmit, setValue } = useForm()
  const {  createTasks, taskById, UpdateTask } = useTasks()
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado local para almacenar la categoría seleccionada
  const navigate = useNavigate()
  const params = useParams()
  

  const goBack = () => {
    window.history.back();
  }

  useEffect(() => {
    async function loadTask() {
      if(params.id){
        const task = await taskById(params.id)
        setValue('title', task.title)
        setValue("description", task.description)
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
    
    navigate('/')
  });


    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };

    const getCategoryNumber = () => {
      switch (selectedCategory) {
        case 'work':
          return <img src={work} alt="Work Icon" style={{ height: "30px" }} />;
        case 'study':
          return <img src={study} alt="Work Icon" style={{ height: "30px" }} />;
        case 'leisure':
          return <img src={leisure} alt="Work Icon" style={{ height: "30px" }} />;
        case 'temporary':
          return <img src={temporary} alt="Work Icon" style={{ height: "30px" }} />;
        case 'bussines':
          return <img src={business} alt="Work Icon" style={{ height: "30px" }} />;
        default:
          return '';
      }
    };

  return (
    <div className={style.conteiner}>
      <div className={style.conteinerBtn}>
        <button onClick={goBack} className={style.btnBack}>Go back</button>
      </div>
    
      <form className={style.formC} onSubmit={onSubmit}>

        <div className={style.category}>
          {getCategoryNumber()}
        </div>

        <h1 className={style.title}> New Task </h1>
        <input 
          type="text"
          placeholder="Title"
          {...register('title')} 
          autoFocus
          className={style.inputs}
        />

        <section id="category">
          <select 
            className={style.inputs} 
            {...register('category')}
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
        
        <textarea 
          placeholder="Description"
          {...register('description')}
          className={style.inputs2}
        ></textarea>

        <button className={style.btn}> Save </button>
      </form>

    </div>
  )
}
