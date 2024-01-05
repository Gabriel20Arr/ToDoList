import { useForm } from "react-hook-form"
import { useTasks } from "../../contexts/taskContext"

import style from "./TaskFormPage.module.css"

export const TaskFormPage = () => {
  const { register, handleSubmit } = useForm()
  const {  createTasks } = useTasks()
  
  const onSubmit = handleSubmit((data) => {
    createTasks(data);
  });

  return (
    <div className={style.conteiner}>
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
