export const listMapper = (objects = [], key) => {
  return objects.map((object) => {
    return {
      id: object.id,
      value: object[key],
    };
  });
};
