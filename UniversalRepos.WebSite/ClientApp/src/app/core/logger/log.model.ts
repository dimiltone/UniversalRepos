import { environment } from "src/environments/environment";

export interface Log {
  logLevel: string;
  message: string;
  application: string;
  logDate: string;
  version: string;
  user: string;
  environement: string;
}

export enum LOGLEVEL {
  "DEBUG",
  "INFO",
  "WARN",
  "ERROR",
  "FATAL",
  "UNKNOWN"
}

export enum LOGTYPE {
  "INFO",
  "STOMP",
  "HTTP"
}
export function CreateLog({
  logLevel = LOGLEVEL[LOGLEVEL.INFO],
  message = null,
  application = environment.applicationName,
  logDate = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
  version = environment.version,
  user = null,
  environement = environment.environment
}: Partial<Log>) {
  return {
    logLevel,
    message,
    application,
    logDate,
    version,
    user,
    environement
  };
}
