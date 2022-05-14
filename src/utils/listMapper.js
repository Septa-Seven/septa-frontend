export const listMapper = (objects = [], key) => {
  return objects.map((object) => {
    console.log(object, "asd");
    return {
      id: object.id,
      value: object[key],
    };
  });
};
