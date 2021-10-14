import './MoviesCardList.css'
import React from 'react'
//import Preloader from '../Preloader/Preloader'
//import ErrorMessage from '../ErrorMessage/ErrorMessage'
import MoviesCard from '../MoviesCard/MoviesCard'
import { useWindowSize } from '../../utils/utils'
import {
	MAX_WIDTH,
	MEDIUM_WIDTH,
	MIN_WIDTH,
	MAX_WIDTH_INITIAL_CARDS,
	MEDIUM_WIDTH_INITIAL_CARDS,
	MIN_WIDTH_INITIAL_CARDS,
	MAX_WIDTH_MORE_CARDS,
	MEDIUM_WIDTH_MORE_CARDS,
	MIN_WIDTH_MORE_CARDS,
	SMALLEST_WIDTH_MORE_CARDS,
} from '../../utils/Constants'

function MoviesCardList(props) {
	const windowWidth = useWindowSize()
	//const [isnVisible, setVisible] = React.useState(true)
	const [initialCards, setInitialCards] = React.useState(0)
	const [moreCards, setMoreCards] = React.useState(0)

	//const [counter, setCounter] = React.useState(4)

	//function showMoreMovies() {
	//setCounter(counter + 4)
	//}

	function handleMoreBtnClick() {
		setInitialCards(initialCards + moreCards)
	}

	React.useEffect(() => {
		if (windowWidth >= MAX_WIDTH) {
			setInitialCards(MAX_WIDTH_INITIAL_CARDS)
			setMoreCards(MAX_WIDTH_MORE_CARDS)
		}
		if (windowWidth < MAX_WIDTH && windowWidth >= MEDIUM_WIDTH) {
			setInitialCards(MAX_WIDTH_INITIAL_CARDS)
			setMoreCards(MEDIUM_WIDTH_MORE_CARDS)
		}
		if (windowWidth < MEDIUM_WIDTH && windowWidth > MIN_WIDTH) {
			setInitialCards(MEDIUM_WIDTH_INITIAL_CARDS)
			setMoreCards(MIN_WIDTH_MORE_CARDS)
		}
		if (windowWidth <= MIN_WIDTH) {
			setInitialCards(MIN_WIDTH_INITIAL_CARDS)
			setMoreCards(SMALLEST_WIDTH_MORE_CARDS)
		}
	}, [windowWidth])

	return (
		<>
			<section className='movies__gallary_container'>
				{/*props.isSearching && <Preloader />*/}
				{
					/*props.cards.length === 0 ? (
					<p
						className={
							props.isVisible
								? 'movies__cardList_text'
								: 'movies__cardList_text movies__cardList_text-hidden'
						}
					>
						К сожалению, по данному запросу ничего не найдено :(
					</p>
				) : (*/
					<ul className='movies__gallary'>
						{props.movies.slice(0, initialCards).map((card, id) => {
							return (
								<li key={card.id || card._id} className='movies__gallary_item'>
									<MoviesCard card={card} key={id} id={card._id} />
								</li>
							)
						})}
					</ul>
				}
			</section>
			<button
				className={
					props.movies.length <= 12 || initialCards === props.movies.length
						? 'movies__button-more_hidden'
						: 'movies__button-more'
				}
				onClick={handleMoreBtnClick}
			>
				Ещё
			</button>
		</>
	)
}

export default MoviesCardList

/*<ul className='movies__gallary'>
{cards.map((card) => {
	console.log(card.image.url)
	return (
		<li className='movies__gallary_item' key={card.id}>
			<MoviesCard
				card={card}
				/*name={props.name}
				link={props.link}
				title={props.title}
				item={props.item}
				time={props.time}
			/>
		</li>
	)
})}
</ul>*/

//const cardsVisible = cards.slice(0, 4)
