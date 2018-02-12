export default ({setState}) => ({
    decrement: state => ( { 
        counter: {
            ...state.counter, 
            count: state.counter.count - 1 
        }
    }),
    increment: state => ({ 
        counter: {
            ...state.counter, 
            count: state.counter.count + 1 
        } 
    })
});
  