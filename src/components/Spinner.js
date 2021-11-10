import styled, {keyframes} from 'styled-components'

const Spinner = () => {
	return (
		<Loadingo class="loadingio-spinner-rolling-f8gpsq9nbd5"><Ldio class="ldio-05kuucmqu8hx">
			<div></div>
			</Ldio></Loadingo>
	)
}


const spinAnimation = keyframes`
	0% { transform: translate(-50%,-50%) rotate(0deg); }
	100% { transform: translate(-50%,-50%) rotate(360deg); }
`

const Loadingo = styled.div`
	width: 200px;
	height: 200px;
	display: block;
	margin: auto;
	overflow: hidden;
	background: #ffffff;
`

const Ldio = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	transform: translateZ(0) scale(1);
	backface-visibility: hidden;
	transform-origin: 0 0;
	div {
		box-sizing: content-box;
		animation: ldio-05kuucmqu8hx 1s linear infinite;
		animation-name: ${spinAnimation};
		top: 100px;
		left: 100px;
		position: absolute;
		width: 120px;
		height: 120px;
		border: 20px solid #0088ff;
		border-top-color: transparent;
		border-radius: 50%;
	}
`



export default Spinner