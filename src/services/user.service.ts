//Ici c'est le Service avec les fonctions qui font le vrai taff
import { Container, Service, Inject } from 'typedi';
import EventHandler from '../events/events';
import User from '../models/user.model';

@Service()
export default class UserService {
  Constructor() {}

  public async sayHelloToUser(name: String) {
    let msg = 'Hello ' + name + ', nice to meet you my boy !';

    let eventCont = Container.get(EventHandler);
    eventCont.emit('event1');
    eventCont.emit('event2');

    return msg;
  }
}
