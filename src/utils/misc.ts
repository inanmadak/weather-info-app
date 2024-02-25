export const makeUrl = (url: string, params: Record<string, string | number | boolean | undefined>) => {
  const urlObject = new URL(url);

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      urlObject.searchParams.append(key, value.toString());
    }
  });

  return urlObject.toString();
};
