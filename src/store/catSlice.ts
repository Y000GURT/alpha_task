import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICat } from '../models/ICat';

interface State {
    cats: ICat[],
    likedCats: ICat[],
    mode: 'normal' | 'liked'
}

const initialState: State = {
    cats: [],
    likedCats: [],
    mode: 'normal',
}

export const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        setCats(state, action: PayloadAction<ICat[]>) {
            state.cats = action.payload
        },
        addLikedCat(state, action: PayloadAction<ICat>) {
            if (state.likedCats.find(cat => cat.id === action.payload.id)) { // если карточка уже есть в likedCats, то удаляем ее
                state.likedCats = state.likedCats.filter(cat => cat.id !== action.payload.id)
            } 
            else {
                state.likedCats.push(action.payload)
            }
        },
        deleteCat(state, action: PayloadAction<number>) {
            if(state.mode === 'liked') {
                state.likedCats = state.likedCats.filter(cat => cat.id !== action.payload)
            }
            else {
                state.cats = state.cats.filter(cat => cat.id !== action.payload)
                state.likedCats = state.likedCats.filter(cat => cat.id !== action.payload)
            }
        },
        setMode(state, action: PayloadAction<boolean>) {
            if(action.payload) {state.mode = 'liked'}
            else {state.mode = 'normal'}
        }
    }
})

export const { addLikedCat, setCats, deleteCat, setMode } = catSlice.actions;

export default catSlice.reducer