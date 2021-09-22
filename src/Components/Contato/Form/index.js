import React, {Fragment, useState, useEffect} from "react"
import './form.css'

const Form = (props) =>{
    const [fields,setFields] = useState({
        name:''
    })
    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name] : e.currentTarget.value
    })

    const handleFieldsSubmit = (e) => {
        
        e.preventDefault() 
            
    }
 return( <Fragment>
     <form className="formEmail" onSubmit={handleFieldsSubmit}>
         <div >
             <label htmlFor='name'>Name:</label>
             <input type="text" name="name" value={fields.name} onChange={handleFieldsChange} />
             <label  htmlFor="Email">Email:</label>
             <input className="inputEmail" type="text" name="Email" value={fields.email} onChange={handleFieldsChange} />
             <label  htmlFor="texto">Assunto:</label>
             <textarea rows="5" column="33" type="textarea" name="texto" value={fields.text} onChange={handleFieldsChange}></textarea>
             <input type="submit"/>
         </div>
     </form>
 </Fragment>
 ) 
}

export {Form}