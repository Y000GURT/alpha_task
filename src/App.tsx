import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setCats } from './store/catSlice';
import styled from 'styled-components';
import CardList from './components/CardList';
import FilterMenu from './components/FilterMenu';

const AppWrapper = styled.div`
  height: 100%;
  width: 1200px;
  padding: 1rem;
`
const AppContent = styled.div`
  height: 100%;
  font-size: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
`

function App() {
  const dispatch = useAppDispatch()
  const likedCats = useAppSelector(state => state.cat.likedCats)
  const mode = useAppSelector(state => state.cat.mode)

  useEffect(() => {
    async function fecthCats() {
      try {
        const response = await fetch('https://e8c9d502701f2a5d.mokky.dev/cats') 
        const data = await response.json()

        if(!response.ok) {
          throw new Error(data.message)
        }
        dispatch(setCats(data))
      } 
      catch (error) {
        console.log(error)
      }
    }

    fecthCats()
  }, [dispatch])

  return (
    <AppWrapper>
      <AppContent>
        <FilterMenu/>
        {
          mode === 'liked' && likedCats.length === 0 
          ?
          <h2>Избранных котиков нет((</h2>
          :
          <CardList/>
        }
      </AppContent>
    </AppWrapper>
  );
}

export default App;
