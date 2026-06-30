/* 
CookieBannerReact, CookieModalReact не знают ничего 
про localStorage, useCookieConsent, loadScripts или состояние приложения. 
Их задача - показать интерфейс и сообщить наверх, что произошло событие.
*/

import { useEffect, useRef } from "react";
import { Link } from "react-router";

export default function CookieBannerTailwind({
  onDeclineAll,
  onAcceptAll,
  onManageCookies,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  const dialogClass = `
        flex flex-col gap-6
        w-full max-w-none m-0 p-4 box-border
        border-t border-[#e6e6e6]
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        
        fixed right-0 bottom-0 left-0 top-auto
        
        backdrop:bg-black/40 
        backdrop:backdrop-blur-[6px]
        
        md:px-8 md:py-6
        
        [@media(min-width:90rem)]:px-[112px]
        [@media(min-width:90rem)]:py-6`;

  const baseButtonClass = `
        inline-flex items-center justify-center
        w-full rounded-sm
        outline-none 
        no-underline
        !font-medium
        transition-[background-color,box-shadow,color,transform] duration-300`;

  const lgButtonSizeClass = `h-11 px-[15px] py-[9px] text-base`;
  const mdButtonSizeClass = `h-10 px-[14px] py-[10px] !text-sm font-medium`;

  const primaryButtonClass = `     
        text-[var(--color-primary-invert)]
        bg-[var(--bg-brand-primary)]
        shadow-[0px_1px_3px_rgba(0,0,0,0.1),_0px_1px_2px_rgba(0,0,0,0.06)]
        hover:bg-[var(--bg-brand-primary-emphasize)]
        focus:bg-[var(--bg-brand-primary-emphasize)]`;

  const secondaryButtonClass = `
        border border-[0.5px] border-[#e6e6e6]
        bg-[var(--bg-primary)]
        text-[var(--color-primary)]
        shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.06)]

        hover:bg-[var(--bg-primary-hover)]
        hover:text-[var(--color-primary-hover)]
        hover:border-[#e6e6e6]
            
        focus:bg-[var(--bg-primary-hover)]
        focus:text-[var(--color-primary-hover)]
        focus:border
        focus:border-[#e6e6e6]`;

  const dangerButtonClass = `
        bg-[var(--color-error)] 
        text-[var(--color-primary-invert)]
        hover:bg-[#b91c1c] 
        focus:bg-[#b91c1c]
        focus:shadow-[0_0_0_1px_#d92d20,0_0_0_4px_rgba(217,45,32,0.12)]`;

  const focusShadowButtonClass = `focus:shadow-[0px_0px_0px_4px_rgba(68,76,231,0.12)]`;
  const activeButtonClass = `active:translate-x-[0.5px] active:translate-y-[0.5px]`;
  const disabledButtonClass = `
        disabled:bg-[var(--bg-disabled)]
        disabled:text-[var(--color-disabled)]
        disabled:shadow-none
        disabled:pointer-events-none`;

  return (
    <dialog
      ref={dialogRef}
      className={dialogClass}
      onCancel={(event) => event.preventDefault()} // Disable ESC key closing because cookie consent requires explicit user action
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-[var(--color-primary)]">
          We use cookies
        </h3>
        <p className="text-sm text-[var(--color-secondary)]">
          We use cookies to enhance your browsing experience and improve our
          website's performance. By continuing to use this site, you consent to
          the use of cookies. To learn more about how we use cookies and your
          options, please read our{" "}
          <Link
            to="/cookie-policy"
            target="_blank"
            className="text-[var(--color-brand-primary)]"
          >
            cookie policy
          </Link>
          .
        </p>
      </div>
      <div
        className={`flex flex-col-reverse gap-2
      md:flex-row md:justify-between md:items-center`}
      >
        <button
          type="button"
          /* ax-button button button-danger button-size-md button-decline-cookie */
          className={`
            ${baseButtonClass}
            ${dangerButtonClass}
            ${mdButtonSizeClass}

            md:w-[101px]`}
          onClick={onDeclineAll}
        >
          Decline all
        </button>
        <div
          className={`flex flex-col gap-2
        md:flex-row
        md:gap-4`}
        >
          <button
            type="button"
            /* ax-button button button-primary button-size-lg button-allow-cookie */
            className={`
            ${baseButtonClass}
            ${focusShadowButtonClass}
            ${primaryButtonClass}
            ${activeButtonClass}
            ${disabledButtonClass}
            ${lgButtonSizeClass}

            md:w-[140px] [@media(min-width:90rem)]:w-[184px]`}
            onClick={onAcceptAll}
          >
            Allow cookies
          </button>
          <button
            type="button"
            /* ax-button button button-secondary button-size-lg button-allow-cookie */
            className={`
            ${baseButtonClass}
            ${focusShadowButtonClass}            
            ${secondaryButtonClass}
            ${activeButtonClass}
            ${disabledButtonClass}
            ${lgButtonSizeClass}
            
            md:w-[160px] [@media(min-width:90rem)]:w-[184px]`}
            onClick={onManageCookies}
          >
            Manage cookies
          </button>
        </div>
      </div>
    </dialog>
  );
}
