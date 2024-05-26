import SignUpImageLeft from "../../assets/images/SignUpImageLeft.png";
import Input from "../../Components/Input";
export default function SignUp() {
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
        <form className="signInForm">
          <h1 className="signInTitle">Sign up</h1>
          <p className="questionText">
            Already have an account ?{" "}
            <span className="innerQuestionText">Sign in</span>
          </p>
          <Input placeholder="Email" type="text" />

          <Input placeholder="Password" type="password" />
          <button className="logBtn" type="submit">
            Next step
          </button>
        </form>
      </div>
    </div>
  );
}
