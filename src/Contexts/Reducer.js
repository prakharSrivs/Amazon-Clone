export const initialState = {
    basket:[]
};


const reducer = (state,action)=>{
   switch(action.type)
   {
    case 'ATC':
        
        return {
            ...state,
            basket :[...state.basket,action.payload]
        };
    case 'RFC':
        console.log(action.payload);
        state.basket=state.basket.filter(function(element){
            if(element.id!=action.payload.id){
                console.log(element);
            return element;
            }
        })
        console.log(state.basket);
        return {
            basket :[...state.basket]
        };
    default :
        console.log("HERE");
        return state;

   }

}
export default reducer;

export const getBasketTotal = (basket) => {
    return basket.reduce((amount,item)=> item.price+amount , 0);
};
