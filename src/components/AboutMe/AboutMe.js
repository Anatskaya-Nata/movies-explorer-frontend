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
							Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть
							жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал
							кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл
							курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
							постоянной работы.
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
					<img src={arrow} alt='стрелка' className='section__portfolio_pic' />
				</div>
				<div className='section__portfolio_block'>
					<p className='section__portfolio_text'>Адаптивный сайт</p>
					<img src={arrow} alt='стрелка' className='section__portfolio_pic' />
				</div>
				<div className='section__portfolio_block section__portfolio_block-end'>
					<p className='section__portfolio_text'>Одностраничное приложение</p>
					<img src={arrow} alt='стрелка' className='section__portfolio_pic' />
				</div>
			</div>
		</section>
	)
}

export default AboutMe
