interface MyUser {
  name: string;
  id: number;
  email?: string;
}

// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Chris",
      id: 1,
      email: "chris@foo.com",
    },
    {
      email: "chris@bar.com",
    }
  )
);

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">;

type UserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((acc, currentValue) => {
    const { id, ...other } = currentValue;

    return {
      ...acc,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 2,
      name: "Mr. Foo",
    },
    {
      id: 3,
      name: "Mr. Baz",
    },
  ])
);
