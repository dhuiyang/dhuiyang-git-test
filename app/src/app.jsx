import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import ListItems from './ListItem'
import Header from './Header'
import PropTypes from 'prop-types'
import './index.css'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            todoItem:"",
            items:[]
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.onChange=this.onChange.bind(this)
    }
    onChange(event){
        this.setState({
            todoItem:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()
        this.setState({
            todoItem:'',
            items:[
                ...this.state.items,
                this.state.todoItem
            ]
        })
    }
    render(){
        return(
        <div className='container'>
            <Header title='TodoList' />
            <form className="form-wrap" onSubmit={this.onSubmit}>
                <input value={this.state.todoItem} onChange={this.onChange}/>
                <button>Submit</button>
            </form>
            <ListItems items={this.state.items} />
        </div>
        )
    }  
} 
App.propTypes = {
    items: PropTypes.array,
    todoItem: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,

}
render(
    <App />,document.getElementById('app')
)