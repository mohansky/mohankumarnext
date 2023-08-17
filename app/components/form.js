"use client";
import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import Button from "./button";

const FORMSPARK_FORM_ID = "w8y51DkV";
export default function Form() {
  const [submit, submitting] = useFormspark({ formId: FORMSPARK_FORM_ID });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [radio, setRadio] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({ name, email, radio, message });
    return <p>Thank You</p>;
  };

  return (
    <div className="col-md-10 mx-auto">
      <form name="contact" onSubmit={onSubmit} className="relative">
        <input
          type="checkbox"
          name="_honeypot"
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />
        <input type="hidden" name="_email.from" value={name} />
        <div className="grid grid-cols-2 gap-8 mb-20">
          <div>
            <div className="mb-5" controlid="formName">
              <div className="font-bold">Name</div>
              <input
                className="mt-1 form-input px-4 py-3 block w-full focus:ring-0
                bg-gray-100 border-gray-400 focus:border-gray-500 focus:bg-gray-100 
                dark:bg-gray-700 dark:border-gray-200 dark:focus:border-gray-500 dark:focus:bg-gray-800 \"
                type="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-5" controlid="formEmail">
              <div className="font-bold">E-mail</div>
              <input
                className="mt-1 form-input px-4 py-3 block w-full focus:ring-0
                bg-gray-100 border-gray-400 focus:border-gray-500 focus:bg-gray-100 
                dark:bg-gray-700 dark:border-gray-200 dark:focus:border-gray-500 dark:focus:bg-gray-800 
               "
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-20" controlid="formCheckbox">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex">
              <input
                className="mt-1 form-radio text-mkblue focus:ring-white focus:outline-0 bg-gray-100 border-gray-400 focus:border-gray-500 focus:bg-white"
                type="radio"
                label="I know exactly what sort of website I need and how it should look."
                name="option"
                id="formRadios1"
                value="I know exactly what sort of website I need and how it should look."
                checked={
                  radio ===
                  "I know exactly what sort of website I need and how it should look."
                }
                onChange={(e) => setRadio(e.target.value)}
              />
              <span className="px-4 text-lg">
                I know exactly what sort of website I need and how it should
                look.
              </span>
            </div>
            <div className="flex">
              <input
                className="mt-1 form-radio text-mkblue focus:ring-white focus:outline-0 bg-gray-100 border-gray-400 focus:border-gray-500 focus:bg-white"
                type="radio"
                label="I'm not sure what is feasible and only have a vague idea of what my website could to look like. "
                name="option"
                id="formRadios2"
                value="I'm not sure what is feasible and only have a vague idea of what my website could to look like. "
                checked={
                  radio ===
                  "I'm not sure what is feasible and only have a vague idea of what my website could to look like. "
                }
                onChange={(e) => setRadio(e.target.value)}
              />
              <span className="px-4 text-lg">
                I&apos;m not sure what is feasible and only have a vague idea of
                what my website could to look like.
              </span>
            </div>
            <div className="flex">
              <input
                className="mt-1 form-radio text-mkblue focus:ring-white focus:outline-0 bg-gray-100 border-gray-400 focus:border-gray-500 focus:bg-white"
                type="radio"
                label="I already have a website, but I'm not happy with it and would like some changes."
                name="option"
                id="formRadios3"
                value="I already have a website, but I'm not happy with it and would like some changes."
                checked={
                  radio ===
                  "I already have a website, but I'm not happy with it and would like some changes."
                }
                onChange={(e) => setRadio(e.target.value)}
              />
              <span className="px-4 text-lg">
                I already have a website, but I&apos;m not happy with it and
                would like some changes.
              </span>
            </div>
          </div>
        </div>

        <div className="mb-5" controlid="formMessage">
          <label className="font-bold">Message</label>
          <textarea
            className="form-textarea mt-1 block w-full focus:ring-0 resize-none
            bg-gray-100 border-gray-400 focus:border-gray-500 focus:bg-gray-100 
            dark:bg-gray-700 dark:border-gray-200 dark:focus:border-gray-500 dark:focus:bg-gray-800 
            "
            as="textarea"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>
        <Button
          type="submit"
          disabled={submitting}
          className="absolute right-0 px-16 py-3"
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
