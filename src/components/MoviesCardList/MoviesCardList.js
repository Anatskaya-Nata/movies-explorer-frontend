import './MoviesCardList.css'
import React from 'react'

import MoviesCard from '../MoviesCard/MoviesCard'
import { cardsList } from '../Constants'

const MoviesCardList = (props) => {
	return (
		<ul className='movies__gallary'>
			{cardsList.map((props, name) => {
				return (
					<li className='movies__gallary_item' key={props.key}>
						<MoviesCard
							name={name}
							link={props.link}
							title={props.title}
							item={props.item}
							time={props.time}
						/>
					</li>
				)
			})}
		</ul>
	)
}

export default MoviesCardList
