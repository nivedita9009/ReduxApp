// const { createSlice } = require("@reduxjs/toolkit");

// const STATUSES = Object.freeze({
    
//         IDLE: 'idle',
//         ERROR: 'error',
//         LOADING: 'loading',
    
// });//enum is used to freeze a data , and enum have read only property.



// const productState = [];

// const productSlice = createSlice({
//     name: 'product',
//     initialState: {
//         data: [],
//         status: STATUSES.IDLE,
//     },
//     reducers: {
//         setProducts(state, action) {
//             ///do not do this . never....
//             ///    const res = await fetch('https://fakestoreapi.com/products');
//             ///reducers always syncronously one by one isliye ni kr skte..
//             state.data = action.payload;
        
//         },
//         setStatus(state,action){
//             state.status = action.payload;
//         },
      
//         },
//     });

// export const {setStatus,setProducts} = productSlice.actions;
// export default productSlice.reducer;


// ///thunks middleware-========

// //normal thunks========
// export function fetchProducts(){
//     return async function fetchProductsThunk(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING))
//         try{
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE))

//         }catch(error){
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR))

//         }
//     };

// }
