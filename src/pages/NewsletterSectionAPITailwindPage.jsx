import { callApi } from "../fetcher.jsx";
import abstract from "../components/marketing/NewsletterSection/abstract.jpg";
import NewsletterSectionTailwind from "../components/marketing/NewsletterSection/NewsletterSectionTailwind.jsx";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function NewsletterSectionAPITailwindPage() {
  const [toast, setToast] = useState(null);
  // toast = { type: "success" | "error", message: string }

  const mutation = useMutation({
    mutationFn: (data) => {
      console.log("Sending data:", { email: data.email });
      return callApi("post", "newsletter", {
        email: data.email,
      });
    },
    onMutate: () => setToast(null),
    onSuccess: (data) => {
      console.log(data); // get back array of one object [{"id":1,"email":"test@example.com","username":"testuser","created_at":"2024-09-13T11:17:23.888792+00:00"}]
      setToast({
        type: "success",
        message:
          data.message ||
          "Subscription successful! Please check your email to confirm.",
      });
    },
    onError: (error) => {
      console.log(error);
      setToast({
        type: "error",
        message:
          "Failed to subscribe. Please ensure your email is correct or try again later.",
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
        <NewsletterSectionTailwind
          title="Get the finest curated abstracts delivered weekly to your inbox"
          banner={abstract}
          width={1176}
          height={1216}
          features={[
            {
              id: 1,
              text: " Exclusive access to new abstract images and collections",
            },
            { id: 2, text: "Unlock special promotions only for subscribers" },
            { id: 3, text: "Regular doses of artistic inspiration" },
          ]}
          onSubmit={(email) => mutation.mutate({ email })} //  You call mutation.mutate() to execute the fetch request. The mutation.mutate() function accepts an object that will be forwarded to the mutationFn.
          isSubmitting={mutation.isPending}
          fullpage={true}
        />
      </div>

      <div
        className={`fixed left-0 right-0 top-[40px]
        pointer-events-none
        transition-opacity duration-300 ease-in-out
        md:w-max mx-auto
        ${toast ? "opacity-100" : "opacity-0"}
        `}
      >
        {toast && (
          <div
            className={`flex items-center gap-3
                px-[10px] py-[4px] pl-[4px]
                rounded-[2000px]
                text-sm font-medium
                ${toast.type === "error" ? "bg-[#fef2f2] text-[#dc2626]" : "bg-[#f0fdf4] text-[#15803d]"}`}
          >
            <p
              className={`flex items-center
                h-6 px-[10px] py-[2px]
                bg-[var(--bg-primary)]
                rounded-full
                shadow-[0px_1px_3px_rgba(0,0,0,0.1),_0px_1px_2px_rgba(0,0,0,0.06)] 
                ${toast.type === "error" ? "text-[#991b1b]" : ""}`}
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
