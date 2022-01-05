import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import './sidebar.css'

const PatientRegister = () => {
   const {register , handleSubmit , watch , formState: {errors} } = useForm();
   const onSubmit = data => {
       console.log (data);
   }
   useEffect (()=>{
       console.log('Errors', errors);
   }, [errors]);
    return (
        <div className="formulario">
            <p className="patient-register">New Patient</p>
            <form onSubmit= {handleSubmit(onSubmit)}>
                <input type="text" placeholder='Name' {...register("name", {required:true})}/>
                <input type="text" placeholder='Last Name' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" placeholder='Age' {...register("age", { min: 2, max: 99 })} />
                <input type="number" placeholder='DNI'{...register("DNI", { pattern:"[0-10][A-Za-z]" })} />
                <input type="text" placeholder='Reason for consultation'{...register("Reason for consultation", {required:false})}/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default PatientRegister;