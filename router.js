import Router from 'express'
import PostController from './post.controller.js'

const router = new Router()

router.post('/post', PostController.createPost)
router.get('/post', PostController.getAll)
router.get('/post/:id', PostController.getOne)
router.put('/post', PostController.update)
router.delete('/post/:id', PostController.deletePost)

export default router
