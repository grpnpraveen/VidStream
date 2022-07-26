import React from "react";
import _ from "lodash";
import {connect} from "react-redux";
import {fetchStream, editStream} from "../../actions";
import StreamForm from "./streamForm";

class StreamEdit extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit=(formValues)=>
    {

        this.props.editStream(this.props.match.params.id,formValues);
    }
    render()
    {
        if(!this.props.stream)
        {
            return <div>Loading...</div>;
        }
  
        return <StreamForm 
                
                formtitle="Edit a Stream" 
                initialValues={_.pick(this.props.stream,'title','description')} 
                onSubmit={this.onSubmit}
                
                /> ;        
    }
}

const mapStateToProps=(state,ownProps)=>{
return {stream: state.streams[ownProps.match.params.id]};
}
export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);