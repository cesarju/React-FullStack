export const Note = (props) => {
  //console.log(props);
  const { content, date, important } = props;
  return (
    <li>
      <p>{content}</p>
      <p>{date}</p>
      <p>{important ? "Tiene elemtos" : "No tiene elementos"}</p>
    </li>
  );
};
