package devPilot.backend.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import devPilot.backend.exceptions.UnauthorizedException;

@Component
public class CurrentUser {
     public AppUserPrincipal require() {    // returns the infomation of the authentic user from security context folder
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !(auth.getPrincipal() instanceof AppUserPrincipal principal)) {
            throw new UnauthorizedException("Not authenticated");
        }
        return principal;
    }
}
