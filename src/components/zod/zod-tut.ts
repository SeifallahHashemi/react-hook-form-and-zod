import { z } from "zod";
import { fromZodError } from "zod-validation-error";

/*const UserSchema = z.object({
    username: z.string(),
    age: z.number(),
    birthDay: z.date(),
    isProgrammer: z.boolean(),
})*/

enum Hobbies {
  Programming,
  WatchTv,
  Football,
}

const hobbies = ["watchTv", "football", "programming"] as const;

// other zod types: .undefined, .null, .any, .void, .unknown,...
// .nullable, .nullish

/*const UserSchema = z.object({
    username: z.string().min(3).max(20).length(500),
    email: z.string().email("not be valid email address").endsWith("@gmail.com").startsWith("ali"),
    age: z.number().gte(1).default(25).optional(),
    birthDay: z.date().optional(),
    isProgrammer: z.boolean().optional(),
    isLoaded: z.literal(true), // always most be true or whatever into (true/"something"/{}/whatever...)
    // hobbies: z.enum(["programming", "watch tv", "football"]),
    hobbies: z.nativeEnum(Hobbies),
    // test: z.never(), // never will be used
})*/

const UserSchema = z
  .object({
    // id: z.union([z.string(), z.number()]),
    id: z.string().or(z.number()), // both of ides are same result
    username: z.string(),
    number: z.number().positive(),
    email: z
      .string()
      .email("not be valid email address")
      .endsWith("@gmail.com")
      .startsWith("ali")
      // .transform(val => `${val.slice(0, 3)}`),
      .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, {
        message: "email not valid",
      }),
    age: z.number().gte(1).default(25).optional(),
    birthDay: z.date().optional(),
    isProgrammer: z.boolean().optional(),
    friends: z.array(z.string()).nonempty(),
    coords: z
      .tuple([z.number(), z.string(), z.number().gt(10).lt(60).int()])
      .rest(z.number()),
    isLoaded: z.literal(true), // always most be true or whatever into (true/"something"/{}/whatever...)
    // hobbies: z.enum(["programming", "watch tv", "football"]),
    hobbies: z.nativeEnum(Hobbies),
    // test: z.never(), // never will be used
    website: z
      .string()
      .trim()
      .toLowerCase()
      .url()
      .refine((val) => val.indexOf(".") !== -1, { message: "error" }),
  })
  .partial()
  .pick({ username: true })
  .omit({ age: true })
  .deepPartial()
  .extend({ name: z.string() })
  .merge(z.object({ name: z.string() }))
  .passthrough(); // allow to add extra date
// .strict()

type User = z.infer<typeof UserSchema>;
const user: User = {
  username: "ali",
  email: "ali@gmail.com",
};
console.log(UserSchema.parse(user));
// console.log(UserSchema.partial().parse(user))

// zod for Map Object
// const UserMap = z.record(z.string(), z.number());
const UserMap = z.map(z.string(), z.object({ name: z.string() }));

/*const user2 = {
    userName: 2,
}*/

const user2 = new Map([["jhon", { name: "ali" }]]);

console.log(UserMap.parse(user2));

const UserSet = z.set(z.number());

const num = new Set([2, 2, 2]);

console.log(UserSet.parse(num));

// validate
const EmailValidate = z
  .string()
  .email()
  .refine((val) => val.endsWith("@gmail.com"));

const testEmail = "test@gmail.com";
console.log(EmailValidate.parse(testEmail));

let result = EmailValidate.safeParse(testEmail);
if (!result.success) {
  console.log(fromZodError(result.error));
}
