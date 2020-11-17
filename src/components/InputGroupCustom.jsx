import {
    Form,
    FormControl,
    InputGroup
} from "react-bootstrap";

const InputGroupCustom = ({ children, disabled, ...props }) => {
    let form_control = ""
    if (disabled) {
        form_control = <Form.Control disabled {...props} />
    } else {
        form_control = <Form.Control {...props} />
    }
    if (props.as === "select") {
        form_control = <Form.Control {...props}  >
            {children.map(function (item, i) {
                return (<option key={i} value={item.key}>{item.name}</option>)
            })}
        </Form.Control >;
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