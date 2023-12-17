export default function Read(props) {
  console.log(props);
  return (
    <>
      <h2>Read</h2>
      params : {props.params.id}
    </>
  );
}
