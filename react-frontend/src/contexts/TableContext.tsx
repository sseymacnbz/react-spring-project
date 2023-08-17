import React, { createContext, useState, useEffect, useContext } from 'react'
import FormService from '../service/FormService'

const TableContext = createContext<any>([]);

export const TableProvider = (({children}: {children:any}) => {
    const[buttonName, setButtonName] = useState("SAVE") // save-update butonunu tutar

    const [table, setTable] = useState<any>([]); // DB'den gelen tabloyu tutar
        useEffect(()=>{
            FormService.getForms()
            .then(res=>setTable(res.data))
          }, [table])

    // tabloya yeni kayıt ekler
    const addRow = (values:any, buttonName:string) => {buttonName==="SAVE" && (FormService.postForm(values))};
      
    //tablodaki kaydı update eder
    const updateRow = (values:any, buttonName:string) => {buttonName==="UPDATE" && (FormService.updatePost(values))}

    //tabloda tıklanan kaydın değerlerini tutar
    const[formValues, setFormValues] = useState({
        id: "",
        code: "",
        name: "",
        assignDate: "",
        isUpdateable: false
    });

    // bu contextte tanımlanan state ve fonksiyonları bir araya getirdik
    const values = {
        table,
        addRow,
        updateRow,
        formValues, 
        setFormValues,
        buttonName,
        setButtonName
    };

    return <TableContext.Provider value={values}>{children}</TableContext.Provider>      
});

export const useTable = () => {
    const context = useContext(TableContext);

    if(context === undefined){
        throw new Error("useTable hook must be call inside TableProvider component")
    }
    return context;
}