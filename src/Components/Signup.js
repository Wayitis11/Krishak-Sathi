import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import Navbar from './Navbar';

const Signup=()=> {
    const history = useHistory();

    const [user, setUser] = useState({
        fullname: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: ""

    });

        const validForm = ()=>{
        let formIsValid = true;

        if(user.fullname ==="" || user.email ==="" || user.phone==="" || user.password==="" || user.confirmpassword===""){
        formIsValid = false
        return toast.error("Please filled all the field!")
        }

        if(user.password.length <6){
            return toast.error("Password is at least 6 characters long")
        }

        if(user.confirmpassword !=='' && user.password !== user.confirmpassword){
            formIsValid = false
            toast.error("password are not matching!")
        }

        return formIsValid
    }

    const handleInputs = (e, value, name) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });

    }

    const SubmitRegister = async (e) => {
        e.preventDefault();
        if(validForm()){
        const { fullname, email, phone, password, confirmpassword } = user;
        const res = await fetch("/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                'Accept': 'application/json'

            },
            body: JSON.stringify({
                fullname, email, phone, password, confirmpassword
            })

        });
        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            toast.error("Invalid credentials!");
        }
        else {
            toast.success("You have successfully registered!");
            setTimeout(() => {
                history.push('/signin');
            }, 1500)
        }

        } else{
            toast.error("Invalid form");
            setTimeout(()=>{

            }, 1500)
        }
        
    }
    return (
        <>
        <Navbar/>
            <section>

                <ToastContainer className="mt-5" />
                <div className="imgBx">
                    <img src="./img/login.jpg" alt=" " />
                </div> {/* End of imgBx */}
                <div className="contentBx">
                    <div className="formBx">
                        <h2>Sign Up</h2>
                        <form>
                            <div className="inputBx">
                                <span>FullName</span>
                                <input type="text" name="fullname"
                                    placeholder="Enter your full name" defaultValue={user.fullname}
                                    onChange={handleInputs} />

                            </div>

                            <div className="inputBx">
                                <span>Email</span>
                                <input type="text" name="email"
                                    placeholder="Enter your email" defaultValue={user.email}
                                    onChange={handleInputs} />

                            </div>

                            <div className="inputBx">
                                <span>Phone</span>
                                <input type="number" name="phone"
                                    placeholder="Enter your phone" defaultValue={user.phone}
                                    onChange={handleInputs} />

                            </div>

                            <div className="inputBx">
                                <span>Password</span>
                                <input type="password" name="password"
                                    placeholder="Enter your password" defaultValue={user.password}
                                    onChange={handleInputs} />

                            </div>

                            <div className="inputBx">
                                <span>Confirm Password</span>
                                <input type="password" name="confirmpassword"
                                    placeholder="Enter your confirmpassword" defaultValue={user.confirmpassword}
                                    onChange={handleInputs} />

                            </div>

                            <div className="inputBx pt-3">
                                <input type="submit" value="Sign Up" onClick={SubmitRegister} />
                            </div>

                        </form>

                        <div className="text-center inputBx pt-3">
                            <small>Already have an account?<small><Link to="/signin">Sign in</Link></small></small>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Signup;
