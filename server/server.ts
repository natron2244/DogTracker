import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
app.set('port', 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/user', (request: express.Request, response: express.Response) => {
  const user = {
    firstName: 'Nathan',
    lastName: 'Christensen',
    username: 'natron2244',
    id: 1020
  };
  response.send(user);
});

app.listen(app.get('port'), () => {
    console.log(
      ' App is running at http://localhost:%d in %s mode',
      app.get('port'),
      app.get('env')
    );
    console.log('  Press CTRL-C to stop\n');
  });

console.log('Hello World');
