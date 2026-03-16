import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);



// Match only internationalized pathnames
    matcher: ["/", "/(en|fr)/:path*"],
};

