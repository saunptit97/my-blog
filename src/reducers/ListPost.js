import callAPI from "./../util/callAPI";
var initialState = [];

const ListPost = (state = initialState , action) =>{
    // callAPI("posts","GET", null).then(res=>{
    //     state.push(res);
    // })
    switch (action.type) {
        default:
            return [...state];
            break;
    }
}
export default ListPost;