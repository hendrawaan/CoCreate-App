import {
    FormControl,
    InputGroup
} from "react-bootstrap";

const InputGroupCustom = ({ disabled, ...props }) => {
    let form_control = ""
    if (disabled) {
        form_control = <FormControl disabled onChange={(e) => props.setFunc(e.target.value)} type={props.type} placeholder={props.placeholder} />
    } else {
        form_control = <FormControl onChange={(e) => props.setFunc(e.target.value)} type={props.type} placeholder={props.placeholder} />
    }
    return (
        <InputGroup >
            <InputGroup.Prepend>
                <InputGroup.Text>{props.icon}</InputGroup.Text>
            </InputGroup.Prepend>
            {form_control}
        </InputGroup>
    )
}
export default InputGroupCustom