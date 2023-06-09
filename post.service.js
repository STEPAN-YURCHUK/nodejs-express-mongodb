import Post from './Post.js'
import FileService from './post.fileService.js'

class PostService {
	async createPost(post, picture) {
		const fileName = FileService.saveFile(picture)
		const createPost = await Post.create({ ...post, picture: fileName })
		return createPost
	}
	async getAll() {
		const getAll = await Post.find()
		return getAll
	}
	async getOne(id) {
		if (!id) {
			throw new Error('id не найден')
		}
		const getOne = await Post.findById(id)
		return getOne
	}
	async update(post) {
		if (!post._id) {
			throw new Error('id не найден')
		}
		const updatePost = await Post.findByIdAndUpdate(post._id, post, {
			new: true,
		})
		return updatePost
	}
	async deletePost(id) {
		if (!id) {
			throw new Error('id не найден')
		}
		const deletePost = await Post.findByIdAndDelete(id)
		return deletePost
	}
}

export default new PostService()
