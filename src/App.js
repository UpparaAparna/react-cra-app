import React from 'react'
import ThreeDropdowns from './ThreeDropdowns'

function App ( ) {
  const fruitsOptions = [
    {
        value : 'apple',
        label : 'Apple'
     },
     {
        value : 'banana',
        label : 'Banana'
     }, {
        value : 'strawberry',
        label : 'Strawberry'
     }, {
        value : 'pineapple',
        label : 'Pineapple'
     }, {
        value : 'dates',
        label : 'Dates'
     }
  ]

  const colorsOptions = [
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'purple', label: 'Purple' }
  ]

  const animalsOptions = [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'bird', label: 'Bird' },
    { value: 'fish', label: 'Fish' },
    { value: 'rabbit', label: 'Rabbit' }
  ]
  const foodOptions = [
    { value: 'pizza', label: 'Pizza' },
    { value: 'burger', label: 'Burger' }, 
      { value: 'pasta', label: 'Pasta' },
      { value: 'sushi', label: 'Sushi' },
      { value: 'salad', label: 'Salad' }
  ]

  const handleChange = (index) => (option) => {
    alert(`Dropdown ${index + 1}: You have selected ${option.label}`)
  }

  const dropdowns = [
    { options: fruitsOptions, onChange: handleChange(0), placeholder: "Select a fruit" },
    { options: colorsOptions, onChange: handleChange(1), placeholder: "Select a color" },
    { options: animalsOptions, onChange: handleChange(2), placeholder: "Select an animal" },
    { options: foodOptions, onChange: handleChange(3), placeholder: "Select a food" }
  ]

  return (
     <div>
         <h2>React Dropdown Example</h2>
         <ThreeDropdowns dropdowns={dropdowns} />
     </div>
  )
}

export default App;