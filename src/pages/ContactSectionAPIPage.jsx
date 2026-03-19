import { callApi } from "../fetcher";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import ContactSectionReact from "../components/marketing/ContactSection/ContactSectionReact";
import { AddressIcon, PhoneIcon, EmailIcon } from "../icons";

export default function ContactSectionAPIPage() {
  const [toast, setToast] = useState(null);
  // toast = { type: "success" | "error", message: string }

  const [isSuccess, setIsSuccess] = useState(false); // for success toast

  const mutation = useMutation({
    mutationFn: (data) => {
      // data = { name: "John", email: "john@gmail.com", message: "Hello!" }
      // throw new Error("Test error"); // to check error toast
      console.log("Sending data:", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      return callApi("post", "contact", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
    },
    onSuccess: (data) => {
      console.log(data); // get back array of one object [{"id":1,"email":"test@example.com","username":"testuser","created_at":"2024-09-13T11:17:23.888792+00:00"}]
      setIsSuccess(true); // then pass as prop to ContactSectionReact to make overlay confirmation
    },
    onMutate: () => setToast(null), // toast сбрасывается мгновенно при нажатии Submit, без этого: запрос отправляется → приходит ответ → только тогда toast меняется.
    onError: (error) => {
      console.log(error);
      setToast({
        type: "error",
        message:
          "Failed to submit. Please ensure your details are correct or try again later.",
      });
    },
  });

  useEffect(() => {
    if (!toast) {
      return;
    }
    console.log("Toast effect started");
    const timer = setTimeout(() => {
      setToast(null);
      console.log("Toast hidden");
    }, 4000);
    return () => {
      clearTimeout(timer);
      console.log("Toast effect cleaned up");
    };
  }, [toast]);

  return (
    <>
      <div className="fullpage">
        <title>Contact Section</title>
        <ContactSectionReact
          title="Talk to our team"
          subtitle="We're committed to delivering the support you require to make your experience as smooth as possible."
          contactDetails={[
            {
              id: 1,
              icon: AddressIcon,
              text: "123 Maple Street, Springfield, IL, USA",
            },
            {
              id: 2,
              icon: PhoneIcon,
              text: "+1 (650) 555-0198",
              href: "tel:+16505550198",
            },
            {
              id: 3,
              icon: EmailIcon,
              text: "hello@abstractly.com",
              href: "mailto:hello@abstractly.com",
            },
          ]}
          onSubmit={(data) => mutation.mutate(data)} //  You call mutation.mutate() to execute the fetch request. The mutation.mutate() function accepts an object that will be forwarded to the mutationFn.
          isSubmitting={mutation.isPending}
          isSuccess={isSuccess} // for success confirmation
          onReset={() => setIsSuccess(false)} // for "Send another message button" to delete confirmation overlay
          isSubmitting={mutation.isPending} // to disable the button
        />
      </div>

      <div className={`toast ${toast ? "toast-visible" : ""}`}>
        {toast?.type === "error" && (
          <div className={`toast-content toast-content-error`}>
            <p className={`toast-badge toast-badge-error`}>
              {toast.type[0].toUpperCase() + toast.type.substring(1)}
            </p>
            <p>{toast.message}</p>
          </div>
        )}
      </div>
    </>
  );
}

/* toast success в ContactSectionReact, тк по размеру он привязан к форме, которая живёт там.
ContactSectionAPIPage не знает, где форма находится на экране и какого она размера, он просто рендерит компонент.
Чтобы перекрыть форму точно по её размеру, нужно быть внутри того же DOM-дерева.
*/
