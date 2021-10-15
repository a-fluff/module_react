export default function Person({person, deletePerson}) {  
  return (
    <div className="person">
      <div className="person__foto">
        <img src={person.image}></img>
      </div>
      <p className="person__name">
        {person.name}
      </p>
      <button onClick={() => {deletePerson(person.id)}}>Delete</button>
    </div>
  )
};