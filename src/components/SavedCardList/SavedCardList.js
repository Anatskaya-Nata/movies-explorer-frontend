import React from 'react'

import MoviesCard from '../MoviesCard/MoviesCard'
import { cardsSavedList } from '../Constants'

const SavedCardList = (props) => {
	return (
		<ul className='movies__gallary'>
			{cardsSavedList.map((props) => {
				return (
					<li key={props.key}>
						<MoviesCard
							name='saved'
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

export default SavedCardList
