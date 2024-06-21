import { useUserContext } from "../../context/UserContext";

const Signup: React.FC = () => {
  const { userState } = useUserContext();

  return (
    <div>
      <h1>Signup</h1>
      {userState.loading && <p>Loading...</p>}
      {userState.error && <p>Error: {userState.error}</p>}
      {userState.user && (
        <p>Signup successful! Welcome, {userState.user.phoneNumber}</p>
      )}
    </div>
  );
};

export default Signup;
