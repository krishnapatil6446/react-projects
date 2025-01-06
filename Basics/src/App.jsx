import React from 'react'
import Card from './components/Card'

const App = () => {
  const users = [
    {
      "name": "Alice Johnson",
      "city": "New York",
      "age": 29,
      "profession": "Software Engineer",
      "profile_photo": "https://cdn.pixabay.com/photo/2024/12/03/01/31/accessories-9241057_1280.jpg"
    },
    {
      "name": "Rajesh Kumar",
      "city": "Mumbai",
      "age": 35,
      "profession": "Data Scientist",
      "profile_photo": "https://example.com/profiles/rajesh.jpg"
    },
    {
      "name": "Emily Brown",
      "city": "London",
      "age": 27,
      "profession": "Graphic Designer",
      "profile_photo": "https://example.com/profiles/emily.jpg"
    },
    {
      "name": "Carlos Martinez",
      "city": "São Paulo",
      "age": 31,
      "profession": "Civil Engineer",
      "profile_photo": "https://example.com/profiles/carlos.jpg"
    },
    {
      "name": "Aisha Bello",
      "city": "Lagos",
      "age": 24,
      "profession": "Marketing Specialist",
      "profile_photo": "https://example.com/profiles/aisha.jpg"
    }
  ]
  
  return (
    <div>
      <div className='p-12'>
         {users.map(function(elem,idx){
          return <Card key={idx} username = {elem.name} city = {elem.city} age = {elem.age} photu = {elem.profile_photo}/>
         })}
      </div>
    </div>
  )
}

export default App
