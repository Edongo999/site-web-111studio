import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/ModalPortal.tsx
import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
const ANIM_DURATION = 260;
export default function ModalPortal({ children, onClose, onKeyDown, }) {
    const isClient = typeof document !== "undefined";
    const contentRef = useRef(null);
    const closeBtnRef = useRef(null);
    const visibleTimeout = useRef(null);
    const focusFirst = useCallback(() => {
        const root = contentRef.current;
        if (!root)
            return;
        const focusable = root.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
        if (focusable.length > 0) {
            focusable[0].focus();
        }
        else {
            closeBtnRef.current?.focus();
        }
    }, []);
    useEffect(() => {
        visibleTimeout.current = window.setTimeout(() => {
            focusFirst();
        }, ANIM_DURATION);
        const handleKey = (e) => {
            if (e.key === "Escape")
                onClose();
            if (onKeyDown)
                onKeyDown(e);
        };
        document.addEventListener("keydown", handleKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            if (visibleTimeout.current) {
                clearTimeout(visibleTimeout.current);
                visibleTimeout.current = null;
            }
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose, onKeyDown, focusFirst]);
    if (!isClient)
        return null;
    const modalRoot = document.body;
    const handleKeyDownInside = (e) => {
        if (e.key !== "Tab" || !contentRef.current)
            return;
        const focusable = Array.from(contentRef.current.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'));
        if (focusable.length === 0)
            return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
        else if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        }
    };
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return createPortal(_jsxs("div", { "aria-modal": "true", role: "dialog", onClick: handleBackdropClick, className: "fixed inset-0 z-[1200] flex items-center justify-center p-4", children: [_jsx("div", { "aria-hidden": "true", className: "absolute inset-0 bg-black/85 transition-opacity duration-[260ms]" }), _jsxs("div", { ref: contentRef, onClick: (e) => e.stopPropagation(), onKeyDown: handleKeyDownInside, className: "relative z-[1210] w-full max-w-[1100px] mx-4 transform opacity-100 transition duration-[260ms]", children: [_jsx("button", { ref: closeBtnRef, onClick: () => onClose(), "aria-label": "Fermer", className: "\r\n            absolute\r\n            right-3\r\n            top-3\r\n            z-[1220]\r\n            p-2\r\n            rounded-full\r\n            bg-black/60\r\n            border\r\n            border-white/10\r\n            text-white\r\n            cursor-pointer\r\n            backdrop-blur-sm\r\n            transition\r\n            duration-300\r\n            hover:bg-black/80\r\n            hover:rotate-90\r\n          ", children: _jsx(X, { size: 22, strokeWidth: 2.5 }) }), children] })] }), modalRoot);
}
