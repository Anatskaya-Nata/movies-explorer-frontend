import './MoviesCard.css'
import React from 'react'
//import pointMovie from '../images/icon__COLOR_rose.svg'
//import unPointMovie from '../images/icon__COLOR_white.svg'

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
				<img
					src={`https://api.nomoreparties.co${props.card.image.url}`}
					alt='кадр из фильма'
					className='movies__shot_picture'
				/>
			</div>
			<div className='movies__shot_info'>
				<div className='movies__shot_title'>{props.card.nameRU}</div>
				<button
					type='button'
					className='movies__shot_choice movies__shot_choice-active'
				></button>
			</div>
			<div className='movies__shot_time'>{props.card.duration}</div>
		</div>
	)
}
export default MoviesCard

//className={`movies__shot_choice-color movies__shot_choice-color-${props.card.name}`}

/*<img
						src={props.card.item}
						alt='сердечко'
						className={`movies__shot_choice-color `}
					/>*/
