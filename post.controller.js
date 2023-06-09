import PostService from './post.service.js'

class PostController {
	async createPost(req, res) {
		try {
			const createPost = await PostService.createPost(
				req.body,
				req.files.picture
			)
			return res.json(createPost)
		} catch (e) {
			res.json(e)
		}
	}
	async getAll(req, res) {
		try {
			const getAll = await PostService.getAll()
			res.json(getAll)
		} catch (e) {
			res.status(500).json(e)
		}
	}
	async getOne(req, res) {
		try {
			const getOne = await PostService.getOne(req.params.id)
			res.json(getOne)
		} catch (e) {
			res.status(500).json(e.massage)
		}
	}
	async update(req, res) {
		try {
			const updatePost = await PostService.update(req.body)
			res.json(updatePost)
		} catch (e) {
			res.status(500).json(e.massage)
		}
	}
	async deletePost(req, res) {
		try {
			console.log(req.params.id)
			const deletePost = await PostService.deletePost(req.params.id)
			return res.json(deletePost)
		} catch (e) {
			res.status(500).json(e.message)
		}
	}
}

export default new PostController()
