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

//MYSQL POST
// content: "Melhor filme!!!"
// created_at: "2019-09-29T18:44:20.717Z"
// id: 2
// path: "posts/2_julio-1569782659212.jpg"
// stats: "5d90fb848be2fa1b908934bc"
// updated_at: "2019-09-29T18:44:20.717Z"
// user_id: 2

//MYSQL USER
// created_at: "2019-09-29T17:38:09.706Z"
// email: "carla@hotmail.com"
// genre: "f"
// id: 1
// image: "profiles/default-f.jpg"
// name: "Carla"
// password: "$2a$10$1ifRsjcq00D4jEJWBEoNNeo5mpQpUAk7TN3YtNSa4aFlr9sygSCk6"
// updated_at: "2019-09-29T17:38:09.706Z"

//MONGODB STATS
// createdAt: "2019-09-29T18:44:20.500Z"
// data: {rate: {…}, comments: Array(0)}
// date: "29/09/2019-15:44:20"
// post_id: 2
// updatedAt: "2019-09-29T18:44:20.892Z"
// user_id: 2
// __v: 0
// _id: "5d90fb848be2fa1b908934bc"

const Post = ({ data, fb }) => {
	const [doComments, setDoComments] = useState({ status: false, sending: false })

	const { id, path, date, content, author, author_image, stats } = data

	const [statsHook, setStateHook] = useState({ ...stats })

	const like = () => {
		fb.like(stats._id, data => {
			if (data !== null) {
				const newStateHook = { ...statsHook }
				newStateHook.data.rate.likes = data

				setStateHook({ ...newStateHook })
			}
		})
	}

	const comment = e => {
		e.preventDefault()
		setDoComments({ status: true, sending: true })

		const msg = document.getElementById(`post_id_${stats._id}`).value

		const data = { msg }

		fb.comment(stats._id, data, res => {
			if (res !== null) {
				const newStateHook = { ...statsHook }
				newStateHook.data.comments = res

				setStateHook({ ...newStateHook })
				document.getElementById(`post_id_${stats._id}`).value = ''
			}
			setDoComments({ status: true, sending: false })
		})
	}

	const renderComments = () => {
		const comments = []


		statsHook.data.comments.forEach(data => {
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
					<LikeButtonStyled onClick={ like }>Curtir - { statsHook.data.rate.likes.length }</LikeButtonStyled>
					<CommentButtonStyled onClick={() => setDoComments({ ...doComments, status: !doComments.status }) }>Comentar - { statsHook.data.comments.length }</CommentButtonStyled>
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
