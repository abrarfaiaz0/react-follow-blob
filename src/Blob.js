import "./Blob.css";

function Blob(props) {
  let X = props.mouse[0];
  let Y = props.mouse[1];
  let show = false;
  console.log(document.body.clientWidth - 1, X);
  if (
    X - 10 <= 0 ||
    Y - 10 <= 0 ||
    X + 10 >= document.body.clientWidth ||
    Y + 10 >= document.body.clientHeight
  ) {
    show = false;
  } else {
    show = true;
  }

  return (
    <>
      <div
        className={show ? "blob" : "hidden"}
        style={{ top: Y, left: X }}
      ></div>
      <div className="blur"></div>
    </>
  );
}

export default Blob;
