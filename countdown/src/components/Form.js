export default function Form(props) {
  return (
    <form>
      <label>
        <span>Name</span>
        <input type="text" required name="name" />
      </label>
    </form>
  );
}
