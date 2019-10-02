import React, { useState } from 'react'

import { baseURL } from '../../../../../../Global/api'

import * as requests from './requests'

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
	CommentButton as CommentButtonStyled
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
	const [doComments, setDoComments] = useState(false)

	const { id, path, date, content, author, author_image, stats } = data

	const [statsHook, setStateHook] = useState({ ...stats })

	const like = _id => {
		fb.like(_id, data => {
			if (data !== null) {
				const newStateHook = { ...statsHook }
				newStateHook.data.rate.likes = data

				setStateHook({ ...newStateHook })
				console.log(data)
			}
		})
	}

	const renderComments = () => {
		const comments = []

		for (let i = 0; i <= 3; i++ ) {
			comments.push(<Comment key={i} />)
		}

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
					<LikeButtonStyled onClick={ () => like(stats._id) }>Curtir - { statsHook.data.rate.likes.length }</LikeButtonStyled>
					<CommentButtonStyled onClick={() => setDoComments(!doComments) }>Comentar</CommentButtonStyled>
				</ActionsStyled>
				<CommentsAreaStyled opened={ doComments }>
					{ renderComments() }
				</CommentsAreaStyled>
			</FooterStyled>
		</ContainerStyled>
	)
}

export default Post
