import { AppDispatch, RootState } from "../../redux/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/feachers/user/userActions";

const Signup: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const userState = useSelector((state: RootState) => state.user);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = { phoneNumber, password };
    dispatch(signup(userData));
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>phoneNumber:</label>
          <input
            type="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      {userState.loading && <p>Loading...</p>}
      {userState.error && <p>Error: {userState.error}</p>}
      {userState.user && (
        <p>Signup successful! Welcome, {userState.user.phoneNumber}</p>
      )}
    </div>
  );
};

export default Signup;
