import PropTypes from 'prop-types';
import { selectField, selectIsGameEnded } from '../../selectors';
import { connect } from 'react-redux';
import { Component } from 'react';

class MainFieldLayout extends Component {
	render() {
		const { field, isGameEnded, onClick } = this.props;

		return (
			<div className="field-wrapper">
				<ul className="field-list">
					{field.map((symbol, index) => (
						<li key={index} className="field-cell">
							<button
								className="field-button"
								onClick={() => onClick(index)}
								disabled={isGameEnded}
							>
								{symbol}
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: selectField(state),
	isGameEnded: selectIsGameEnded(state),
});

export const FieldLayout = connect(mapStateToProps)(MainFieldLayout);

MainFieldLayout.propTypes = {
	field: PropTypes.array,
	isGameEnded: PropTypes.bool,
	onClick: PropTypes.func,
};
