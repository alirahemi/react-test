import PersonalItem from "./PersonalItem";

const PersonalItems = (props) => {
  return (
    <div>
      {props.data.map((data, index) => (
        <PersonalItem
          key={index}
          title={data.title}
          salary={data.salary}
          date={data.date.toString()}
        />
      ))}
    </div>
  );
};

export default PersonalItems;
