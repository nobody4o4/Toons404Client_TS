import { adminRoutes } from "./admin.routes";
import { authorRoutes } from "./author.routes";
import { userRoutes } from "./user.routes";

export const allRoutes = [...userRoutes,...adminRoutes,...authorRoutes];