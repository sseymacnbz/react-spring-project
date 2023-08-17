import 'semantic-ui-css/semantic.min.css'
import '../styles/Table.css'
import { useTable } from '../contexts/TableContext';

function Table() {
    
    const { table, setFormValues, setButtonName } = useTable();
  return (
    <div className='ui grid ui three column centered grid'>
        <table className='ui celled table column scroll'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Assign Date</th>
                    <th>Is Updateable?</th>
                </tr>
            </thead>

            <tbody>
                {
                    table.map((row:any, index:number)=>{
                        return(
                            <tr key={index} onClick={() => (setFormValues(row), setButtonName("UPDATE"))} className={String(row.isUpdateable)==="true" ? "enabled" : "disabled"}>
                                <td>{index+1}</td>
                                <td>{row.code}</td>
                                <td>{row.name}</td>
                                <td>{row.assignDate}</td>
                                <td>{String(row.isUpdateable)}</td>
                            </tr>
                        )
                    })
                } 
            </tbody>
        </table>
        
    </div>
  )
}

export default Table