import logo from './logo.svg';
import './App.css';
import Data from './Data/Data'

import FunctionalComponent from './Components/FunctionalComponent/FunctionalComponent' ;
import ClassComponents from './Components/ClassComponent/ClassComponent';

import AnimalCard from './Components/Animalcard/AnimalCard';
import Product from'./Components/Product/Product';
import UncontrolledForm from './Components/UnControllerForm/UnControlledform';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import ControlledForm from './Components/Controlledform/ControlledForm';

function App() {
  return (
    <div>
    <FunctionalComponent />
    <ClassComponents />
    <h1>Animal</h1>
    {
      Data.map(animal => (
        <AnimalCard 
        name={animal.name}
        scientificName={animal.scientificName}
        size={animal.size}
        diet={animal.diet}
        />
      ))
    }
    <Product />
    <UncontrolledForm/>
    <ControlledForm/>
    </div>
  );
}

export default App;