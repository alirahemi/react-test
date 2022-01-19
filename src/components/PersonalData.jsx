import PersonalForm from "./PersonalForm";

const PersonalData = (props) => {

    const personalData = (personalData) => {
        props.onAddPersonalData(personalData);
    }
    return ( 
        <PersonalForm onAddPersonalData={personalData} />
     );
}
 
export default PersonalData;