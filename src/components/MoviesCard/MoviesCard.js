import './MoviesCard.css'
import React from 'react'

/*function MoviesCard({ link, title, item, time }) {
	return (
		<div className='movies__card'>
			<div className='movies__shot'>
				<img src={link} alt='кадр из фильма' className='movies__shot_picture' />
			</div>
			<div className='movies__shot_info'>
				<div className='movies__shot_title'>{title}</div>
				<div className='movies__shot_choice'>
					<img src={item} alt='сердечко' className='movies__shot_choice-color' />
				</div>
			</div>
			<div className='movies__shot_time'>{time}</div>
		</div>
	)
}
export default MoviesCard*/

function MoviesCard(props) {
	return (
		<div className='movies__card '>
			<div className='movies__shot'>
				<img src={props.link} alt='кадр из фильма' className='movies__shot_picture' />
			</div>
			<div className='movies__shot_info'>
				<div className='movies__shot_title'>{props.title}</div>
				<div className='movies__shot_choice'>
					<img
						src={props.item}
						alt='сердечко'
						className={`movies__shot_choice-color movies__shot_choice-color-${props.name}`}
					/>
				</div>
			</div>
			<div className='movies__shot_time'>{props.time}</div>
		</div>
	)
}
export default MoviesCard
