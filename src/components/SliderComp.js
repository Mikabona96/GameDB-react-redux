import { useState } from 'react'
import { smallImage } from '../util'
import styled from 'styled-components'
import larrow from '../img/larrow.svg'
import rarrow from '../img/rarrow.svg'


const SliderComp = ({screen}) => {


	const [current, setCurrent] = useState(0)
	const length = screen.length

	const nextSlide = () => {
		setCurrent(current === length -1 ? 0 : current + 1)
	}
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (!Array.isArray(screen) || length <= 0) {
		return null
	}

		console.log(current)


	return (
		<Slider>
			{
				screen.map((screen, idx) => (
					<Slide current={current} idx={idx} key={screen.id}>
						{idx === current && (
							<Image src={smallImage(screen.image, 1280)} alt="" />
						)}
					</Slide>
				))
			}

			<ButtonLeft onClick={prevSlide}>
				<img src={larrow} alt="" />
			</ButtonLeft>
			<ButtonRight onClick={nextSlide}>
				<img src={rarrow} alt="" />
			</ButtonRight>
		</Slider>
	)
}


const Slider = styled.div`
	position: relative;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Slide = styled.div`
	opacity: ${props => props.idx === props.current ? 1 : 0};
	transition: 1s ease;
	transform: scale(${props => props.idx === props.current ? 1 : 0.9});
`

const Image = styled.img`

`

const ButtonLeft = styled.div`
	width: 3rem;
	position: absolute;
	left: -15%;
	top: 50%;
	transform: translateY(-50%);
	:active {
		img {transform: scale(0.9)}
	}
`

const ButtonRight = styled.div`
	width: 3rem;
	position: absolute;
	right: -15%;
	top: 50%;
	transform: translateY(-50%);
	:active {
		img {transform: scale(0.9)}
	}
`

export default SliderComp