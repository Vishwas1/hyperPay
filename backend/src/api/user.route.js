import { Insert, GetById, List } from '../controllers/user.controller';
import { ValidJWTNeeded } from '../middleware/user.middleware';

app.post('/users', [
  ValidJWTNeeded,
  Insert
]);

app.get('/users/:userId', [
  ValidJWTNeeded,
  GetById
]);

app.get('/users/', [
  ValidJWTNeeded,
  List
]);

app.delete('/users/:userId',[
  ValidJWTNeeded,
  DeleteUserById
])

