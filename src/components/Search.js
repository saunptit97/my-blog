import React ,{Component}from "react";

class Search extends Component{
    render(){
        return(
            <div className="input-group right-icon">
                <input type="text" className="form-control" placeholder="Search for..."  id="search"/>
                <span className="input-group-btn">
                    <button className="btn" ><span className="fa fa-search "/></button>   
                </span>
            </div>
        )
    }
}
export default Search;