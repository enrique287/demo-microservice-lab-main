const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { findContents, addContent, destroyContent } = require('../controllers/ContentController');

const router = Router();

/**
 *  @GET /api/contents
 *  Listar todos los contenidos
 */
router.get('/', findContents);

/**
 *  @POST /api/contents
 *  Agregar nuevo contenido
 */
router.post('/', [
    check('name', 'El campo name es obligatorio').not().isEmpty(),
    validarCampos
], addContent);

/**
 *  @DELETE /api/contents/:id
 *  Eliminar un contenido
 */
router.delete('/:id', destroyContent);

module.exports = router;
