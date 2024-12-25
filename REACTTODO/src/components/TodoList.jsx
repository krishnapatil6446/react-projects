import React from 'react'

export default function TodoList() {

  let Todos = [
    'Go to Gym',
    'Buy Groceries',
    'Do Laundry',
    'Clean the House'
  ]


  return (
    <ul className='main'>
      {
        Todos.map((Todo, TodoIndex) => {
          return(
         <TodoCard key={TodoIndex}>
          
         </TodoCard>
          )
        })
      }
    </ul>
  )
}
