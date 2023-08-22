const debug = {};
debug.log = (...text) => {
  if (!DEBUG_MODE) {
    return;
  }
  return console.log(
    "%c[VOT DEBUG]",
    "background: #F2452D; color: #fff; padding: 5px;",
    ...text,
  );
};

export default debug;
