import React from "react";
import {Field,reduxForm} from "redux-form";

class StreamForm extends React.Component{

    renderError(meta)
    {
        if(meta.touched && meta.error)
        {
            return (
                <div className="ui error message">
                    <div className="header">
                    {meta.error}
                    </div>
                </div>
            );
        }
    }

    renderInput=(formProps)=> // or renderInout({input}) and directly {...input} in return 
    {
        // return <input 
        //         onChange={formProps.input.onChange} 
        //         value={formProps.input.value} 
        //         />;
        // return <input {...formProps.input} />; //assigning all input objs
        const className=`field ${formProps.meta.error && formProps.meta.touched ? 'error':''}`;
        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} />
                <div>{this.renderError(formProps.meta)}</div>
                </div> 
        );
    }
    onSubmit=(formValues)=>
    {
        this.props.onSubmit(formValues);
    }
    render()
    {
        return (
            <div>
                <h3>{this.props.formtitle}</h3>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>

            </div>

        );
    }
}

const validate=formValues=>{
        const errors={};
        if(!formValues.title)
        {
            errors.title='You must enter title';
        }

        if(!formValues.description)
        {
            errors.description='You must enter description';
        }
        return errors;
    };

export default reduxForm({form: 'streamForm',validate: validate})(StreamForm);