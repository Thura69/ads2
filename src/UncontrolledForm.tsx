import React from 'react'

interface  person{
  name: string,
  age: number,
  height:22
}

function UncontrolledForm() {
    const handleSubmit = (e:any) => {
        e.preventDefault();

    }
  return (
   <form onSubmit={handleSubmit}>
     <input name="name" type='text' placeholder='Name'/>
     <input name="age" type='number' placeholder='Age'/>
     <input name="hairColor" type='text' placeholder='Hair Color'/>
     <input type='submit' value={'Submit'}/>
   </form>
  )
}

export default UncontrolledForm