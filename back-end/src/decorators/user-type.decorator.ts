import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserType = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): string | undefined => {
    const request = ctx
      .switchToHttp()
      .getRequest<{ user?: { type?: string } }>();
    return request.user?.type;
  },
);
