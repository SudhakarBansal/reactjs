import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateEntry = ({ todos }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [titl, settitle] = useState('')
  const [desc, setdescription] = useState('')


  useEffect(() => {
    const todo = todos.find((e) => e._id === id);
    settitle(todo.title);
    setdescription(todo.description);
  }, [id,todos  ])

  const handleSubmit = (e) => {
    e.preventDefault();
    todos.forEach((element) => {
      if (element._id === id) {
        element.title = titl;
        element.description = desc;
      }
    });
    navigate('/');
  }

  return (
    <>
      <div className="conatiner d-flex justify-content-center align-items-center flex-column">
        <h1 className='my-5'>Update Todo</h1>
        <div className="container">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">title</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => { settitle(e.target.value) }} value={titl} />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">description</label>
              <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => { setdescription(e.target.value) }} value={desc} />
            </div>
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Update</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateEntry