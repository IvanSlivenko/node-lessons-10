const express = require("express");

const moviesController = require('../../controllers/movies-controller');

const schemas = require("../../schemas/movies");
const { validateBody } = require("../../decorators");
const { isValidId, authenticate, upload } = require("../../middlewares");




const router = express.Router();

//Застосовуємо міделвару  authenticate до всіх router
router.use(authenticate);

// маршрут  get "/"
router.get("/",  moviesController.getAllMovies);

// // Шукаємо
router.get("/:id", isValidId, moviesController.getMovieById);

// Додаємо 
router.post(
  "/",
  // upload.array("zzz",8)
  //upload.fields([{name:"zzz", maxcount:1},])
  upload.single("poster"),
  validateBody(schemas.movieAddSchema),
  moviesController.addMovie
);
// router.post("/",moviesController.addMovie);

// Змінюємо
router.put(
  "/:id",

  isValidId,
  validateBody(schemas.movieAddSchema),
  moviesController.updateMovieById
);

//Змінюємо конкретні поля
router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.movieUpdateFavoritesSchema),
  moviesController.updateFavorite
);
 
// Видаляємо
router.delete(
  "/:id",
  isValidId,
  moviesController.deleteMovieById
);

module.exports = router;





