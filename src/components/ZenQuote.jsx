import React, { Component } from 'react';
import axios from 'axios';
import css from '../components/ZenQuote.css';

export default class ZenQuote extends Component {
	state = {
		quote: '',
		isLoaded: false
	};

	componentDidMount() {
		this.getQuote();
	}

	getQuote = () => {
		//load data and save to state
		axios.get('https://api.github.com/zen').then((response) => {
			this.setState({ quote: response.data, isLoaded: true });
		});
	};

	render() {
		return (
			<div onClick={this.getQuote}>
				{this.state.isLoaded ? (
					<div>
						<h1>Zen Programming Wisdom</h1>
						<div className='quote'>
							<p>&lt; {this.state.quote} /&gt;</p>
						</div>
					</div>
				) : (
					<div className='loading'>
						<div className='loading-dot' />
						<div className='loading-dot' />
						<div className='loading-dot' />
						<div className='loading-dot' />
					</div>
				)}
			</div>
		);
	}
}
