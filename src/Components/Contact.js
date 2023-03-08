import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Header from './Header';

const Contact = () => {
   

    const [contact, setContact] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: ""

    });

    const validForm = ()=>{
        let formIsValid = true;
      

        if(contact.fullname ==="" || contact.email ==="" || contact.phone==="" || contact.message===""){
          formIsValid = false
          return toast.error("Please filled all the field!")
        }

        return formIsValid
      }

      const handleInputs = (e, value, name) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setContact({ ...contact, [name]: value });

    }

    const SubmitContact = async (e) => {
        e.preventDefault();
        if(validForm()){
        const { fullname,  phone, email, message } = contact;
        const res = await fetch("/api/user/contact", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                'Accept': 'application/json'

            },
            body: JSON.stringify({
                fullname, phone,email, message
            })

        });
        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            toast.error("Invalid credentials!");
        }
        else {
            toast.success("Your message has been successfully sent!");
          
        }

        } else{
            toast.error("Invalid form");
            setTimeout(()=>{

            }, 1500)
        }
        
    }


    return (
        <>
        <Header/>
        <ToastContainer/>
            <div className="container contactus mt-5">
                <h3 className="text-center">Contact us</h3>
                <div className="row">
                <div className="col-md-4" style={{justifyContent:"center"}}>
                    <img id="contact" src="./img/gara.png" alt="contact Page"  />
                    </div>
                    <div className="col-md-8">
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Fullname</label>
                                <input type="text" class="form-control" name="fullname"
                                    placeholder="Enter your fullname" defaultValue={contact.fullname}
                                    onChange={handleInputs} />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">phone</label>
                                <input type="number" class="form-control" name="phone"
                                    placeholder="Enter your phone" defaultValue={contact.phone}
                                    onChange={handleInputs} />
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlInput1">email</label>
                                <input type="text" class="form-control"  name="email"
                                    placeholder="Enter your email" defaultValue={contact.email}
                                    onChange={handleInputs} />
                            </div>
                         
                        
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  name="message"
                                    defaultValue={contact.message}
                                    onChange={handleInputs} />
                            </div>
                        </form><br/>
                        <button type="button" class="btn btn-outline-success" onClick={SubmitContact}>Submit</button>
                    </div>
                   
                </div>
            </div><br/>

        </>
    )
}

export default Contact
