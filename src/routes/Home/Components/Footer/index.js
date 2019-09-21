import React from 'react'

import {
	Container as ContainerStyled,
	Area as AreaStyled,
	Inc as IncStyled,
	Desc as DescStyled
} from './styles'

const Footer = () => 
	<ContainerStyled>
		<AreaStyled>
			<DescStyled> Projeto para portfólio, desenvolvido em <a href='https://pt-br.reactjs.org/' target='_blank' title='o que é React?' rel='noopener noreferrer'>React</a>. Projeto com o propósito de utilizar todos os meus conhecimentos em desenvolvimento web. </DescStyled>
			<IncStyled> 
				Maycbook 2019 &copy; - Maycon Silva ( <a href='https://github.com/Maycon-PE' 
					target='_blank' title='Conheça outros projetos!' 
					rel='noopener noreferrer'>
					_GitHub_
				</a> | <a href='https://www.facebook.com/profile.php?id=100008160376957' 
					target='_blank' title='Acesse meu Facebook!' 
					rel='noopener noreferrer'>
					_Facebook_
				</a> | <a href='https://www.linkedin.com/in/jos%C3%A9-maycon-19a217190/' 
					target='_blank' title='Acesse meu Linkedin!' 
					rel='noopener noreferrer'>
					_LinkedIn_
				</a> | <a href='mailto:maycon_hermogenes@hotmail.com' 
					title='Meu e-mail' >
					_Email_
				</a> )
			</IncStyled>
		</AreaStyled>
	</ContainerStyled>

export default Footer
