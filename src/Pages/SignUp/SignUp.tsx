import { useMutation } from "@tanstack/react-query";
import SignUpImageLeft from "../../assets/images/SignUpImageLeft.png";
import { signUp } from "../../api/api";
import { FormEvent } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

export default function SignUp() {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signUp,
    onSuccess: (data) => {
      Cookies.set("key", data.data.data.key);
      navigate("/books");
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);

    const body = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      key: formData.get("key") as string,
      secret: formData.get("secret") as string,
    };
    mutate(body);
  };
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
          <input
            type="text"
            name="name"
            className="FormInput"
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            className="FormInput"
            placeholder="Email"
          />
          <input
            type="text"
            name="key"
            className="FormInput"
            placeholder="Key"
          />
          <input
            type="text"
            name="secret"
            className="FormInput"
            placeholder="Secret"
          />
          <button className="logBtn" type="submit" disabled={isPending}>
            Next step
          </button>
        </form>
      </div>
    </div>
  );
}
