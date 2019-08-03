import { Login } from '../controllers/user.controller';
import { IsPasswordAndUserMatch } from '../middleware/user.middleware';


app.post('/auth', [
  IsPasswordAndUserMatch,
  Login
]);