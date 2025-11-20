import { useContext } from "react";

// spam
import { useSpamBuster } from "@Core/components/Form/SpamBuster/useSpamBuster";

// context
import UniversalFormContext from "./index.js";
import { createActions } from "./actions.js";

// validation
import { valideFormInputs } from "./valideFormInputs.js";

export const useUniversalForm = () => {
    const { state, dispatch } = useContext(UniversalFormContext);
    const actions = createActions(state, dispatch);
    const { trackingId } = state;
    const { getToken } = useSpamBuster(trackingId);

    const onSubmit = async (formInputs) => {
        actions.setFormStatus("processing");
        actions.setGlobalMessage({ type: "none", text: "" });

        // validating form
        const isValid = valideFormInputs(formInputs, actions);
        if (!isValid) {
            actions.setFormStatus("idle");
            return false;
        }

        // validate human
        const { success, message, token } = await getToken();
        if (!success) {
            actions.setFormStatus("idle");
            actions.setGlobalMessage({
                type: "error",
                text: `${message}. Please check form and try again.`,
            });
            return false;
        }

        const postData = {
            token: token,
            ...Object.fromEntries(
                formInputs.map(({ id, value }) => [id, value])
            ),
        };

        console.log(postData);

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
