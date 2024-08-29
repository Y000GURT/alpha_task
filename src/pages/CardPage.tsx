import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import MyButton from '../components/UI/MyButton';

interface ImgContainerProps {
    imageurl: string;
}

const CardPageContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
`
const ImgContainer = styled.div<ImgContainerProps>`
    width: 600px;
    height: 320px;
    border-radius: 5px;
    background-image: url(${props => props.imageurl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`
const CardTitle = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
`
function CardPage() {
    const params = useParams<{id: string}>()
    const navigate = useNavigate()
    const cats = useAppSelector(state => state.cat.cats)
    const cat = cats.find(cat => cat.id === Number(params.id))

    function handleBack() {
        navigate('/')
    }

    if(!cat) {
        return (
            <h1>Такого котика нет(</h1>
        )
    }

    return ( 
        <CardPageContainer>
            <MyButton onClick={handleBack} bgcolor='#6ec1ff'>Вернуться</MyButton>
            <ImgContainer imageurl={cat.url}/>
            <CardTitle>{ cat.name }</CardTitle>
        </CardPageContainer>
     );
}

export default CardPage;