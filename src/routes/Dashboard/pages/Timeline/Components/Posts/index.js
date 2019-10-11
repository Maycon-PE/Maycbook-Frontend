import React, { useState } from 'react'

import { baseURL } from '../../../../../../Global/api'

import Comment from './Components/Comment'

import {
	Container as ContainerStyled,
	Header as HeaderStyled,
	Author as AuthorStyled,
	DateArea as DateAreaStyled,
	Picture as PictureStyled,
	Img as ImgStyled,
	Legend as LegendStyled,
	Footer as FooterStyled,
	Actions as ActionsStyled,
	CommentsArea as CommentsAreaStyled,
	LikeButton as LikeButtonStyled,
	CommentButton as CommentButtonStyled,
	DoComments as DoCommentsStyled,
	CommentsActions as CommentsActionsStyled
} from './styles'

const Post = ({ data, fb }) => {
	const [doComments, setDoComments] = useState({ status: false, sending: false })

	const { id, path, date, content, author, author_image, stats } = data

	const like = () => {
		fb.like(stats._id, res => {
			if (res) {
				console.log('Você curtiu')
			} else {
				console.log('Não foi possível curtir :/')
			}
		})
	}

	const comment = e => {
		e.preventDefault()
		setDoComments({ status: true, sending: true })

		const msg = document.getElementById(`post_id_${stats._id}`).value

		const data = { msg }

		fb.comment(stats._id, data, res => {

			if (res) {
				document.getElementById(`post_id_${stats._id}`).value = ''
			}
			setDoComments({ status: true, sending: false })
		})
	}

	const renderComments = () => {
		const comments = []


		stats.data.comments.forEach(data => {
			comments.push(<Comment key={`comment_${data._id}`} data={data} />)
		})

		return comments
	}

	return (
		<ContainerStyled>
			<HeaderStyled>
				<AuthorStyled>
					<img src={`${baseURL}/files/uploads/${author_image}`} alt='Imagem do autor' />
					<span>{ author }</span>
				</AuthorStyled>
				<DateAreaStyled>
					<span>{ stats.date }</span>
				</DateAreaStyled>
			</HeaderStyled>
			<PictureStyled>
				<ImgStyled>
					<img src={`${baseURL}/files/uploads/${path}`} alt='Publicação do autor' />
				</ImgStyled>
				<LegendStyled>
					<p>{ content }</p>
				</LegendStyled>
			</PictureStyled>
			<FooterStyled>
				<ActionsStyled>
					<LikeButtonStyled onClick={ like }>Curtir - { stats.data.rate.likes.length }</LikeButtonStyled>
					<CommentButtonStyled onClick={() => setDoComments({ ...doComments, status: !doComments.status }) }>Comentar - { stats.data.comments.length }</CommentButtonStyled>
				</ActionsStyled>
				<CommentsAreaStyled opened={ doComments.status }>
					<DoCommentsStyled req={ doComments.sending } onSubmit={ comment }>
						<textarea id={`post_id_${ stats._id }`} minLength='1' maxLength='200' required>
						</textarea>
						<CommentsActionsStyled>
							<button style={{ flex: '2' }} type='submit'>Enviar</button>
							<button type='button' onClick={() => document.getElementById(`post_id_${stats._id}`).value = ''}>Apagar tudo</button>
						</CommentsActionsStyled>
					</DoCommentsStyled>
					{ renderComments() }
				</CommentsAreaStyled>
			</FooterStyled>
		</ContainerStyled>
	)
}

export default Post
