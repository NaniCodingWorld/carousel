import { useFormik } from "formik"
import * as yup from 'yup'

export function FormikForm(){

    let formik = useFormik({
        initialValues:{
            Name:'',
            Age:0,
            Email:''
        },
        onSubmit:(formData)=>{
            console.log(formData)
        },
        validationSchema:yup.object({Name:yup.string().required('Name Required'),
            Age:yup.number().required('Age requred').min(10, 'Minmum age'), Email:yup.string().required('emaile requred')})
        
    })
    return(
        <div>
            <h3>Formik Form</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input onChange={formik.handleChange} type="text" name="Name"/></dd>
                    <dd className="text-danger text-bold">{formik.errors.Name}</dd>
                    <dt>Age</dt>
                     <dd><input onChange={formik.handleChange} type="text" name="Age"/></dd>
                    <dd className="text-danger text-bold">{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd><input onChange={formik.handleChange} type="text" name="Email"/></dd>
                    <dd className="text-danger text-bold">{formik.errors.Email}</dd>
                </dl>
                <button className="btn btn-success w-10" type="submit">submit</button>
            </form>
        </div>
    )
}