import Button from "./button";
import DateOfBirthForm from "./formselectDob";
import './App.css'

const Form  = ()=>{
    return(
        <>
        <div className="formContainer">
        <div>
            <h1>Form</h1>
        </div>
        <form action="POST">
         <div className="formitemdiv">
         <label htmlFor="name">FirstName:</label>
         <input type="text" id="name" name="name"  placeholder="Enter Firstname"/>
         <label htmlFor="name">LastName:</label>
         <input type="text" id="name" name="name"  placeholder="Enter lastname"/>
         </div>

         <div className="formitemdiv">
         <label htmlFor="email">Email:</label>
         <input type="email" id="email" name="email" placeholder="Enter email"/>
         </div>
         <div className="formitemdiv">
         <label htmlFor="password">NewPassword:</label>
         <input type="password" id="password" name="password" placeholder="create"/>
         </div>
         <DateOfBirthForm/>
         <Button/>
        </form>
        </div>
         
        </>
    )
}
export default Form;