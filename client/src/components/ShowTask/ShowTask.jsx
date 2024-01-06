import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTasks } from '../../contexts/taskContext';

export const ShowTask = () => {
  const params = useParams();
  const { taskById } = useTasks();
  const [dataTask, setData] = useState([])

  useEffect(() => {
    async function Task() {
        if(params.id) {
            const res = await taskById(params.id)
            setData(res)
            // console.log(res);
        }
    }

    Task()
  }, []);

  return (
    <div className='text-black' id='showTask'>
      { dataTask ? (
        <div>
          <h2>{dataTask.title}</h2>
          <p>{dataTask.description}</p>
          {
            dataTask.date ? (
                <span>{new Date(dataTask.date).toLocaleDateString()}</span>
            ) : (
                ''
            )
          }
        </div> 
        ) : (
            <p>Loading task...</p>
        )
      }
    </div>
  );
};
