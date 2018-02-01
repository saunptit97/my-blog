import React , {Component} from "react";
import callAPI from "./../util/callAPI";
import ContentDetail from "../components/ContentDetail";
import Banner from "../components/Banner";
class ContentPage extends Component{
    constructor(props){
        super(props);
        this.state={
            content : {

            }
        }
    }
    componentDidMount(){
        var {match} = this.props;
        var category = match.params.category;
        var id = match.params.id;
        callAPI(`${category}/${id}`, "GET", null).then(res =>{
            console.log(res.data);
            this.setState({
                content : res.data
            })
        })
    }
    
    render(){
        var {match} = this.props;
        var {content} = this.state;
        console.log(match.params);
        return(
            <div className="container m-t">
                <div className="row">
                    <div className="col-md-8">
                        <ContentDetail content ={content} key = {content.id} />
                    </div>
                    <div className="col-md-4">
                        <Banner />
                    </div>
                </div>
            </div>
        )
    }
}
export default ContentPage;