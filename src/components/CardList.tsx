import React from 'react'
import styled from 'styled-components';
import CardItem from './CardItem';
import { useAppSelector } from '../hooks/redux';

const CardListContainer = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 1.5rem;
`

function CardList() {
    const cats = useAppSelector(state => state.cat.cats)
    const likedCats = useAppSelector(state => state.cat.likedCats)
    const mode = useAppSelector(state => state.cat.mode)
    return ( 
        <CardListContainer>
            {
                mode === 'normal' 
                ?
                cats.map(cat => (
                    <CardItem key={cat.id} id={cat.id} imageurl={cat.url} title={cat.name}></CardItem>
                ))
                :
                likedCats.map(cat => (
                    <CardItem key={cat.id} id={cat.id} imageurl={cat.url} title={cat.name}></CardItem>
                ))
            }
        </CardListContainer>
     );
}

export default CardList;