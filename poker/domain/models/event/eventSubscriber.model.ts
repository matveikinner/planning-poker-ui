import { Role } from '../../enums/role.enum';

export interface EventSubscriber {
  id: string;
  username: string;
  role: Role;
}
