import {
    FormControl,
    InputGroup
} from "react-bootstrap";

const InputGroupCustom = ({ children, disabled, ...props }) => {
    let form_control = ""
    if (disabled) {
        form_control = <FormControl disabled as={props.as} defaultValue={props.defValue} onChange={(e) => props.setFunc(e.target.value)} type={props.type} placeholder={props.placeholder} />
    } else {
        form_control = <FormControl as={props.as} onChange={(e) => props.setFunc(e.target.value)} type={props.type} placeholder={props.placeholder} defaultValue={props.defValue} />
    }
    if (props.as === "select") {
        form_control = <FormControl as={props.as} onChange={(e) => props.setFunc(e.target.value)} type={props.type} placeholder={props.placeholder} >
            {children.map(function (item, i) {
                return (<option key={i} value={item.key}>{item.name}</option>)
            })}
        </FormControl >;
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