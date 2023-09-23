import prisma from "@/../libs/prismadb";

export async function prismaFunc() {
  // const user = await prisma.databaseName.create({
  //   data: {
  //     name: "",
  //     email: "",
  //     password: "",
  //     agent: 1,
  //     // and etc...
  //     userPreference: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   // include: {
  //   //   userPreference: true,
  //   // }
  //   select: {
  //     // userPreference: true,
  //     userPreference: { select: { id: true }},
  //     name: true
  //   }
  // });
  /*const users = await prisma.databaseName.create({
      data: [{
        name: "",
        email: "",
        password: "",
        agent: 1,
        // and etc...
        userPreference: {
          create: {
            emailUpdates: true,
          },
        },
      }, {
        name: "",
        email: "",
        password: "",
        agent: 1,
        // and etc...
        userPreference: {
          create: {
            emailUpdates: true,
          },
        },
      }],
    });*/
  // const user = prisma.databaseName.findUnique({
  //   where: {
  //     // id
  //     // age_name: {
  //     //   age: 22,
  //     //   name: "amir"
  //     // },
  //   }
  // })
  // const user = await prisma.databaseName.findFirst({
  //   where: {
  //     // name // most be a unique attributes
  //     // id
  //   //   and etc...
  //   }
  // })
  // const users = await prisma.databaseName.findMany({
  //   where: {
  //     // name: { equals: "amir" }
  //     // name: { not: "amir" }
  //     // name: { in: ["amir", "sepehr"] }
  //     // name: { notIn: ["amir", "sepehr"] }
  //     // age: { lt: 20 }
  //     // age: { gt: 20 }
  //     // age: { gte: 20 }
  //     // age: { gte: 20 }
  //     // email: { contains: "@gmail.com" }
  //     // email: { endsWith: "@gmail.com" }
  //     // email: { startsWith: "@gmail.com" }
  //     /*AND: [
  //       { email: { contains: "@gmail.com" } },
  //       { name: { notIn: ["amir", "sepehr"] } },
  //       { age: { lt: 20 } },
  //     ],*/ // also can be an use one object
  //     /*OR: [
  //       { email: { contains: "@gmail.com" } },
  //       { name: { notIn: ["amir", "sepehr"] } },
  //       { age: { lt: 20 } },
  //     ],*/ // also can be an use one object
  //     // NOT: [
  //     //   { email: { contains: "@gmail.com" } },
  //     //   { name: { notIn: ["amir", "sepehr"] } },
  //     //   { age: { lt: 20 } },
  //     // ], // also can be an use one object
  //   },
  //   distinct: [],
  //   orderBy: {
  //     age: "asc/desc",
  //   },
  //   take: 2, // most be a Number
  //   skip: 1, // most be a Number
  // });

    const updateUser = await prisma.databaseName.update({
        where: {},
        data: {},
        include: {}, // optional
        select: {} // optional
    })

    const updateUsers = await prisma.databaseName.updateMany({
        where: {},
        data: {},
        include: {}, // optional
        select: {} // optional
    })

    const deleteUser = await prisma.databaseName.delete({
        where: {},
        data: {},
    })

    const deleteUsers = await prisma.databaseName.deleteMany({
        where: {},
        data: {},
    })
}
