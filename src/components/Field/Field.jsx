import { FieldLayout } from './FieldLayout';
import { Component } from 'react';
import { connect } from 'react-redux';
import { makeMove } from '../../actions';
import { selectField } from '../../selectors';
import PropTypes from 'prop-types';

class MainFieldLayout extends Component {
	handleClick = (index) => {
		if (!this.props.isGameEnded && this.props.field[index] === '') {
			this.props.makeMove(index);
		}
	};

	render() {
		return (
			<div className="grid grid-cols-3 gap-1 w-[300px]">
				{this.props.field.map((cell, index) => (
					<button
						key={index}
						className="w-full aspect-square text-2xl font-bold bg-white border border-black hover:bg-gray-200"
						disabled={this.props.isGameEnded || cell !== ''}
						onClick={() => this.handleClick(index)}
					>
						{cell}
					</button>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: selectField(state),
});

const mapDispatchToProps = {
	makeMove,
};

export const Field = connect(mapStateToProps, mapDispatchToProps)(MainFieldLayout);

MainFieldLayout.propTypes = {
	makeMove: PropTypes.func,
	field: PropTypes.array,
};
