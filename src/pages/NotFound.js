import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="Actor no encontrado"
      subTitle="Vuelve a la página principal"
      extra={
        <Button onClick={() => navigate("/")} type="primary">
          Volver
        </Button>
      }
    />
  );
}
