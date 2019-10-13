export class ErrorDto {
  ok: boolean;
  message?: string;
  error?: string;
  status?: number;
}

export class SessionSuccessDto {
  token: string;
  user: {};
}
