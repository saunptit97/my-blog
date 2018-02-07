import React , {Component} from "react";
import {
    Link
}from "react-router-dom"
export default class TableContent extends Component{
    onDelete = (e) =>{
        this.props.onDelete(e);
    }
    onEdit = e =>{
        this.props.onEdit(e);
    }
    render(){
        var {content} = this.props;
        return(
    <tr>
        <td>{content.id}</td>
        <td>{content.title}</td>
        <td>{content.by}</td>
        <td>{content.time}</td>
        <td>
            <Link to ={`/form-edit/id=${content.id}&&category=${content.category}`} className="warning" ><i className="fa fa-edit"></i> Edit</Link>
            <button className="danger ml-10" onClick={() => this.onDelete(content.id)}><i className="fa fa-window-close"></i> Delete</button>
        </td>
    </tr>
        )
    }
}