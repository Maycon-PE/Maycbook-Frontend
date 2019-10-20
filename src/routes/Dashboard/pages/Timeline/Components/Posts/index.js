import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import * as requests from './requests'

import { baseURL } from '../../../../../../Global/api'

import Comment from './Components/Comment'
import Loading from './Components/Loading'

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


const initial_refresh = {
	ok: false, status: false
}

const Post = ({ data, fb, token }) => {
	const [doComments, setDoComments] = useState({ sending: false })
	const [refresh, setRefresh] = useState({ ...initial_refresh })
	const [commentsOpen, setCommentsOpen] = useState(false)
	const [comments, setComments] = useState([])

	const { path, content, author, author_image, stats } = data

	const doRequest = () => {
		requests
			.comments({ token, _id: stats._id })
			.then(comments => {
				setComments(comments)
				setRefresh({ status: true, ok: true })
			}).catch(err => {
				setRefresh({ status: true, ok: false })
			})
	}

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
		setDoComments({ sending: true })

		const msg = document.getElementById(`post_id_${stats._id}`).value

		const data = { msg }

		fb.comment(stats._id, data, res => {

			if (res) {
				document.getElementById(`post_id_${stats._id}`).value = ''
				doRequest()
			}
			setDoComments({ sending: false })
		})
	}

	const clickComments = () => {
		!commentsOpen && doRequest()

		setCommentsOpen(!commentsOpen)
	}

	const doRefresh = () => {
		setRefresh({ ...initial_refresh })
	}

	const renderComments = () => {
		const blockComments = []


		comments.forEach(data => {
			blockComments.push(<Comment key={`comment_${data._id}`} data={data} />)
		})

		return blockComments
	}

	useEffect(() => {
		doRequest()
	}, [])

	useEffect(() => {
		if (commentsOpen && !refresh.status) doRequest()
	}, [refresh])

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
					<img id={stats._id} src={`${baseURL}/files/uploads/${path}`} alt='Publicação do autor' />
				</ImgStyled>
				<LegendStyled>
					<p>{ content }</p>
				</LegendStyled>
			</PictureStyled>
			<FooterStyled>
				<ActionsStyled>
					<LikeButtonStyled onClick={ like }>Curtir - { stats.data.rate.likes.length }</LikeButtonStyled>
					<CommentButtonStyled onClick={ clickComments }>Comentar - { comments.length }</CommentButtonStyled>
				</ActionsStyled>
				<CommentsAreaStyled opened={ commentsOpen }>
					<DoCommentsStyled req={ doComments.sending } onSubmit={ comment }>
						<textarea id={`post_id_${ stats._id }`} minLength='1' maxLength='200' required>
						</textarea>
						<CommentsActionsStyled>
							<button style={{ flex: '2' }} type='submit'>Enviar</button>
							<button type='button' onClick={() => document.getElementById(`post_id_${stats._id}`).value = ''}>Apagar tudo</button>
							<button type='button' onClick={ doRefresh }>Refresh</button>
						</CommentsActionsStyled>
					</DoCommentsStyled>
					{  refresh.status ? refresh.ok ? renderComments() : <h1>Ocorreu um erro!</h1> : <Loading /> }
				</CommentsAreaStyled>
			</FooterStyled>
		</ContainerStyled>
	)
}

const mapStateToProps = state => ({ token: state.payload.token })

export default connect(mapStateToProps)(Post)
