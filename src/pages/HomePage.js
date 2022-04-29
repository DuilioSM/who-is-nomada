import { useActor } from "../context/actorContext";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { Dragger } = Upload;
  const navigate = useNavigate();
  const { setActor } = useActor();

  const draggerData = {
    name: "file",
    multiple: false,
    action: "https://whois.nomada.cloud/upload",
    accept: ".png, .jpg, .JPG, .PNG",
    headers: {
      Nomada: "NzA0MDgzODEtYmQ3Yy00MWE4LWI4MWItZmM5ZmMyZjUyYjEx",
    },
    onDrop(e) {
      const fileType = e.dataTransfer.files[0].type;
      if (!fileType === "image/png" || !fileType === "image/jpg") {
        message.error(
          "Para poder hacer su búsqueda se requiere que su archivo sea .jpg o .png"
        );
      }
    },
    onChange(info) {
      const { status, response } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} Archivo subido con éxito.`);
        setActor(response.actorName);
        navigate("/actor");
      } else if (status === "error") {
        message.error(
          `${info.file.name} Error al subir archivo, intente nuevamente.`
        );
      }
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>¿Quién es ese actor?</h1>
      <Dragger style={{ width: 500 }} {...draggerData}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Haz click o arrastra un archivo para subirlo
        </p>
        <p className="ant-upload-hint">
          Soporta archivos de tipo: .jpg, .JPG, .PNG y .png
        </p>
      </Dragger>
    </div>
  );
}
