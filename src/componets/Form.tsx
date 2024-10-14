import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
  category: z.string({ invalid_type_error: "Category is required" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(18, { message: "Amount must be at least 18." }),
});
type FormData = z.infer<typeof schema>;

const categories: string[] = ["Groceries", "Utilities", "Entertainment"];
export const Form = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { errors, isValid } = formState;

  const onSubmit = (expeneses: FormData) => {
    console.log(expeneses);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="fom-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.category?.message}</p>
        )}
      </div>
      <div
        style={{
          paddingTop: "1rem",
        }}
      >
        <button className="btn btn-primary" type="submit" disabled={!isValid}>
          Submit
        </button>

        <div
          style={{
            paddingTop: "1rem",
          }}
        >
        </div>
      </div>
    </form>
  );
};
