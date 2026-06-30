/* 
CookieBannerReact, CookieModalReact не знают ничего 
про localStorage, useCookieConsent, loadScripts или состояние приложения. 
Их задача - показать интерфейс и сообщить наверх, что произошло событие.
*/

import { useEffect, useRef, useState } from "react";

export default function CookieModalTailwind({
  onDeclineAll,
  onAcceptAll,
  onSavePreferences,
}) {
  const [settings, setSettings] = useState({
    analytics: false,
    marketing: false,
  });

  const dialogRef = useRef(null);

  useEffect(() => {
    dialogRef.current.showModal();
  }, []);

  const dialogClass = `
        flex flex-col gap-6
        w-[340px]
        p-6
        bg-[var(--bg-primary)]
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]

        md:w-[458px]
        
        [@media(min-width:90rem)]:w-[384px]
        
        m-auto
       
        backdrop:bg-black/40
        backdrop:backdrop-blur-[6px]`;

  const switchSliderClass = `
        absolute
        inset-0
        rounded-full
        cursor-pointer
        bg-[#e5e7eb]
        border
        border-[#e5e7eb]
        transition-[background-color,border-color]
        duration-[400ms]
            
        before:content-['']
        before:absolute
        before:left-px
        before:bottom-px

        before:inline-block
        before:box-border

        before:w-4
        before:h-4

        before:rounded-full
        before:bg-[var(--bg-primary)]

        before:shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]

        before:transition-transform
        before:duration-[400ms]
            
            
        peer-checked:bg-[#4338ca]
        peer-checked:border-[#4338ca]
            
        peer-checked:before:translate-x-4
            
        peer-checked:hover:bg-[#3730a3]
        peer-checked:focus:bg-[#3730a3]
            
        hover:bg-[#d1d5db]
        focus:bg-[#d1d5db]
            
        peer-focus:border-[#9ca3af]
        peer-focus:shadow-[0_0_0_4px_rgba(157,164,174,0.2)]
            
        peer-checked:focus:border-[#4f46e5]
        peer-checked:focus:shadow-[0_0_0_4px_rgba(68,76,231,0.12)]
        
        peer-disabled:bg-[#f3f4f6]
        peer-disabled:border-[#f3f4f6]
        peer-disabled:pointer-events-none
        peer-disabled:before:bg-[#d1d5db]
        `;

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

  const cookieModalClass = `flex flex-col gap-1`;
  const cookieHeaderClass = `flex items-center justify-between`;
  const cookieTitleClass = `text-base font-semibold text-[var(--color-primary)]`;
  const cookieDescClass = `text-sm font-normal text-[var(--color-secondary)]`;
  const switchLabelClass = `relative inline-block w-9 h-5`;
  const switchInputClass = `opacity-0 w-0 h-0 peer`;

  return (
    <dialog
      ref={dialogRef}
      className={dialogClass}
      onCancel={(event) => event.preventDefault()} // Disable ESC key closing because cookie consent requires explicit user action
    >
      <div className="flex flex-col gap-6">
        <div className={cookieModalClass}>
          <div className={cookieHeaderClass}>
            <h3 className={cookieTitleClass}>Essentials</h3>
            <label className={switchLabelClass}>
              <input
                type="checkbox"
                className={switchInputClass}
                checked
                disabled
              />
              <span className={switchSliderClass}></span>
            </label>
          </div>
          <p className={cookieDescClass}>
            These cookies are essential for the proper functioning of our
            services and cannot be disabled.
          </p>
        </div>
        <div className={cookieModalClass}>
          <div className={cookieHeaderClass}>
            <h3 className={cookieTitleClass}>Analytics</h3>
            <label className={switchLabelClass}>
              <input
                type="checkbox"
                className={switchInputClass}
                checked={settings.analytics}
                onChange={() => {
                  setSettings((prev) => ({
                    ...prev,
                    analytics: !prev.analytics,
                  }));
                }}
              />
              <span className={switchSliderClass}></span>
            </label>
          </div>
          <p className={cookieDescClass}>
            These cookies collect information about how you use our services or
            potential errors you encounter. Based on this information we are
            able to improve your experience and react to any issues.
          </p>
        </div>
        <div className={cookieModalClass}>
          <div className={cookieHeaderClass}>
            <h3 className={cookieTitleClass}>Marketing</h3>
            <label className={switchLabelClass}>
              <input
                type="checkbox"
                className={switchInputClass}
                checked={settings.marketing}
                onChange={() => {
                  setSettings((prev) => ({
                    ...prev,
                    marketing: !prev.marketing,
                  }));
                }}
              />
              <span className={switchSliderClass}></span>
            </label>
          </div>
          <p className={cookieDescClass}>
            These cookies allow us to show you advertisements relevant to you
            through our advertising partners.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-2">
        <button
          type="button"
          /* ax-button button button-danger button-size-md button-decline-cookie */
          className={`
            ${baseButtonClass}
            ${dangerButtonClass}
            ${mdButtonSizeClass}
            `}
          onClick={onDeclineAll}
        >
          Decline all
        </button>
        <div className="flex gap-2">
          <div className="flex-1">
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
                `}
              onClick={onAcceptAll}
            >
              Accept all
            </button>
          </div>
          <div className="flex-1">
            <button
              type="button"
              /* ax-button button button-secondary button-size-lg button-allow-cookie */
              className={`${baseButtonClass}
                ${focusShadowButtonClass}
                ${secondaryButtonClass}
                ${activeButtonClass}
                ${disabledButtonClass}
                ${lgButtonSizeClass}
                `}
              onClick={() =>
                onSavePreferences({
                  analytics: settings.analytics,
                  marketing: settings.marketing,
                })
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
