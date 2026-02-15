import { Controller } from '@nestjs/common';
import { AuthService } from './provider/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        // intra module dependency injection (within the same module scope)
        private readonly authService: AuthService
    ) {}

    
}
