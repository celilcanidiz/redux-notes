import { createSlice } from "@reduxjs/toolkit/";

export const notesSlice = createSlice({
    name: "note",
    initialState:{
        items:localStorage.getItem('notes')
        ? JSON.parse(localStorage.getItem('notes'))
        :[
            {
                id:"1",
                text:"Süt Almayı Unutma",
                color:"#5b2929",
            },
            {
                id:"2",
                text:"Manava gidilecek",
                color:"#40899c",
            },
            {
                id:"3",
                text:"Kredi Kartı borcu yatırılacak",
                color:"#321369",
            },
            {
                id:"4",
                text:"Kedilere Mama Alınacak.",
                color:"#ff2266",
            },
        ],
        activeFilter: '',
    },
    reducers:{
        addNote: (state, action) => {
            state.items.push(action.payload);
            localStorage.setItem('notes', JSON.stringify(state.items));
        },
        destroy: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered;
            localStorage.setItem('notes', JSON.stringify(state.items));
        },
        search: (state, action) => {
            state.activeFilter = action.payload;
          },
    },
});

export const {addNote, destroy, search} = notesSlice.actions;
export default notesSlice.reducer;