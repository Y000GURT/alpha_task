import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import MyButton from './UI/MyButton';
import likeIcon from '../img/like.png'
import likeIconActive from '../img/like-active.png'
import deleteIcon from '../img/delete.png'
import { useAppDispatch } from '../hooks/redux';
import { deleteCat, addLikedCat } from '../store/catSlice';
import { useNavigate } from 'react-router-dom';

interface ImgContainerProps {
    imageurl: string;
}
interface Props {
    imageurl: string;
    title: string;
    id: number;
}
const Card = styled.div`
    height: 320px;
    width: 250px;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 0.8rem;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.379);
    }
`
const ImgContainer = styled.div<ImgContainerProps>`
    width: 100%;
    height: 220px;
    border-radius: 10px;
    background-image: url(${props => props.imageurl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const CardTitle = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
`
const ButtonsContainer = styled.div`
    justify-self: flex-end;

    display: flex;
    justify-content: flex-end;
    column-gap: 0.8rem;
`
const ButtonImg = styled.img`
    height: 2rem;
    width: 2rem;
`

function CardItem({ id, imageurl, title }: Props) {
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    function handleLike(event: React.MouseEvent<HTMLButtonElement>) {
        event.stopPropagation()
        setIsLiked(!isLiked)
        dispatch(addLikedCat({id, url: imageurl, name: title}))
    }
    function handleDelete(event: React.MouseEvent<HTMLButtonElement>) {
        event.stopPropagation()
        dispatch(deleteCat(id))
    }
    return ( 
        <Card onClick={() => navigate(`/card/${id}`)}>
            <ImgContainer imageurl={imageurl}>
            </ImgContainer>
            <CardTitle>{title}</CardTitle>
            <ButtonsContainer>
                <MyButton height={'2rem'} width={'2rem'} onClick={handleLike}>
                    <ButtonImg src={isLiked ? likeIconActive : likeIcon} />
                </MyButton>
                <MyButton height={'2rem'} width={'2rem'} onClick={handleDelete}>
                    <ButtonImg src={deleteIcon}/>
                </MyButton>
                
            </ButtonsContainer>
        </Card>
     );
}

export default CardItem;