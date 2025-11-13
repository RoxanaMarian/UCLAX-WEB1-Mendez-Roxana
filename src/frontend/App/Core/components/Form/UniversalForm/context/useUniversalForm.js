import { useContext } from "react";

// context
import UniversalFormContext from "./index.js";
import { createActions } from "./actions.js";

export const useUniversalForm = () => {
    const { state, dispatch } = useContext(UniversalFormContext);
    const actions = createActions(state, dispatch);

    const onSubmit = (formInputs) => {
        console.log({ formInputs });
        actions.setFormStatus("processing");
        actions.setGlobalMessage({ type: "none", text: "" });

        // validating form

        const postData = Object.entries(
            formInputs.map(({ id, value }) => [id, value])
        );

        actions.setFormStatus("submitted");
        actions.setGlobalMessage({
            type: "success",
            text: "your message has been sent succesfully",
        });
    };

    return {
        ...state,
        setFormInput: actions.setFormInput,
        onSubmit,
    };
};
