import './App.css';
import { TableProvider } from './contexts/TableContext';
import Form from './components/Form'
import Table from './components/Table';

function App() {

  return (
    <div className="App">
      <TableProvider>
        <Form />
        <Table />
      </TableProvider>
      
    </div>
  );
}

export default App;
