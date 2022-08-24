import './App.css';
import Title from './components/Title';
import FilterForm from './components/FilterForm';
import Input from './components/Input';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    <div className="App">
      <Title />
      <FilterForm />
      <Input />
      <Form />      
    </div>
  );
} 

export default App;
