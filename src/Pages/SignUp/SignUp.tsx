import { useMutation } from "@tanstack/react-query";
import SignUpImageLeft from "../../assets/images/SignUpImageLeft.png";
import Input from "../../Components/Input";
import { signUp } from "../../api/api";
import { FormEvent } from "react";
import { toast } from "react-toastify";
export default function SignUp() {
  const {mutate, isPending} = useMutation({
    mutationKey:["signup"],
    mutationFn:signUp,
    onSuccess:()=>{

    },
    onError:()=>{
      toast.error("Something went wrong!")
    }
  })
  const handleSubmit = (e:FormEvent) =>{
   e.preventDefault();
   const body = {
    name:"",
    email:"",
    key:"",
    secret:""
   }
   mutate(body)
  }
  return (
    <div className="signInSection">
      <div className="signInLeft">
        <img
          src={SignUpImageLeft}
          alt={SignUpImageLeft}
          className="signInLeftImg"
        />
      </div>
      <div className="signInRight">
        <form className="signInForm" onSubmit={handleSubmit}>
          <h1 className="signInTitle">Sign up</h1>
          <p className="questionText">
            Already have an account ?{" "}
            <span className="innerQuestionText">Sign in</span>
          </p>
          <Input placeholder="Email" type="text" />

          <Input placeholder="Password" type="password" />
          <button className="logBtn" type="submit" disabled={isPending}>
            Next step
          </button>
        </form>
      </div>
    </div>
  );
}
