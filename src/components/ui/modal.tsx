"use client";

import { useEffect, useId, useRef } from "react";

export function Modal({ open, onClose, title, children, eyebrow, variant = "default" }: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
  variant?: "default" | "package";
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !open) return;
    const returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    dialog.showModal();
    return () => {
      dialog.close();
      if (returnFocus?.isConnected && !document.querySelector("dialog[open]")) {
        returnFocus.focus({ preventScroll: true });
      }
    };
  }, [open]);

  if (!open) return null;

  return (
    <dialog ref={ref} aria-labelledby={titleId} onCancel={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className={`fixed inset-0 m-auto max-h-[90dvh] overflow-y-auto border border-line bg-page p-6 text-left md:p-10 ${variant === "package" ? "w-[min(600px,calc(100%-32px))]" : "w-[min(640px,calc(100%-32px))]"}`}>
      {eyebrow && <p className="inner-eyebrow mb-6">{eyebrow}</p>}
      <div className={`${variant === "package" ? "mb-6" : "mb-7"} flex items-start justify-between gap-5`}>
        <h2 id={titleId} className={`${variant === "package" ? "text-[44px] leading-[55px]" : "text-[28px] leading-tight"} font-medium tracking-tight`}>{title}</h2>
        <button type="button" onClick={onClose} aria-label="Close dialog" className="flex size-9 shrink-0 items-center justify-center border border-line text-2xl hover:bg-white hover:text-black">×</button>
      </div>
      {children}
    </dialog>
  );
}
