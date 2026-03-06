const user1 = { name: "Raj", code: 123, address: { city: "pune", pin: 230 } };
const user2 = { name: "Raj", code: 123, address: { city: "pune", pin: 2030 } };

const isObject = (value) => {
  return typeof value === "object" && value !== null;
};

const comapreObj = (obj1, obj2) => {
  const isKeyPresent = Object.keys(obj1).length !== Object.keys(obj2).length;
  if (isKeyPresent) {
    console.log("test : ", isKeyPresent);
    return isKeyPresent;
  }
  for (let key in obj1) {
    if (isObject(obj1[key])) {
      const res = comapreObj(obj1[key], obj2[key]);
      return res;
    } else {
      if (obj1[key] !== obj2[key]) return false;
    }
  }

  return true;
};

comapreObj(user1, user2)
