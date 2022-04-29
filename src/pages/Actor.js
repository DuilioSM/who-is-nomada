import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useActor } from "../context/actorContext";
import { getActorData } from "../api/movie-db";
import { Layout, Image, Divider, Button, Spin } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Movie from "../components/Movie";

const URL_IMAGE = "https://image.tmdb.org/t/p/w500";

export default function Actor() {
  const { Header, Sider, Content } = Layout;
  const navigate = useNavigate();
  const { actor } = useActor();
  const [data, setData] = useState({
    profile_path: "",
    name: "",
    gender: "",
    popularity: 0,
    known_for: [{}],
  });
  const [loadPage, setLoadPage] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const getGender = () => {
    let gender = "";
    if (data.gender === 1) {
      gender = "Mujer";
    } else {
      gender = "Hombre";
    }
    return gender;
  };

  useEffect(() => {
    (async () => {
      setLoadPage(true);
      try {
        const actorInfo = await getActorData(actor);
        const actorData = await actorInfo.results[0];
        setData(actorData);
        setLoadPage(false);
      } catch (error) {
        setLoadPage(false);
        setNotFound(true);
      }
    })();
  }, [actor]);

  if (loadPage) {
    return <Spin tip="Loading..."></Spin>;
  } else if (notFound) {
    return navigate("*");
  }

  return (
    <div className="actor_container">
      <Layout>
        <Header className="actor_header">
          <Button onClick={() => navigate("/")} type="primary">
            <ArrowLeftOutlined />
            Regresar
          </Button>
        </Header>
        <Layout>
          <Sider
            className="actor_sider"
            width={300}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              className="actor_sider--img"
              width={200}
              alt={data.name}
              src={`${URL_IMAGE}${data.profile_path}`}
            />
            <h1 className="actor_sider--name">{data.name}</h1>
            <p className="actor_sider--gender">{getGender()}</p>
            <p className="actor_sider--popularity">
              Popularidad: {data.popularity.toFixed(2)}
            </p>
          </Sider>
          <Content className="content">
            <h2 className="content-title">Películas</h2>

            {data.known_for.map((item) => (
              <>
                <Divider />
                <Movie key={item.id} {...item} />
              </>
            ))}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
