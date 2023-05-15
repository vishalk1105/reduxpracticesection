import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <>
      <Header />
      {isAuth && <UserProfile />}
      {isAuth && <Counter />}
      {!isAuth && <Auth />}
    </>
  );
}

export default App;
