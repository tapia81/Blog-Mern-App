const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is the root!"));
router.post("/blogs", controllers.createBlog);
router.get("/blogs", controllers.getAllBlogs);
router.get("/blogs/:id", controllers.getBlogByID);
router.put("/blogs/:id", controllers.updateBlog);
router.delete("/blogs/:id", controllers.deleteBlog);

module.exports = router;
