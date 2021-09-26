import './Techs.css'
import React from 'react'

function Techs(props) {
	return (
		<section className='section'>
			<div className='section__head section__head_techs'>
				<h2 className='section__title '>Технологии</h2>
			</div>
			<div className='section__article'>
				<div className='section__textblock_techs'>
					<h2 className='section__subtitle_techs'>7 технологий</h2>
					<p className='section__text_techs'>
						На курсе веб-разработки мы освоили технологии, которые применили в дипломном
						проекте.
					</p>
				</div>
			</div>

			<div className='section__container_techs'>
				<div className=' section__block_techs'>
					<p className='section__block_text-techs'> HTML</p>
				</div>
				<div className='section__block_techs'>
					<p className='section__block_text-techs'> CSS</p>
				</div>
				<div className='section__block_techs'>
					<p className='section__block_text-techs'> JS</p>
				</div>
				<div className='section__block_techs'>
					<p className='section__block_text-techs'> React</p>
				</div>
				<div className='section__block_techs'>
					<p className='section__block_text-techs'> Git</p>
				</div>
				<div className='section__block_techs'>
					<p className='section__block_text-techs'> Express.js</p>
				</div>
				<div className='section__block_techs'>
					<p className='section__block_text-techs'> mongoDB</p>
				</div>
			</div>
		</section>
	)
}

export default Techs
