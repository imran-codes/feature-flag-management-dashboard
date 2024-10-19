import { signInWithGoogle } from "../helpers/firebase";

const NoUser = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Admin: Manage Recipes</h1>
      <button
        onClick={signInWithGoogle}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default NoUser;
