const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getOneUser,

} = require("../controllers/user.controller");
const { checkAuth, checkAdmin } = require("../middleware");
const router = require('express').Router()

router.get("/", checkAuth, getAllUsers); 
router.get("/:id", checkAuth, getOneUser);
router.post("/", checkAuth, createUser); 
router.put("/:id", checkAuth, updateUser); 
router.delete("/:id", checkAuth, checkAdmin, deleteUser);  

module.exports = router

