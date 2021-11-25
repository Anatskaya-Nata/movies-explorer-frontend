import './AboutMe.css'
import photoStudent from '../../images/photo_pic.jpg'
import arrow from '../../images/text__COLOR_font-main.svg'
import React from 'react'

function AboutMe(props) {
	return (
		<section className='section'>
			<div className='section__head'>
				<h2 className='section__title '>Студент</h2>
			</div>
			<div className='section__student_info'>
				<img src={photoStudent} alt='фото студента' className='section__student-photo' />
				<div className='section__student_block'>
					<div className='section__student_textblock'>
						<h2 className='section__student_name'>Наталия</h2>
						<p className='section__student_about'>Фронтенд-разработчик, 52 года</p>
						<p className='section__student_about section__student_about-text'>
							Я родилась и живу в Екатеринбурге. По образованию архитектор,но всю
							сознательную жизнь я занималась производством вывесок. Для меня обучение в
							Яндексе-это вызов себе самой. Я тот студент, который начинал не с нуля, а из
							глубокого минуса. Не знаю как быстро мне удастся оказаться в новой
							профессии, но в любом случае, я не собираюсь на этом останавливаться. Мне
							было очень сложно, но от того ценнее и дороже полученный результат
						</p>
					</div>
					<div className='section__sudent_nets'>
						<p className='section__net'>Facebook</p>
						<p className='section__net'>Github</p>
					</div>
				</div>
			</div>

			<div className='section__portfolio'>
				<h3 className='section__portfolio_title'>Портфолио</h3>

				<div className='section__portfolio_block'>
					<p className='section__portfolio_text'>Статичный сайт</p>
					<button type='button' className='section__portfolio_button'>
						<a
							href='https://www.y-a-r.ru/'
							rel='noreferrer'
							target='_blank'
							className='bottom__link'
						>
							<img src={arrow} alt='стрелка' className='section__portfolio_pic' />
						</a>
					</button>
				</div>
				<div className='section__portfolio_block'>
					<p className='section__portfolio_text'>Адаптивный сайт</p>
					<button type='button' className='section__portfolio_button'>
						<a
							href='https://anatskaya-nata.github.io/russian-travel/ '
							rel='noreferrer'
							target='_blank'
							className='bottom__link'
						>
							<img src={arrow} alt='стрелка' className='section__portfolio_pic' />
						</a>
					</button>
				</div>
				<div className='section__portfolio_block section__portfolio_block-end'>
					<p className='section__portfolio_text'>Одностраничное приложение</p>
					<button type='button' className='section__portfolio_button'>
						<a
							href='https://frontend.mesto.nomoredomains.rocks/'
							rel='noreferrer'
							target='_blank'
							className='bottom__link'
						>
							<img src={arrow} alt='стрелка' className='section__portfolio_pic' />
						</a>
					</button>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
