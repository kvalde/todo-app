import React, {Component} from 'react';
import ListItem from '../ListItem/ListItem.js';
import { Button, Input, Grid} from '@material-ui/core'

export default class DataInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptionInputValue: '',
            todoInputValue: '',
            counter: 0,
            todos:[
                
            ]
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.updateDescriptionInputValue = this.updateDescriptionInputValue.bind(this)
        this.updateTodoInputValue = this.updateTodoInputValue.bind(this)
    }
    clickHandler () {
        if(this.state.descriptionInputValue !== '' && this.state.todoInputValue !== '')
        this.setState(prevState => ({
            todos: [...prevState.todos, {description: this.state.descriptionInputValue, todo: this.state.todoInputValue}]
        }))
        this.setState({descriptionInputValue: '', todoInputValue: ''})
    }
    updateDescriptionInputValue (e) {
        this.setState({descriptionInputValue: e.target.value})
    }
    updateTodoInputValue (e) {
        this.setState({todoInputValue: e.target.value})
    }
    render () {
        return (
            <div>
                <Grid container justify="center" direction="column" alignItems="center" style={{marginTop: "50px"}}>
                    <Input xs={6} placeholder='Enter Description' value={this.state.descriptionInputValue} onChange={this.updateDescriptionInputValue} className="descriptionInput" type="text"/>
                    <Input xs={6} placeholder='Enter ToDo' value={this.state.todoInputValue} onInput={this.updateTodoInputValue} className="todoInput" type="text"/>
                    <Button xs={6} style={{marginTop: "5px"}} onClick={this.clickHandler} variant="outlined" color="secondary">Add ToDo</Button>
                    {this.state.todos.map(elem => {
                        return <ListItem description={elem.description} todo={elem.todo}/>
                    })}
                </Grid>
            </div>
        )
    }
}