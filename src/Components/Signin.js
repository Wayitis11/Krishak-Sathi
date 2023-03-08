import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink, useHistory } from 'react-router-dom';
import {BiReset} from 'react-icons/bi';
import Navbar from './Navbar';

const Signin = ()=> {
    const history = useHistory();

    const [user, setUser] = useState({
     
        email: "",
        password: ""
      

    });

       const validForm = ()=>{
        let formIsValid = true;
       
       
        if(user.email ==='' || user.password===""){
         formIsValid = false
        return toast.error("Please enter all fileds!")
        }
   
        return formIsValid
      }

      const handleInputs = (e, value, name) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });

    }
    

    const SubmitLogin = async(e)=>{
        e.preventDefault();
       
        if(validForm()){
        const {  email, password } = user;
            try{
                const res = await fetch('/api/user/login',{
                    method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
    
            const data = await res.json();
                if (res.status === 422 || !data){
                    toast.error("Invalid Credentials!")
                } else{
                    toast.success("You have successfully signin!");
                    localStorage.setItem('token', data.token)
                    console.log(data,data.token)
                    setTimeout(()=>{
                        history.push('/productlist');
                    }, 1500)
                }
            } catch (err){
                toast.error("something went wrong!");
            }

        } else{
            toast.error("Invalid form!")
        }
     
       
    }
    return (
        <>
        <Navbar/>
           <section>
             
             <ToastContainer className="mt-5" />
             <div className="imgBx">
                 <img src="./img/login.jpg" alt="login Page" />
             </div> {/* End of imgBx */}
             <div className="contentBx">
                 <div className="formBx">
                     <h2>Sign In</h2>
                     <form>
                        

                         <div className="inputBx">
                             <span>Email</span>
                             <input type="text" name="email" placeholder="Enter your email"
                            defaultValue={user.email}
                            onChange={handleInputs}  />
                             
                            
                         </div>


                         <div className="inputBx">
                             <span>Password</span>
                             <input type="password" name="password" placeholder="Enter your password"
                            defaultValue={user.password}
                            onChange={handleInputs}  />
                            
                           
                         </div>
                         <div className="remember py-2 ">
                                <NavLink to="sendotp"><BiReset/>Forgot password?</NavLink>
                            </div>

                         <div className="inputBx pt-3">
                                <input type="submit" value="Sign In" onClick={SubmitLogin} />
                            </div>
                        
                     </form>

                     <div className="text-center inputBx pt-3">
                         <small>Already have an account? <small><NavLink to="/signup">SignUp</NavLink></small></small>
                     </div>

                
                 </div>
             </div>
         </section>
            
        </>
    )
}

export default Signin;
