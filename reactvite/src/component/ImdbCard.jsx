function ImdbCard(data) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      margin: "15px"
    }}>
      
      <img
        src={data.img}
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%"
        }}
      />

      <h1>{data.rank}</h1>

      <h3>{data.name}</h3>

    </div>
  );
}

export default ImdbCard;