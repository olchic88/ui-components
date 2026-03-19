import { callApi } from "../fetcher";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import ContactSectionReact from "../components/marketing/ContactSection/ContactSectionReact";
import { AddressIcon, PhoneIcon, EmailIcon } from "../icons";

export default function ContactSectionAPITailwindPage() {
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
          onReset={() => setIsSuccess(false)} // for "Send another message button" to delete confirmation
          isSubmitting={mutation.isPending} // to disable the button
        />
      </div>

      <div
        className={`fixed left-0 right-0 top-[40px]
        pointer-events-none
        transition-opacity duration-300 ease-in-out
        md:w-max mx-auto
        ${toast ? "opacity-100" : "opacity-0"}`}
      >
        {toast?.type === "error" && (
          <div
            className={`flex items-center gap-3
                px-[10px] py-[4px] pl-[4px]
                rounded-[2000px]
                text-sm font-medium
                
                bg-[#fef2f2] text-[#dc2626]`}
          >
            <p
              className={`flex items-center
                h-6 px-[10px] py-[2px]
                bg-[var(--bg-primary)]
                rounded-full
                shadow-[0px_1px_3px_rgba(0,0,0,0.1),_0px_1px_2px_rgba(0,0,0,0.06)]
                
                text-[#991b1b]`}
            >
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
