import { useEffect } from "react";
import Router from "./components/Router";
import { useErrorStore } from "./store/global/useErrorStore";
import { notification } from "antd";

const App = () => {
  const { error, setError } = useErrorStore();

  useEffect(() => {
    if (error && error.response) {
      notification.open({
        message: "로그인 실패",
        description: "아이디 또는 비밀번호를 확인해주세요.",
      });
    } else {
      notification.open({
        message: "로그인 실패",
        description: "네트워크 에러",
      });
    }
    setError(null);
  }, [error]);

  return <Router />;
};

export default App;
