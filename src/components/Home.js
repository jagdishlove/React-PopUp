import { useState } from "react";
import Form from "./Form";

const Home = () => {
  const [form, setForm] = useState(false);

  return (
    <>
      <button
        onClick={() => setForm(!form)}
        style={{ position: "absolute", top: "50%" }}
      >
        Open Form
      </button>

      {form === true ? <Form /> : " "}
    </>
  );
};

export default Home;
