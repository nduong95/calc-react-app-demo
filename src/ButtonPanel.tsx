import React from 'react';
import { properties, CalcAction, oldProperties } from './Calculator';
import ShadowButton from './ShadowButton';
import { Container, Grid } from '@material-ui/core';


interface ButtonPanelProps {
    onRefresh: (displayValue : string) => void;
    didCalculate: (result : number | null) => void;
}

const ButtonPanel: React.FC<ButtonPanelProps> = ({onRefresh, didCalculate} : ButtonPanelProps) => {  

    function isNumber(input: string) {
        let num = Number(input);
        return !isNaN(num)
    }

    const isEditNumOne = () => {
        return (properties.numTwo === null && properties.operator === null)
    }

    const onHandleClick = (value: string) => {
        console.log(value);
        let currentNum = isEditNumOne() ? properties.numOne : properties.numTwo;
        let newValue = (currentNum ?? "") + value;
        console.log(newValue);
        if (newValue.length <= 9) {
            if (isNumber(newValue)) {
                if (isEditNumOne()) {
                    properties.numOne = newValue;
                    oldProperties.numOne = newValue;
                } else {
                    properties.numTwo = newValue;
                    oldProperties.numTwo = newValue;
                }
                onRefresh(newValue);
            } else {
            console.log(currentNum + " is not a number");
            }
        } else {
        console.log("Số quá dài (tối đa 9 chữ số)");
        }
    };

    const onHandleDelete = () => {
        let currentNum = isEditNumOne() ? properties.numOne : properties.numTwo;
        let newValue = (currentNum ?? "").slice(0, -1);
        if (isEditNumOne()) {
            properties.numOne = newValue;
            oldProperties.numOne = newValue;
        } else {
            properties.numTwo = newValue;
            oldProperties.numTwo = newValue;
        }
        onRefresh(newValue);
    };

    const onHandleReset = () => {
        properties.numOne = null;
        properties.numTwo = null;
        properties.operator = null;
        oldProperties.numOne = null;
        oldProperties.numTwo = null;
        oldProperties.operator = null;
        oldProperties.isCalc = false;
        onRefresh("");
        console.log (properties);
        didCalculate(null);
    };

    const onHandleOperator = (value: CalcAction) => {
        if (properties.operator != null) {
            onCalculate();
        }

        properties.operator = value;
        oldProperties.operator = value;
        let displayValue = properties.numOne
        onRefresh(displayValue ?? "");
    };

    const onCalculate =() => {
        let result = calculateNumber();
        oldProperties.numOne = properties.numOne;
        oldProperties.numTwo = properties.numTwo;
        oldProperties.operator = properties.operator;
        oldProperties.isCalc = true;

        properties.numOne = result?.toString ()?? null;

        properties.numTwo = null;
        properties.operator = null;
        onRefresh(properties.numOne ?? "");
        didCalculate(result);

        oldProperties.numOne = result?.toString ()?? null;
        oldProperties.numTwo = null;
        oldProperties.operator = null;
        oldProperties.isCalc = false;
    }

    const calculateNumber = () => {
        let one = Number(properties.numOne);
        let two = Number(properties.numTwo);

        switch(properties.operator) {
        case CalcAction.plus:
            return Number((one + two).toPrecision(12));
        case CalcAction.divide:
            return Number((one / two).toPrecision(12));
        case CalcAction.multiply:
            return Number((one * two).toPrecision(12));
        case CalcAction.subtract:
            return Number((one - two).toPrecision(12));
        default:
            return null;
        }
    }

    const mainStyle: React.CSSProperties = {
        width: "90%",
        height: "85%",
        margin: 'auto',
        paddingLeft: 0,
        paddingRight: 0,
        // backgroundColor: 'blue',
    }

    const gridStyle: React.CSSProperties = {
        width: "auto",
        display: "grid",
        height: "20%",
        gridTemplateColumns: "repeat(4, 1fr)",
        rowGap: 19,   
        columnGap:  3, 
    };

    const gridStyle1: React.CSSProperties = {
        width: "auto",
        display: "grid",
        height: "20%",
        gridTemplateColumns: "repeat(2, 1fr)",
        rowGap: 19,
        columnGap: 3,   
        
    };

    return (
        <Container style={{
            height: '70%',
            width: "100%",
            // backgroundColor: 'green',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Container style={mainStyle}>
                <Grid style={gridStyle1}>
                    <ShadowButton title = {"DEL"} backgroundColor={'#F5963D'} onTap={onHandleDelete}/>
                    <ShadowButton title = {"AC"} backgroundColor={'#F5963D'} onTap={onHandleReset}/>
                </Grid>
                <Grid style={gridStyle}>
                    <ShadowButton title = {"7"} backgroundColor={'#D9D9D9'} onTap={() => onHandleClick("7")}/>
                    <ShadowButton title = {"8"} backgroundColor={'#D9D9D9'} onTap={() => onHandleClick("8")}/>
                    <ShadowButton title = {"9"} backgroundColor={'#D9D9D9'} onTap={() => onHandleClick("9")}/>
                    <ShadowButton title = {"+"} backgroundColor={'#D9D9D9'} onTap={() => onHandleOperator(CalcAction.plus)}/>
                </Grid>
                <Grid style={gridStyle}>
                    <ShadowButton title = {"4"} backgroundColor={'#D9D9D9'} onTap={() => onHandleClick("4")}/>
                    <ShadowButton title = {"5"} backgroundColor={'#D9D9D9'} onTap={() => onHandleClick("5")}/>
                    <ShadowButton title = {"6"} backgroundColor={'#D9D9D9'} onTap={() => onHandleClick("6")}/>
                    <ShadowButton title = {"-"} backgroundColor={'#D9D9D9'} onTap={() => onHandleOperator(CalcAction.subtract)}/>
                </Grid>
                <Grid style={gridStyle}>
                    <ShadowButton title = {"1"} backgroundColor={'#D9D9D9'} onTap={() => onHandleClick("1")}/>
                    <ShadowButton title = {"2"} backgroundColor={'#D9D9D9'} onTap={() => onHandleClick("2")}/>
                    <ShadowButton title = {"3"} backgroundColor={'#D9D9D9'} onTap={() => onHandleClick("3")}/>
                    <ShadowButton title = {"*"} backgroundColor={'#D9D9D9'} onTap={() => onHandleOperator(CalcAction.multiply)}/>
                </Grid>
                <Grid style={gridStyle}>
                    <ShadowButton title = {"."} backgroundColor={'#D9D9D9'} onTap={() => onHandleClick(".")}/>
                    <ShadowButton title = {"0"} backgroundColor={'#D9D9D9'} onTap={() => onHandleClick("0")}/>
                    <ShadowButton title = {"="} backgroundColor={'#D9D9D9'} onTap={() => onCalculate()}/>
                    <ShadowButton title = {"/"} backgroundColor={'#D9D9D9'} onTap={() => onHandleOperator(CalcAction.divide)}/>
                </Grid>
            </Container>
        </Container>
    );
    };

    export default ButtonPanel;
