import React from "react";
import CurriculumData from "./CurriculumData";
import PersonalData from "./PersonalData";

class Form extends React.Component {
    render() {
        return (
            <>
                <PersonalData />
                <CurriculumData />
            </>
        )
    }
}

export default Form;