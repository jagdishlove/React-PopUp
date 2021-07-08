const Form = ({ form }) => {
  return (
    <>
      <div
        style={{
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItem: "center",
          width: "60%",
          objectFit: "contain",
          background: "lightgreen"
        }}
      >
        <label>Name</label>
        <input></input>
        <br />
        <label>id</label>
        <input></input>
        <br />
        <label>number</label>
        <input></input>
        <br />
        <label>school</label>
        <input></input>
        <br />
        <button onClick={() => (form ? "close" : "open")}>Close</button>
      </div>
    </>
  );
};

export default Form;
