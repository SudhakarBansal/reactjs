import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

const AddEntry = ({todos,settodos}) => {
  const navigate = useNavigate();

  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')


  const handleSubmit=(e)=>{
    e.preventDefault();
    settodos((prev)=>[...prev,
      {
        _id:uuidv4(),
        title:title,
        description:description
      }
    ])
    navigate('/');
  }

  return (
    <>
      <div className="conatiner d-flex justify-content-center align-items-center flex-column">
        <h1 className='my-5'>add Todo</h1>
        <div className="container">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">title</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{settitle(e.target.value)}} value={title}/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">description</label>
              <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e)=>{setdescription(e.target.value)}} value={description}/>
            </div>
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddEntry