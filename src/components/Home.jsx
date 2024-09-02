import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ todos, settodos }) => {

  const navigate = useNavigate();

  const handleDelete = (id) => {
    settodos(todos.filter((e) => e._id !== id))
  }

  return (
    <>
      <div className="conatiner d-flex justify-content-center align-items-center flex-column">
        <h1 className='my-5'>todos : </h1>
        <div className="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">title</th>
                <th scope="col">description</th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map((todo, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>
                      <button className='btn btn-primary' onClick={() => handleDelete(todo._id)}>delete</button>
                      <button className='btn btn-primary' onClick={() => navigate(`/updateEntry/${todo._id}`)}>Update</button>
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
          <button type="button" class="btn btn-primary" onClick={() => navigate('/addEntry')}>Add todos</button>
        </div>
      </div>
    </>
  )
}

export default Home