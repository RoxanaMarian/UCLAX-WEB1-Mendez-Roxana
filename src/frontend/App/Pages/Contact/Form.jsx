//components
import UniversalForm from "@App/Core/components/Form/UniversalForm";

// component
const Form = () => {
    const formInputs = [
        {
            id: "userName",
            type: "text",
            labelText: "Name",
            value: "",
            rules: ["required"],
        },
        {
            id: "userEmail",
            type: "text",
            labelText: "Email",
            value: "",
            rules: ["required", "email"],
        },
        {
            id: "userMessage",
            type: "textarea",
            labelText: "Message",
            value: "",
            rules: ["required"],
        },
    ];

    return (
        <UniversalForm
            formInputs={formInputs}
            apiEndpoint="/sendmail"
            trackingId="contact"
            submitText="Send"
        />
    );
};

export default Form;
