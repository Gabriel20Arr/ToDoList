import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

import { useTasks } from "../../contexts/taskContext"

import style from "./TaskFormPage.module.css"

export const TaskFormPage = () => {
  const { register, handleSubmit, setValue } = useForm()
  const {  createTasks, taskById, UpdateTask } = useTasks()
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

  return (
    <div className={style.conteiner}>
    <div className={style.conteinerBtn}>
      <button onClick={goBack} className={style.btnBack}>Go back</button>
    </div>
    
      <form className={style.formC} onSubmit={onSubmit}>
        <h1 className={style.title}> New Task </h1>
        <input 
          type="text"
          placeholder="Title"
          {...register('title')} 
          autoFocus
          className={style.inputs}
        />
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
