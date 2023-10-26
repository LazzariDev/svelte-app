import { error } from "@sveltejs/kit";
import { writable } from "svelte/store"

export function createFormStore(initialData) {

    const form = writable(initialData);
    const errors = writable({});

    function validate(node) {
        node.onblur = checkValidity(node);
    }

    const checkValidity = (element) => () => {
        const errorMessage = maxLengthValidator(element, 3);

        if (errorMessage) {
            /* errors.update((_errors) => {
                _errors[element.name] = errorMessage;
                return _errors;
            }) */
            // Upper code commented and botton line are the same
            errors.update((_errors) => ({...errors, [element.name]: errorMessage}));

        } else {
            errors.update((_errors) => ({...errors, [element.name]: ""}));
        }
    }

    function maxLengthValidator(element, maxLength = 7) {
        if (
            element.value.length === 0 ||
            element.value.length < maxLength 
            ) { return ""; }

        return `${element.name} should be less then ${maxLength} cahracters`;
    }

    return {
        validate,
        form,
        errors: {subscribe: errors.subscribe}
    }
}