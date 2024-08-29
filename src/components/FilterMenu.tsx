import React, { useState } from 'react'
import styled from 'styled-components';
import MyButton from './UI/MyButton';
import likeIcon from '../img/like.png'
import { useAppDispatch } from '../hooks/redux';
import { setMode } from '../store/catSlice';

const FilterMenuContainer = styled.div`
    align-self: flex-start;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 0.5rem;
`
const FilterMenuTitle = styled.div`
    font-weight: bold;
`
const ButtonImg = styled.img`
    height: 2rem;
    width: 2rem;
`
function FilterMenu() {
    const [isFiltered, setIsFiltered] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    function handleAddLikedCat() {
        setIsFiltered(!isFiltered)
        dispatch(setMode(!isFiltered))
    }
    return ( 
        <FilterMenuContainer>
            <FilterMenuTitle>Фильтрация</FilterMenuTitle>
            <MyButton height='2.5rem' width='2.5rem' padding='1.5rem' onClick={handleAddLikedCat} bgcolor={isFiltered ? '#89cbfe' : '#d3ecff'}>
                <ButtonImg src={likeIcon}/>
            </MyButton>
        </FilterMenuContainer>
    );
}

export default FilterMenu;