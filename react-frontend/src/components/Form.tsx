import { useFormik } from 'formik';
import { useEffect } from 'react';
import '../styles/PostForm.css';
import 'semantic-ui-css/semantic.min.css';
import { Input } from 'semantic-ui-react';
import formSchema from '../validation/FormValidation'
import { useTable } from '../contexts/TableContext';



function PostForm() {
    
    const { formValues, buttonName, setButtonName, addRow, updateRow} = useTable();
    const {handleSubmit, handleChange, values, errors, touched, handleReset, setValues} = useFormik({
        initialValues:{
            code:"",
            name:"",
            assignDate:"",
            isUpdateable:false
        },
        onSubmit:(values, bag) => {
            addRow(values, buttonName);
            updateRow(values, buttonName)
            bag.resetForm()
            
        },
        onReset:() =>{
            setButtonName("SAVE");
        },
        validationSchema: formSchema,
    });
    
    useEffect(() => {
        setValues(formValues)
    },[formValues])

  return (
    <div>
        <form className='form' onSubmit={handleSubmit} onReset={handleReset}> 
            <div>
                <label htmlFor='code'>Code</label>
                <Input id="code" name="code" className='input' value={values.code} onChange={handleChange("code")} />
            </div>
             {
                errors.code && touched.code && (<div className='error' style={{color:"red", marginTop:1, marginBottom:25}}>{errors.code}</div>)
            } 
            
            <div>
                <label htmlFor='name'>Name</label>
                <Input id='name' name='name' className='input' value={values.name} onChange={handleChange("name")}/> 
            </div>
            {
                errors.name && touched.name && (<div className='error' style={{color:"red", marginTop:1, marginBottom:25}}>{errors.name}</div>)
            }

            <div>
                <label htmlFor='assignDate'>Assign Date</label>
                <Input id='assignDate' name='assignDate' type='date' className='input' value={values.assignDate} onChange={handleChange("assignDate")} />
            </div>
            {
                errors.assignDate && touched.assignDate && (<div className='error' style={{color:"red", marginTop:1, marginBottom:25}}>{errors.assignDate}</div>)
            }
            
            <div>
                <label htmlFor='isUpdateable'>is Updateable</label>
                <Input id='isUpdateable' name='isUpdateable' type='checkbox' className='input' checked={values.isUpdateable} onChange={handleChange("isUpdateable")} />
            </div>

            <div className='grid'>
                <button type='submit' className='ui primary button two wide column'>{buttonName}</button>
                <button type='reset' className='ui green button two wide column'>CLEAN</button>
            </div>

        </form>
    </div>
  )
}

export default PostForm