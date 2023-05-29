function Logger() {
  return {
    info: console.info,
    debug: console.debug,
    warn: console.warn,
    error: console.error
  };
}

export default Logger();
