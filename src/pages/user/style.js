import styled from 'styled-components';

export const LogoBox = styled.div `
	width: 100%;
	height: auto;
	margin: 35px auto 45px;
	text-align: center;
`;

export const FormContent = styled.div `
	.am-list-line{
		margin-right: 15px;
	}
	.am-list-item .am-input-label{
		margin-left: 15px;
	}
	.am-list-item .am-input-label.am-input-label-5 {
		width: 30px;
	}
	.am-list-item .am-input-extra{
		max-height: 27px;
	}
	.am-list-item .am-input-control input{
		font-size: 15px;
	}
`
export const BtnWrap = styled.div `
	width: 210px;
	height: 45px;
	margin: 40px auto 0;
	.am-button{
		color: #fff;
		background: linear-gradient(to bottom, #7486FC, #4048F8);
		border-radius: 24px;
		height: 45px;
		line-height: 45px;
		&:before{
			display: none;
		}
		span{
			font-size: 15px;
		}
	}
`

export const WidBtn = styled(BtnWrap) `
	margin-top: 80px;
	width: 310px;
`

export const ToggleType = styled.div `
	text-align: center;
	color: #999;
	font-size: 12px;
	margin-top: 25px;
`

export const Read = styled.div `
	text-align: center;
	color: #CCCCCC;
	font-size: 12px;
	margin-top: 50px;
`

export const ForgetWrap = styled.div `
	text-align: right;
	margin-top: 15px;
	padding: 0 25px;
`