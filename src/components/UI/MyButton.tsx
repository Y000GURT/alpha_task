import React from 'react'
import styled from 'styled-components';

interface ButtonProps {
    height?: string;
    width?: string;
    bgcolor?: string;
    padding?: string;
}

interface Props extends ButtonProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = styled.button<ButtonProps>`
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
    transition: all 0.3s ease;
    padding: ${props => props.padding || '1rem'};
    border-radius: 0.5rem;
    background: ${props => props.bgcolor || 'none'};
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transform: scale(1.1)
    }
`

function MyButton({ children, onClick, ...props }: Props) {
    return ( 
        <Button {...props} onClick={onClick}> 
            {children} 
        </Button>
    );
}

export default MyButton;