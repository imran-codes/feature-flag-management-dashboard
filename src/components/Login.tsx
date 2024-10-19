import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../helpers/firebase";

export default function Login() {
  const navigate = useNavigate();

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Logged in user:", result.user);
      navigate("/admin"); // Redirect to admin panel after login
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <button
        onClick={loginWithGoogle}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
