import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["fr", "en"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (import(`../messages/${locale}.json`)).default,
  };
});