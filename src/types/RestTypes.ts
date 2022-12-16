export type HTTPMethods = "GET" | "POST" | "DELETE" | "PATCH" | "PUT";

export type WithAuditReason<Type> = {
  auditLogReason?: string;
} & Type;
