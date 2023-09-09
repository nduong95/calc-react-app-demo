import React, {useState} from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import { Container } from '@material-ui/core';

type Props = {
    numOne : string |null,
    numTwo : string |null,
    operator: CalcAction |null
    isCalc : boolean
};

var properties : Props = {
    numOne : null,
    numTwo : null,
    operator : null,
    isCalc: false
}

var oldProperties : Props = {
    numOne : null,
    numTwo : null,
    operator : null,
    isCalc: false
};

enum CalcAction {
    plus,
    subtract,
    multiply,
    divide
}

var getOldValueString = () => {
    if(oldProperties == null || oldProperties.operator == null) {
        return "";
    }

    var text = "";
    text += oldProperties?.numOne ?? '';
    switch(oldProperties.operator) {
    case CalcAction.plus:
        text += " + ";
        break;
    case CalcAction.divide:
        text +=  " / ";
        break;
    case CalcAction.multiply:
        text += " * ";
        break;
    case CalcAction.subtract:
        text += " - ";
        break;
    default:
        text += "";
    }
    text += oldProperties?.numTwo ?? '';
    if (oldProperties.isCalc) {
        text += " = ";
    }
    return text;
}

const Calculator: React.FC = () => {
    const [value, setValue] = useState<String>("");
    const [oldValue, setOldValue] = useState<String>("");
    const [hexResult, setHexResult] = useState<String>("");
    const [binaryResult, setBinaryResult] = useState<String>("");

    const resetUi = (displayValue : string) => {    
        setValue(displayValue);
        setOldValue(getOldValueString());
    }

    const updateResult = (result: number | null) => {
        if(result == null) {
            setBinaryResult("");
            setHexResult("");
            return;
        }

        const hex = result.toString(16);
        const binary = (result >>> 0).toString(2)
        setBinaryResult(binary);
        setHexResult(hex);
    }

    const containerStyle : React.CSSProperties = {
        width: "50vmin",
        height:"90vmin",
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor : '#C5C4C4',
        position: "relative",
        minWidth: 100
    }

    return (
        <>
            <Container style={containerStyle} >
                <Display binaryResult = {binaryResult} hexResult = {hexResult} oldValue={oldValue} value = {value}/>
                <ButtonPanel onRefresh = {(e) => resetUi(e)} didCalculate={(result) => updateResult(result)} />
            </Container>
        </>
    );
};

export default Calculator;
export { properties, oldProperties, CalcAction };