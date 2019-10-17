import React from 'react'

import { baseURL } from '../../../../../../Global/api'

import Comment from './Components/Comment'

import {
	Container as ContainerStyled,
	Area as AreaStyled,
	Left as LeftStyled,
	LeftImg as LeftImgStyled,
	Right as RightStyled,
	RightHeader as RightHeaderStyled,
	Profile as ProfileStyled,
	Actions as ActionsStyled,
	RightBody as RightBodyStyled,
	Description as DescriptionStyled,
	DoComment as DocommentStyled,
	DoCommentActions as DocommentActionsStyled
} from './styles'

const Publication = ({ data }) => {
	const { path, author, author_image, content, stats } = data

	const renderComments = () => {
		const comments = []

		stats.data.comments.forEach(data => {
			comments.push(<Comment key={`comment_key_${data._id}`} data={data} />)
		})

		return comments
	}


	return (
		<ContainerStyled>
			<AreaStyled>
				<LeftStyled>
					<LeftImgStyled>
						<img src={`${baseURL}/files/uploads/${path}`} alt='Imagem da publicação' />
					</LeftImgStyled>
				</LeftStyled>
				<RightStyled>
					<RightHeaderStyled>
						<ProfileStyled>
							<img src={`${baseURL}/files/uploads/${author_image}`} alt='Foto do usuário' />
							<span className='name_author'>{ author }</span>
							<span className='date_post'>{ stats.date }</span>
						</ProfileStyled>
						<DescriptionStyled>
							<p>{ content }</p>
						</DescriptionStyled>
						<ActionsStyled>
							<button className='action_like'>Curtir</button>
							<button className='action_comment'>Comentar</button>
						</ActionsStyled>
					</RightHeaderStyled>
					<RightBodyStyled>
						<DocommentStyled>
							<textarea placeholder='Faça um comentário' minLength='1' maxLength='200' required>
							</textarea>
							<DocommentActionsStyled>
								<button type='button' className='btn_cancel'>Apagar</button>
								<button type='submit'>Enviar</button>
							</DocommentActionsStyled>
						</DocommentStyled>
						{ renderComments() }
					</RightBodyStyled>
				</RightStyled>
			</AreaStyled>
		</ContainerStyled>
	)

}

// <ProfileStyled>
						// <img src={`${baseURL}/files/uploads/${author_image}`} alt='Imagem do autor' />
					// </ProfileStyled>

export default Publication
