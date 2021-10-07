import './AboutProject.css'
import React from 'react'

function AboutProject(props) {
	return (
		<section className='section'>
			<div className='section__head'>
				<h2 className='section__title'>О проекте</h2>
			</div>
			<div className='section__paragraph'>
				<div className='section__textblock'>
					<h2 className='section__subtitle'>Дипломный проект включал 5 этапов</h2>
					<p className='section__text'>
						Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
						финальные доработки.
					</p>
				</div>
				<div className='section__textblock'>
					<h2 className='section__subtitle'>На выполнение диплома ушло 5 недель</h2>
					<p className='section__text'>
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
						чтобы успешно защититься.
					</p>
				</div>
			</div>

			<div className='section__container'>
				<div className='section__block section__block_green'>
					<p className='section__block_text'> 1 неделя</p>
				</div>

				<div className='section__block section__block_gray'>
					<p className='section__block_text'> 4 недели</p>
				</div>
				<div className='section__block section__block_underbar'>
					<p className='section__block_text'> Back-end</p>
				</div>
				<div className='section__block section__block_underbar'>
					<p className='section__block_text'>Front-end</p>
				</div>
			</div>
		</section>
	)
}

export default AboutProject
/*<p className='project__greybar_text'>4 недели</p>
	<p className='project__underbar_text'>Back-end</p>*/
