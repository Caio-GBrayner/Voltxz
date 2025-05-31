/* eslint-disable prettier/prettier */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserId = createParamDecorator(
  (_: unknown, context: ExecutionContext): string | undefined => {
    const request = context.switchToHttp().getRequest<{ user?: { userId: string } }>();
    return request.user?.userId;
  },
);
