const env = (key: string) => {
  try {
    const value = Deno.env.get(key);
    if (!value) {
      throw new Error(`Environment variable "${key}" is not defined`);
    }
    return value;
  } catch (error) {
    console.log(error.message);
    return "";
  }
};

export { env };
