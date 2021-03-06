import React from 'react';

class ListTaskItem extends React.Component{
	
	onToggleTask() {
		this.props.onToggleTask(this.props.task.id)
	}
	
	onDeleteTask() {
		this.props.onDeleteTask(this.props.task.id)
	}
	
	onClickUpItem() {
		this.props.onClickUpItem(this.props.task.id)
	}
	
	onClickDownItem() {
		this.props.onClickDownItem(this.props.task.id)
	}
	
	constructor(props) {
		super(props)
		
		this.onToggleTask = this.onToggleTask.bind(this)
		this.onDeleteTask = this.onDeleteTask.bind(this)
	}
	
	render() {
		var label = this.props.task.text
		var text = label
		
		if(this.props.task.completed) {
			text = <del>{label}</del>
		}
		
		return(
			<li className="collection-item">
				<div>
					<div className="chip category">
						{this.props.task.category}
					</div>
					{text}
					<a href="#!" className="secondary-content">
						<i className="material-icons icon-listTaskItem" onClick={this.onClickDownItem.bind(this)}>
							keyboard_arrow_down
						</i>
						<i className="material-icons icon-listTaskItem" onClick={this.onClickUpItem.bind(this)}>
							keyboard_arrow_up
						</i>
						<i className="material-icons icon-listTaskItem" onClick={this.onDeleteTask}>
							delete
						</i>
						<i className="material-icons icon-listTaskItem" onClick={this.onToggleTask}>
							done
						</i>
					</a>
				</div>
			</li>            
		)
	}
}

export default ListTaskItem;