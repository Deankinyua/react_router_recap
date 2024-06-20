import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log(submission);

  // note: send post request to the server

  if (submission.message.length < 11) {
    return {
      error: "The Message must be longer than 10 characters long",
    };
  }

  // note: redirect the user to the home page after form submission

  return redirect("/");
};

export default Contact;
