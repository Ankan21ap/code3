export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };
  let newStyles = {
    fontWeight: "bold",
  };
  let styles = {
    backgroundColor: "#e0c367",
    height: "35px",
    width: "200px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  };
  return (
    <div style={styles}>
      <spam style={oldStyles}>{oldPrice}</spam>
      &nbsp; &nbsp;
      <spam style={newStyles}>{newPrice}</spam>
    </div>
  );
}
