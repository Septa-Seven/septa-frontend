export const listMapper = (objects = [], key) =>
  objects.map((object) => ({
    id: object.id,
    value: object[key],
  }));
