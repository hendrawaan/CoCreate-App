import {
    FormControl,
    InputGroup
} from "react-bootstrap";

const InputGroupCustom = (props) => {
    return (<InputGroup >
        <InputGroup.Prepend>
            <InputGroup.Text>{props.icon}</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl onChange={(e) => props.setFunc(e.target.value)} type={props.type} placeholder={props.placeholder} />
    </InputGroup>
    )
}
export default InputGroupCustom