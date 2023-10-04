import { z } from "zod";

type DataInputKind = "alfanumeric" | "numeric";

type Result<T> = {
  data: T | null;
  error?: string;
};

const testJson = [
  {
    name: "test",
    type: "alfanumeric",
    min: 1,
    max: 10,
    required: true,
    placeholder: "test",
    default: "test",
  },
];

const validateJson = z.array(
  z.object({
    name: z.string().min(1),
    type: z.enum(["alfanumeric", "numeric"]),
    min: z.number(),
    max: z.number(),
    required: z.boolean(),
    placeholder: z.string(),
    default: z.string(),
  })
);

const generateZod = (): Result<any> => {
  const validatedJson = validateJson.safeParse(testJson);
  if (!validatedJson.success) {
    return {
      data: null,
      error: validatedJson.error.message,
    };
  }
  const { data } = validatedJson;

  const schema = data.reduce((acc, curr) => {
    if (curr.type === "alfanumeric") {
      return {
        ...acc,
        [curr.name]: z.string().min(curr.min).max(curr.max),
      };
    }
    return {
      ...acc,
      [curr.name]: z.number().min(curr.min).max(curr.max),
    };
  }, {});

  return {
    data: schema,
  };
};
