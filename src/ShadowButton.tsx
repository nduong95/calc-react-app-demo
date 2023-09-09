import { Container } from "@material-ui/core";

interface ShadowButtonProps {
    title : string,
    onTap: () => void,
    backgroundColor: string
}

const ShadowButton : React.FC <ShadowButtonProps> = ({title, onTap, backgroundColor} : ShadowButtonProps ) => {

    const btnStyles: React.CSSProperties = {      
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',  
        backgroundColor:  backgroundColor,        
        border: '0',        
        borderRadius: "25px 25px 25px 25px", 
        width: "90%",       
        height: "80%",       
        fontWeight : "bold",          
        fontSize: "3vmin",
        fontFamily: 'Roboto',    
        cursor: 'pointer',  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <Container style={{
            padding: 0,
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <button style = {btnStyles} onClick={() => { onTap()}}>
            {title}
            </button>    
        </Container>
    );
}
export default ShadowButton;
