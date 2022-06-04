// promises.all, promises.allSettled, prmoses.race,  promises.any, 

const p3 = () => {
  return new Promise((res, re) => {
    re("error inside p3");
  });
};

let p5 = function test() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("resolve after 2 second");
    }, 2000);
  });
};
let p1 = Promise.resolve(10);
let p2 = Promise.resolve(20);

Promise.all([p1, p2, p3()])
  .then((res) => {
    console.log("Promises.all \n");
    console.log(res);
  })
  .catch((er) => {
    console.log("promises.all error :  ", er);
  });

// promises.allSettled method it take array of promises and return result of all promises
// in the form of array of object either it will be resolve or reject
// it conset {status:"res,rej", Val:'res of ppromises"} if in case of reject it write reson
//  { status: 'fulfilled', value: 10 }, if reject : { status: 'fulfilled', value: 20 }
Promise.allSettled([p3(), p1, p2])
  .then((res) => {
    console.log("all settled \n", res);
  })
  .catch((er) => {
    console.log("get error : ", er);
  });

// promises.race it return any promises which is earlier resolved or rejected  and it forgot
//  other promises peomises whtever happend
Promise.race([p5(), p3()])
  .then((res) => {
    console.log("Promise.race : \n", res);
  })
  .catch((er) => {
    console.log("Promise.race  error : \n", er);
  });
// promises.any method return promises which was earlier resolve in case of no promise resolved
// it means all promises rejected  then it
// will write down an AggregateError, error in promises error is :   [AggregateError: All promises were rejected]
Promise.any([p3()])
  .then((res) => {
    console.log("Promises.any  res : ", res);
  })
  .catch((er) => {
    console.log("Promises.any  res : ", er);
  });
