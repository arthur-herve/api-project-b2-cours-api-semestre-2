import express from 'express';
import {isAuthenticated} from '../../middleware/is-auth';
import { isEducationManager } from '../../middleware/roles-middleware';
import { newPromotionPOST, patchPromotionPATCH, getPaginatedPromotionGET, getPromotionByIdGET, deletePromotionDELETE } from '../../controllers/education/promotion-controller';

const router = express.Router();

router.post('/promotion/new/', isAuthenticated, isEducationManager, newPromotionPOST);

router.get('/promotions/page/:page/rows/:rowsNumber/order/:orderBy/', isAuthenticated, isEducationManager, getPaginatedPromotionGET);

router.get('/promotion/:idPromotion/', isAuthenticated, isEducationManager, getPromotionByIdGET);

router.patch('/promotion/:idPromotion/', isAuthenticated, isEducationManager, patchPromotionPATCH);

router.delete('/promotion/:idPromotion/', isAuthenticated, isEducationManager, deletePromotionDELETE);

export = router;
