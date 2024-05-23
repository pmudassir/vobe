import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AmbassadorGuard {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (user && user.type === 'AMBASSADOR') {
      return true;
    }
    throw new UnauthorizedException('Ambassador Role Needed');
  }
}
