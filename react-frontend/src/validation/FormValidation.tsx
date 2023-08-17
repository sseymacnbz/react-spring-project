import {date, object, string} from 'yup';

const formSchema = object({
    code: string().max(5).min(5).required().test('code-test','First 2 characters must be letters, last 3 characters must be numbers',
    value => (isNaN(Number(value?.substring(0,2)))) && (!isNaN(Number(value?.substring(2,5))))),

    name: string().max(12).required(),

    assignDate: date().required(),
    
})

export default formSchema;