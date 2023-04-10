import { createHash } from "node:crypto";

const passwordHash = (password: string) => createHash("md5").update(password).digest("hex");

export default passwordHash;
