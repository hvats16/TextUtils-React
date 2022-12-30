export default function About(props) {
  return (
    <div className="container">
      <h1 className="my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>About Us</h1>
      <strong style={{ color: props.mode === "light" ? "black" : "white" }}>
        TextUtils is a utility which can be used to manipulate your text in the
        way you want.
      </strong>
    </div>
  );
}
