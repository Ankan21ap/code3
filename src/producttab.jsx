import Product from "./product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };
  return (
    <div style={styles}>
      <Product title="Logitech Master" idx={0} />
      <Product title="Apple Pencile (2nd gen)" idx={1} />
      <Product title="Zebronics zeb-transformer" idx={2} />
      <Product title="petronics Toad 23" idx={3} />
    </div>
  );
}

export default ProductTab;
