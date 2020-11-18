import {
    Form,
    FormControl,
    InputGroup
} from "react-bootstrap";

const InputGroupCustom = ({ children, ...props }) => {
    let form_control = <Form.Control {...props} />
    if (props.as === "select") {
        form_control = <Form.Control {...props}  >
            {children.map(function (item, i) {
                return (<option key={i} value={item.name}>{item.name}</option>)
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