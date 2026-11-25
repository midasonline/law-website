"use client";

import { useEffect, useId, useRef } from "react";

export function Modal({ open, onClose, title, children }: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog || !open) return;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [open]);

  return (
    <dialog ref={ref} aria-labelledby={titleId} onCancel={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[min(640px,calc(100%-32px))] overflow-y-auto border border-line bg-page p-6 text-left md:p-10">
      <div className="mb-7 flex items-start justify-between gap-5">
        <h2 id={titleId} className="text-[28px] leading-tight font-medium tracking-tight">{title}</h2>
        <button type="button" onClick={onClose} aria-label="Close dialog" className="flex size-9 shrink-0 items-center justify-center border border-line text-2xl hover:bg-white hover:text-black">×</button>
      </div>
      {children}
    </dialog>
  );
}
