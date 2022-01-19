const PersonalItem = (props) => {
  return (
    <>
      <span>{props.title}</span>
      <span>{props.salary}</span>
      <span>{props.date}</span>
    </>
  );
};

export default PersonalItem;
