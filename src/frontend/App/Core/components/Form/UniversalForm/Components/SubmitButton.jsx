// context
import { useUniversalForm } from "@Core/components/Form/UniversalForm/context/useUniversalForm.js";

// components
import Button from "@Core/components/Form/Button";

// component
const SubmitButton = () => {
    const { formStatus } = useUniversalForm();
    const text = formStatus === "processing" ? "Submitting..." : "Submit";
    return <Button type="submit">{text}</Button>;
};

export default SubmitButton;
