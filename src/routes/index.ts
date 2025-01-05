import { Router } from "express"

const router = Router()

// TODO: DELETE only for testing
router.get("/health", (_, res) => {
  res.json({ status: "OK" })
})

// Future routes for Twitter integration, AI generation, etc.
// router.post('/generateTweet', someController.generateTweet);

export default router
