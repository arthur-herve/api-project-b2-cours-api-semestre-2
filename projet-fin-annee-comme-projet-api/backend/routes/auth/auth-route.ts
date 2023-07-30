import express from 'express';
import { login, signup, updatePasswordPATCH } from '../../controllers/auth/authentication';
import {isAuthenticated, isModifyingUserPswdRight} from '../../middleware/is-auth'; 


const router = express.Router();

/**
 * router.post('/signup/', signup); change to a route in users
 */
router.post('/signup/', signup);
router.post('/login/', login);
router.patch('/pswd/', isAuthenticated, isModifyingUserPswdRight, updatePasswordPATCH)

export = router;
