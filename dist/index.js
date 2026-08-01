import { jsx as t, jsxs as m, Fragment as E } from "react/jsx-runtime";
import { useId as O, useState as h, useContext as C, createContext as I, forwardRef as w, memo as j, useEffect as H } from "react";
import { clsx as c } from "clsx";
import { ChevronDown as R, Info as T, AlertTriangle as K, XCircle as q, CheckCircle as W, X as F, ChevronDownIcon as U } from "lucide-react";
import { cva as N } from "class-variance-authority";
import { usePopper as P } from "react-popper";
const X = N("shrink-0", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8"
    },
    color: {
      default: "text-text",
      secondary: "text-text-secondary",
      muted: "text-text-muted",
      success: "text-success-icon",
      error: "text-error-icon",
      warning: "text-warning-icon",
      info: "text-info-icon"
    }
  },
  defaultVariants: {
    size: "md",
    color: "default"
  }
}), v = ({
  icon: e,
  size: s = "md",
  color: r = "default",
  className: a,
  filled: o = !1
}) => {
  const n = c(X({ size: s, color: r }), a);
  return /* @__PURE__ */ t(
    e,
    {
      className: n,
      fill: o ? "currentColor" : "none"
    }
  );
}, _ = N("", {
  variants: {
    variant: {
      h1: "text-2xl font-bold",
      h2: "text-lg font-semibold",
      h3: "text-base font-semibold",
      h4: "text-sm font-medium",
      h5: "text-xs font-medium",
      body: "text-sm",
      small: "text-xs",
      xs: "text-[10px]",
      caption: "text-xs uppercase tracking-wide"
    },
    color: {
      default: "text-text",
      info: "text-info-text",
      inverse: "text-text-inverse",
      muted: "text-text-muted",
      success: "text-success-text",
      error: "text-error-text",
      warning: "text-warning-text"
    }
  },
  defaultVariants: {
    variant: "body",
    color: "default"
  }
}), x = ({
  variant: e = "body",
  color: s = "default",
  children: r,
  as: a,
  className: o,
  ...n
}) => {
  const l = a || (e === "h1" || e === "h2" || e === "h3" ? e : "p"), i = c(_({ variant: e, color: s }), o);
  return /* @__PURE__ */ t(l, { className: i, ...n, children: r });
}, S = I(
  null
), Z = () => {
  const e = C(S);
  if (!e)
    throw new Error("Accordion must be used within an AccordionGroup");
  return e;
}, Oe = ({
  children: e,
  allowMultiple: s = !1,
  defaultOpenIds: r = [],
  openIds: a,
  onOpenIdsChange: o,
  className: n
}) => {
  const [l, i] = h(r), d = a !== void 0, u = d ? a : l, b = (p) => {
    const f = u.includes(p), g = s ? f ? u.filter((y) => y !== p) : [...u, p] : f ? [] : [p];
    d || i(g), o?.(g);
  };
  return /* @__PURE__ */ t(S.Provider, { value: { openIds: u, toggle: b }, children: /* @__PURE__ */ t(
    "div",
    {
      className: c(
        "bg-surface divide-border divide-y rounded border",
        n
      ),
      children: e
    }
  ) });
}, L = I(null), $ = () => {
  const e = C(L);
  if (!e)
    throw new Error(
      "AccordionTrigger/AccordionContent must be used within an Accordion"
    );
  return e;
}, Te = ({
  id: e,
  children: s,
  disabled: r = !1,
  className: a,
  ...o
}) => {
  const { openIds: n, toggle: l } = Z(), i = O(), d = n.includes(e), u = () => {
    r || l(e);
  };
  return /* @__PURE__ */ t(L.Provider, { value: { isOpen: d, toggle: u, disabled: r, contentId: i }, children: /* @__PURE__ */ t("div", { className: a, ...o, children: s }) });
}, Pe = ({
  children: e,
  icon: s,
  className: r,
  ...a
}) => {
  const { isOpen: o, toggle: n, disabled: l, contentId: i } = $();
  return /* @__PURE__ */ m(
    "button",
    {
      type: "button",
      onClick: n,
      disabled: l,
      "aria-expanded": o,
      "aria-controls": i,
      className: c(
        "flex w-full items-center gap-2 px-3 py-2.5 text-left transition-colors",
        l ? "cursor-not-allowed opacity-60" : "hover:bg-surface-hover cursor-pointer",
        r
      ),
      ...a,
      children: [
        s && /* @__PURE__ */ t(v, { icon: s, size: "sm", color: "muted" }),
        typeof e == "string" ? /* @__PURE__ */ t(x, { variant: "h4", className: "flex-1", children: e }) : /* @__PURE__ */ t("div", { className: "flex-1", children: e }),
        /* @__PURE__ */ t(
          v,
          {
            icon: R,
            size: "sm",
            color: "muted",
            className: c("transition-transform", o && "rotate-180")
          }
        )
      ]
    }
  );
}, Se = ({
  children: e,
  className: s,
  ...r
}) => {
  const { isOpen: a, contentId: o } = $();
  return /* @__PURE__ */ t(
    "div",
    {
      id: o,
      role: "region",
      className: c(
        "grid transition-[grid-template-rows] duration-200 ease-in-out",
        a ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      ),
      children: /* @__PURE__ */ t("div", { className: "overflow-hidden", children: /* @__PURE__ */ t(
        "div",
        {
          className: c("text-text-secondary px-3 pb-3 text-sm", s),
          ...r,
          children: e
        }
      ) })
    }
  );
}, J = N("rounded px-3 py-2 text-xs border", {
  variants: {
    variant: {
      success: "bg-success-bg text-success-text border-success-border",
      error: "bg-error-bg text-error-text border-error-border",
      warning: "bg-warning-bg text-warning-text border-warning-border",
      info: "bg-info-bg text-info-text border-info-border"
    }
  },
  defaultVariants: {
    variant: "info"
  }
}), Q = {
  success: W,
  error: q,
  warning: K,
  info: T
}, Le = ({
  variant: e = "info",
  children: s,
  showIcon: r = !0,
  className: a,
  ...o
}) => /* @__PURE__ */ t(
  "div",
  {
    className: c(
      "rounded px-3 py-2 text-xs",
      J({ variant: e }),
      a
    ),
    ...o,
    children: r ? /* @__PURE__ */ m("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ t(v, { icon: Q[e], size: "sm", color: e }),
      /* @__PURE__ */ t("span", { children: s })
    ] }) : s
  }
), Y = N(
  "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium shrink-0",
  {
    variants: {
      variant: {
        default: "bg-surface-hover text-text-secondary",
        success: "bg-success-bg text-success-text",
        error: "bg-error-bg text-error-text",
        warning: "bg-warning-bg text-warning-text",
        info: "bg-info-bg text-info-text"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), $e = ({
  variant: e = "default",
  children: s,
  className: r,
  ...a
}) => {
  const o = c(Y({ variant: e }), r);
  return /* @__PURE__ */ t("span", { className: o, ...a, children: s });
}, ee = N(
  "cursor-pointer rounded font-medium transition-all inline-flex items-center justify-center gap-1.5 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60 border",
  {
    variants: {
      variant: {
        filled: "",
        outlined: "",
        ghost: "",
        text: ""
      },
      color: {
        primary: "",
        secondary: "",
        danger: "",
        success: ""
      },
      size: {
        sm: "text-xs leading-3.5",
        md: "text-sm leading-4",
        lg: "text-base leading-4.5"
      },
      fullWidth: {
        true: "w-full",
        false: ""
      },
      iconOnly: {
        true: "aspect-square",
        false: ""
      }
    },
    compoundVariants: [
      // filled
      {
        variant: "filled",
        color: "primary",
        className: "bg-primary text-text-inverse hover:bg-primary-hover active:scale-[0.98] border-primary disabled:bg-primary disabled:border-primary"
      },
      {
        variant: "filled",
        color: "secondary",
        className: "bg-surface text-text-secondary hover:bg-surface-hover active:bg-surface-active border-transparent"
      },
      {
        variant: "filled",
        color: "danger",
        className: "bg-error text-text-inverse hover:bg-error-hover active:scale-[0.98] border-error disabled:border-error"
      },
      {
        variant: "filled",
        color: "success",
        className: "bg-success text-text-inverse hover:bg-success-hover active:scale-[0.98] border-success disabled:border-success"
      },
      // outlined
      {
        variant: "outlined",
        color: "primary",
        className: "bg-transparent text-primary border-primary hover:bg-primary/10 active:scale-[0.98]"
      },
      {
        variant: "outlined",
        color: "secondary",
        className: "bg-transparent text-text-secondary border-border hover:bg-surface-hover"
      },
      {
        variant: "outlined",
        color: "danger",
        className: "bg-transparent text-error border-error hover:bg-error/10 active:scale-[0.98]"
      },
      {
        variant: "outlined",
        color: "success",
        className: "bg-transparent text-success border-success hover:bg-success/10 active:scale-[0.98]"
      },
      // ghost
      {
        variant: "ghost",
        color: "primary",
        className: "bg-transparent text-primary border-transparent hover:bg-primary/10"
      },
      {
        variant: "ghost",
        color: "secondary",
        className: "bg-transparent text-text-secondary border-transparent hover:bg-surface-hover"
      },
      {
        variant: "ghost",
        color: "danger",
        className: "bg-transparent text-error border-transparent hover:bg-error/10"
      },
      {
        variant: "ghost",
        color: "success",
        className: "bg-transparent text-success border-transparent hover:bg-success/10"
      },
      // text
      {
        variant: "text",
        color: "primary",
        className: "bg-transparent text-primary border-transparent hover:underline"
      },
      {
        variant: "text",
        color: "secondary",
        className: "bg-transparent text-text-secondary border-transparent hover:underline"
      },
      {
        variant: "text",
        color: "danger",
        className: "bg-transparent text-error border-transparent hover:underline"
      },
      {
        variant: "text",
        color: "success",
        className: "bg-transparent text-success border-transparent hover:underline"
      },
      // size + iconOnly
      { size: "sm", iconOnly: !0, className: "p-1.5" },
      { size: "md", iconOnly: !0, className: "p-2.5" },
      { size: "lg", iconOnly: !0, className: "p-3.5" },
      { size: "sm", iconOnly: !1, className: "px-2.5 py-1.5" },
      { size: "md", iconOnly: !1, className: "px-3 py-2.5" },
      { size: "lg", iconOnly: !1, className: "px-4 py-3.5" }
    ],
    defaultVariants: {
      variant: "filled",
      color: "primary",
      size: "md",
      fullWidth: !1,
      iconOnly: !1
    }
  }
), A = {
  sm: 14,
  md: 16,
  lg: 18
}, k = w(
  ({
    variant: e = "filled",
    color: s = "primary",
    size: r = "md",
    fullWidth: a = !1,
    icon: o,
    iconFilled: n = !1,
    iconPosition: l = "left",
    className: i,
    disabled: d,
    children: u,
    ...b
  }, p) => {
    const f = c(
      ee({
        variant: e,
        color: s,
        size: r,
        fullWidth: a,
        iconOnly: o && !u
      }),
      i
    );
    return /* @__PURE__ */ m("button", { ref: p, className: f, disabled: d, ...b, children: [
      o && l === "left" && /* @__PURE__ */ t(
        o,
        {
          size: A[r],
          fill: n ? "currentColor" : "none"
        }
      ),
      u,
      o && l === "right" && /* @__PURE__ */ t(
        o,
        {
          size: A[r],
          fill: n ? "currentColor" : "none"
        }
      )
    ] });
  }
);
k.displayName = "Button";
const re = N("rounded transition-colors list-none border", {
  variants: {
    variant: {
      default: "bg-surface",
      selected: "bg-surface-hover border-accent-hover",
      success: "bg-success-bg font-medium border-success-border",
      secondary: "bg-background-secondary text-text-muted",
      errored: "bg-error-bg text-error-text border-error-border",
      deleted: "bg-error-bg opacity-50 border-error-border",
      warning: "bg-warning-bg font-medium border-warning-border"
    },
    size: {
      sm: "px-2 py-1.5",
      md: "px-3 py-2.5",
      lg: "p-4"
    },
    hover: {
      true: "",
      false: ""
    },
    clickable: {
      true: "cursor-pointer",
      false: ""
    },
    disabled: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      hover: !0,
      variant: "default",
      className: "hover:bg-surface-hover hover:border-border-hover"
    },
    {
      hover: !0,
      variant: "selected",
      className: "hover:bg-surface-active"
    },
    {
      hover: !0,
      variant: "secondary",
      className: "hover:bg-background-secondary-hover"
    },
    {
      disabled: !0,
      clickable: !0,
      className: "cursor-not-allowed"
    }
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
    hover: !1,
    clickable: !1
  }
}), te = w(
  ({
    children: e,
    variant: s = "default",
    size: r = "md",
    hover: a = !1,
    clickable: o = !1,
    as: n = "div",
    autoScroll: l = !1,
    disabled: i = !1,
    onClick: d,
    className: u,
    ...b
  }, p) => {
    const f = c(
      re({
        variant: s,
        size: r,
        hover: a || !!d,
        clickable: o || !!d,
        disabled: i
      }),
      u
    );
    return /* @__PURE__ */ t(
      n,
      {
        ref: (g) => {
          l && g && (s === "success" || s === "selected") && g.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }), typeof p == "function" ? p(g) : p && (p.current = g);
        },
        className: f,
        onClick: i ? void 0 : d,
        ...b,
        children: e
      }
    );
  }
);
te.displayName = "Card";
const se = {
  sm: "max-w-xs",
  md: "max-w-sm",
  lg: "max-w-md",
  xl: "max-w-lg"
}, ae = ({
  isOpen: e,
  onClose: s,
  children: r,
  maxWidth: a = "md",
  zIndex: o = 99999,
  className: n,
  ...l
}) => e ? /* @__PURE__ */ t(
  "div",
  {
    className: "fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm",
    style: { zIndex: o },
    onClick: s,
    ...l,
    children: /* @__PURE__ */ m(
      "div",
      {
        className: c(
          "bg-surface relative mx-3 w-full overflow-hidden rounded-lg shadow-xl",
          se[a],
          n
        ),
        onClick: (i) => i.stopPropagation(),
        children: [
          s && /* @__PURE__ */ t(
            k,
            {
              icon: F,
              onClick: s,
              className: c(
                "absolute",
                a === "sm" ? "top-2 right-2" : "top-1.5 right-1.5"
              ),
              variant: "ghost",
              size: a === "sm" ? "sm" : "md",
              color: "secondary"
            }
          ),
          r
        ]
      }
    )
  }
) : null, oe = ({
  children: e,
  className: s,
  title: r,
  icon: a,
  ...o
}) => /* @__PURE__ */ m("div", { className: c("p-3", s), ...o, children: [
  /* @__PURE__ */ m("div", { className: "flex items-center gap-2 empty:hidden", children: [
    a && /* @__PURE__ */ t(v, { icon: a }),
    r && /* @__PURE__ */ t(x, { variant: "h3", children: r })
  ] }),
  e
] }), ne = ({
  children: e,
  className: s,
  borderless: r = !1,
  ...a
}) => /* @__PURE__ */ t(
  "div",
  {
    className: c(
      "overflow-auto px-3 py-3",
      r ? "pt-0" : "border-y",
      s
    ),
    style: { maxHeight: "70vh" },
    ...a,
    children: e
  }
), le = ({
  children: e,
  className: s,
  visible: r = !0,
  ...a
}) => /* @__PURE__ */ t(
  "div",
  {
    className: c(
      "bg-background-secondary flex justify-end gap-2 overflow-hidden px-2 transition-[max-height,opacity,padding] duration-200",
      s,
      r ? "max-h-14 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
    ),
    ...a,
    children: e
  }
), ce = j(
  ({
    title: e,
    message: s,
    confirmText: r = "Confirm",
    cancelText: a = "Cancel",
    onClick: o,
    onCancel: n,
    onConfirm: l,
    isDestructiveAction: i,
    ...d
  }) => {
    const [u, b] = h(!1), p = () => {
      o?.(), b(!0);
    }, f = () => {
      b(!1), n?.();
    }, g = () => {
      l(), b(!1);
    };
    return /* @__PURE__ */ m(E, { children: [
      /* @__PURE__ */ t(k, { onClick: p, ...d }),
      /* @__PURE__ */ m(ae, { isOpen: u, maxWidth: "sm", children: [
        /* @__PURE__ */ t(oe, { title: e }),
        /* @__PURE__ */ t(ne, { borderless: !0, children: /* @__PURE__ */ t(x, { variant: "body", color: "muted", children: s }) }),
        /* @__PURE__ */ m(le, { className: "flex-end flex gap-2", children: [
          /* @__PURE__ */ t(k, { onClick: f, color: "secondary", variant: "text", children: a }),
          /* @__PURE__ */ t(
            k,
            {
              onClick: g,
              color: i ? "danger" : "primary",
              children: r
            }
          )
        ] })
      ] })
    ] });
  }
);
ce.displayName = "ConfirmActionButton";
const ie = {
  none: "",
  sm: "my-2",
  md: "my-4",
  lg: "my-6"
}, Ge = ({
  orientation: e = "horizontal",
  spacing: s = "none",
  className: r,
  ...a
}) => e === "vertical" ? /* @__PURE__ */ t("div", { className: c("bg-border w-px", r), ...a }) : /* @__PURE__ */ t(
  "hr",
  {
    className: c(
      "border-border border-0 border-t",
      ie[s],
      r
    ),
    ...a
  }
), De = ({ items: e, trigger: s }) => {
  const [r, a] = h(!1), [o, n] = h(null), [l, i] = h(null), { styles: d, attributes: u } = P(o, l, {
    placement: "bottom-end",
    modifiers: [{ name: "offset", options: { offset: [0, 4] } }]
  });
  H(() => {
    if (!r) return;
    const f = (g) => {
      o && !o.contains(g.target) && l && !l.contains(g.target) && a(!1);
    };
    return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [r, o, l]);
  const b = (f) => {
    f(), a(!1);
  };
  return /* @__PURE__ */ m(E, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        ref: n,
        className: "shrink-0",
        onClick: (f) => {
          f.stopPropagation(), a(!r);
        },
        children: s
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        ref: i,
        style: d.popper,
        ...u.popper,
        className: r ? "z-50" : "pointer-events-none invisible",
        children: /* @__PURE__ */ t("div", { className: "bg-surface min-w-30 rounded shadow-lg", children: e.map((f, g) => {
          const y = f.icon;
          return /* @__PURE__ */ m(
            "button",
            {
              className: "hover:bg-surface-hover flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left text-sm whitespace-pre first:rounded-t last:rounded-b",
              onClick: (z) => {
                z.stopPropagation(), b(f.onClick);
              },
              children: [
                y && /* @__PURE__ */ t(
                  v,
                  {
                    icon: y,
                    size: "sm",
                    color: f.variant === "danger" ? "error" : "default"
                  }
                ),
                /* @__PURE__ */ t(
                  x,
                  {
                    variant: "body",
                    color: f.variant === "danger" ? "error" : "default",
                    children: f.label
                  }
                )
              ]
            },
            g
          );
        }) })
      }
    )
  ] });
}, G = ({ content: e }) => {
  const [s, r] = h(!1), [a, o] = h(
    null
  ), [n, l] = h(null), [i, d] = h(null), { styles: u, attributes: b } = P(a, n, {
    placement: "top",
    modifiers: [
      { name: "arrow", options: { element: i } },
      { name: "offset", options: { offset: [0, 10] } }
    ]
  });
  return /* @__PURE__ */ m("span", { className: "inline-flex items-center", children: [
    /* @__PURE__ */ t(
      "button",
      {
        ref: o,
        type: "button",
        onMouseEnter: () => r(!0),
        onMouseLeave: () => r(!1),
        onFocus: () => r(!0),
        onBlur: () => r(!1),
        className: "text-text-muted hover:text-text inline-flex transition-colors",
        tabIndex: -1,
        children: /* @__PURE__ */ t(T, { className: "h-3.5 w-3.5" })
      }
    ),
    /* @__PURE__ */ m(
      "div",
      {
        ref: l,
        style: u.popper,
        ...b.popper,
        className: s ? "z-50" : "pointer-events-none invisible",
        children: [
          /* @__PURE__ */ t("div", { className: "border-border bg-surface w-48 rounded-lg border px-2.5 py-2 shadow-lg", children: /* @__PURE__ */ t(x, { variant: "small", color: "muted", children: e }) }),
          /* @__PURE__ */ t("div", { ref: d, style: u.arrow, className: "absolute", children: /* @__PURE__ */ t("div", { className: "border-border bg-surface h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-b" }) })
        ]
      }
    )
  ] });
}, de = N(
  "rounded text-text-secondary transition-all duration-200 border focus:outline-none disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-60  ring-inset",
  {
    variants: {
      size: {
        sm: "text-xs leading-3.5 py-1.5",
        md: "text-sm leading-4 py-2.5",
        lg: "text-base leading-4.5 py-3.5"
      },
      hasError: {
        true: "bg-error-bg  focus:ring-error border-error-border",
        false: "bg-surface focus:bg-surface-active  focus:border-primary border-border"
      },
      fullWidth: {
        true: "w-full",
        false: ""
      },
      hasIcon: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      {
        size: "sm",
        hasIcon: !1,
        className: "px-2.5"
      },
      {
        size: "md",
        hasIcon: !1,
        className: "px-3.5"
      },
      {
        size: "lg",
        hasIcon: !1,
        className: "px-4.5"
      },
      {
        size: "sm",
        hasIcon: !0,
        className: "pl-8 pr-2.5"
      },
      {
        size: "md",
        hasIcon: !0,
        className: "pl-9 pr-3.5"
      },
      {
        size: "lg",
        hasIcon: !0,
        className: "pl-11 pr-4.5"
      }
    ],
    defaultVariants: {
      size: "md",
      hasError: !1,
      fullWidth: !0,
      hasIcon: !1
    }
  }
), ue = {
  sm: "sm",
  md: "sm",
  lg: "md"
}, me = {
  sm: "left-2.5",
  md: "left-3",
  lg: "left-4"
}, fe = w(
  ({
    label: e,
    info: s,
    error: r,
    fullWidth: a = !0,
    size: o = "md",
    className: n,
    id: l,
    icon: i,
    ...d
  }, u) => {
    const b = l || e?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ m("div", { className: c(a && "w-full"), children: [
      (e || s) && /* @__PURE__ */ m("div", { className: "mb-1 flex items-center gap-1", children: [
        e && /* @__PURE__ */ t(x, { variant: "small", color: "muted", children: e }),
        s && /* @__PURE__ */ t(G, { content: s })
      ] }),
      /* @__PURE__ */ m("div", { className: "relative", children: [
        i && /* @__PURE__ */ t(
          v,
          {
            icon: i,
            size: ue[o],
            color: "muted",
            className: c(
              "pointer-events-none absolute top-1/2 -translate-y-1/2",
              me[o]
            )
          }
        ),
        /* @__PURE__ */ t(
          "input",
          {
            ref: u,
            id: b,
            className: c(
              de({
                size: o,
                hasError: !!r,
                fullWidth: a,
                hasIcon: !!i
              }),
              n
            ),
            ...d
          }
        )
      ] }),
      r && /* @__PURE__ */ t(x, { variant: "small", color: "error", className: "mt-1", children: r })
    ] });
  }
);
fe.displayName = "Input";
const be = N(
  "inline-flex items-center justify-center rounded-sm border border-border bg-surface font-mono font-medium text-text-muted shrink-0",
  {
    variants: {
      size: {
        sm: "h-4 min-w-4 px-1 text-[10px] leading-2.5",
        md: "h-5 min-w-5 px-1.5 text-xs leading-3",
        lg: "h-6 min-w-6 px-2 text-sm leading-4"
      },
      iconOnly: {
        true: "pl-0 pr-0 aspect-square",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      iconOnly: !1
    }
  }
), pe = {
  sm: "xs",
  md: "sm",
  lg: "md"
}, Be = ({
  size: e = "md",
  icon: s,
  children: r,
  className: a,
  ...o
}) => {
  const n = c(be({ size: e, iconOnly: !!s }), a);
  return /* @__PURE__ */ t("kbd", { className: n, ...o, children: s ? /* @__PURE__ */ t(v, { icon: s, size: pe[e], color: "muted" }) : r });
}, ge = N(
  "appearance-none rounded text-text-secondary transition-all focus:outline-none disabled:cursor-not-allowed border disabled:bg-surface-muted disabled:opacity-60 cursor-pointer",
  {
    variants: {
      size: {
        sm: "text-xs leading-3.5 py-1.5",
        md: "text-sm leading-4 py-2.5",
        lg: "text-base leading-4.5 py-3.5"
      },
      hasError: {
        true: "bg-error-bg  focus:ring-error border-error-border",
        false: "bg-surface focus:bg-surface-active focus:border-primary border-border"
      },
      fullWidth: {
        true: "w-full",
        false: ""
      },
      hasIcon: {
        true: "",
        false: ""
      }
    },
    compoundVariants: [
      {
        size: "sm",
        hasIcon: !1,
        className: "pl-2.5 pr-8"
      },
      {
        size: "md",
        hasIcon: !1,
        className: "pl-3.5 pr-9"
      },
      {
        size: "lg",
        hasIcon: !1,
        className: "pl-4.5 pr-11"
      },
      {
        size: "sm",
        hasIcon: !0,
        className: "pl-8 pr-8"
      },
      {
        size: "md",
        hasIcon: !0,
        className: "pl-9 pr-9"
      },
      {
        size: "lg",
        hasIcon: !0,
        className: "pl-11 pr-11"
      }
    ],
    defaultVariants: {
      size: "md",
      hasError: !1,
      fullWidth: !0,
      hasIcon: !1
    }
  }
), xe = {
  sm: "sm",
  md: "sm",
  lg: "md"
}, he = {
  sm: "left-2.5",
  md: "left-3",
  lg: "left-4"
}, ve = w(
  ({
    label: e,
    info: s,
    error: r,
    fullWidth: a = !0,
    size: o = "md",
    className: n,
    id: l,
    children: i,
    icon: d,
    ...u
  }, b) => {
    const p = l || e?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ m("div", { className: c("relative", a && "w-full"), children: [
      (e || s) && /* @__PURE__ */ m("div", { className: "mb-1 flex items-center gap-1", children: [
        e && /* @__PURE__ */ t(x, { variant: "small", color: "muted", children: e }),
        s && /* @__PURE__ */ t(G, { content: s })
      ] }),
      /* @__PURE__ */ m("div", { className: "relative", children: [
        d && /* @__PURE__ */ t(
          v,
          {
            icon: d,
            size: xe[o],
            color: "muted",
            className: c(
              "pointer-events-none absolute top-1/2 -translate-y-1/2",
              he[o]
            )
          }
        ),
        /* @__PURE__ */ t(
          "select",
          {
            ref: b,
            id: p,
            className: c(
              ge({
                size: o,
                hasError: !!r,
                fullWidth: a,
                hasIcon: !!d
              }),
              n
            ),
            ...u,
            children: i
          }
        ),
        /* @__PURE__ */ t(
          v,
          {
            icon: U,
            size: "sm",
            color: "muted",
            className: "pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
          }
        )
      ] }),
      r && /* @__PURE__ */ t(x, { variant: "small", color: "error", className: "mt-1", children: r })
    ] });
  }
);
ve.displayName = "Select";
const D = I(null), B = () => {
  const e = C(D);
  if (!e)
    throw new Error("Tab/TabList/TabPanel must be used within a TabGroup");
  return e;
}, Me = ({
  children: e,
  defaultValue: s = "",
  value: r,
  onValueChange: a,
  className: o
}) => {
  const [n, l] = h(s), i = O(), d = r !== void 0, u = d ? r : n, b = (p) => {
    d || l(p), a?.(p);
  };
  return /* @__PURE__ */ t(D.Provider, { value: { value: u, setValue: b, idPrefix: i }, children: /* @__PURE__ */ t("div", { className: o, children: e }) });
}, je = ({ children: e, className: s, ...r }) => /* @__PURE__ */ t(
  "div",
  {
    role: "tablist",
    className: c("border-border flex gap-1 border-b", s),
    ...r,
    children: e
  }
), He = ({
  value: e,
  children: s,
  icon: r,
  disabled: a = !1,
  className: o,
  ...n
}) => {
  const { value: l, setValue: i, idPrefix: d } = B(), u = l === e, b = `${d}-tab-${e}`, p = `${d}-panel-${e}`;
  return /* @__PURE__ */ m(
    "button",
    {
      type: "button",
      id: b,
      role: "tab",
      onClick: () => i(e),
      onKeyDown: (g) => {
        if (g.key !== "ArrowRight" && g.key !== "ArrowLeft") return;
        const y = Array.from(
          g.currentTarget.closest('[role="tablist"]')?.querySelectorAll('[role="tab"]:not(:disabled)') ?? []
        ), z = y.indexOf(g.currentTarget);
        if (z === -1) return;
        g.preventDefault();
        const M = g.key === "ArrowRight" ? 1 : -1, V = y[(z + M + y.length) % y.length];
        V?.focus(), V?.click();
      },
      disabled: a,
      "aria-selected": u,
      "aria-controls": p,
      tabIndex: u ? 0 : -1,
      className: c(
        "-mb-px flex items-center gap-2 border-b-2 px-3 py-2 transition-colors",
        a ? "cursor-not-allowed opacity-60" : "hover:border-border cursor-pointer",
        u ? "border-primary" : "border-transparent",
        o
      ),
      ...n,
      children: [
        r && /* @__PURE__ */ t(
          v,
          {
            icon: r,
            size: "sm",
            color: u ? "default" : "muted"
          }
        ),
        typeof s == "string" ? /* @__PURE__ */ t(x, { as: "span", variant: "h4", color: u ? "default" : "muted", children: s }) : s
      ]
    }
  );
}, Re = ({
  value: e,
  children: s,
  className: r,
  ...a
}) => {
  const { value: o, idPrefix: n } = B();
  return o === e ? /* @__PURE__ */ t(
    "div",
    {
      id: `${n}-panel-${e}`,
      role: "tabpanel",
      "aria-labelledby": `${n}-tab-${e}`,
      tabIndex: 0,
      className: c("text-text-secondary py-3 text-sm", r),
      ...a,
      children: s
    }
  ) : null;
}, ye = w(
  ({
    label: e,
    error: s,
    fullWidth: r = !0,
    className: a,
    containerClassName: o,
    id: n,
    ...l
  }, i) => {
    const d = n || e?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ m("div", { className: c(r && "w-full", o), children: [
      e && /* @__PURE__ */ t(x, { variant: "small", color: "muted", className: "mb-1 block", children: e }),
      /* @__PURE__ */ t(
        "textarea",
        {
          ref: i,
          id: d,
          className: c(
            "bg-surface text-text-secondary resize-none rounded border px-3 py-2 text-sm transition-all",
            "focus:bg-surface-active ring-inset focus:ring-1 focus:outline-none",
            "disabled:bg-surface-muted disabled:cursor-not-allowed disabled:opacity-60",
            s ? "bg-error-bg focus:ring-error border-error-border" : "focus:ring-primary border-border",
            r && "w-full",
            a
          ),
          ...l
        }
      ),
      s && typeof s == "string" && /* @__PURE__ */ t(x, { variant: "small", color: "error", className: "mt-1", children: s })
    ] });
  }
);
ye.displayName = "Textarea";
const Ne = {
  sm: "w-8 h-4.5",
  md: "w-10 h-6",
  lg: "w-12 h-7"
}, we = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5"
}, ke = w(
  ({ label: e, className: s, size: r = "md", fullWidth: a = !1, disabled: o, ...n }, l) => /* @__PURE__ */ m("label", { className: c("flex items-center gap-3", a && "w-full"), children: [
    e && /* @__PURE__ */ t(x, { variant: "small", color: "muted", className: "block", children: e }),
    /* @__PURE__ */ m(
      "div",
      {
        className: c(
          "relative inline-flex items-center",
          Ne[r],
          o ? "cursor-not-allowed opacity-60" : "cursor-pointer",
          s
        ),
        children: [
          /* @__PURE__ */ t(
            "input",
            {
              ref: l,
              type: "checkbox",
              role: "switch",
              "aria-checked": n.checked,
              disabled: o,
              className: "sr-only",
              ...n
            }
          ),
          /* @__PURE__ */ t(
            "span",
            {
              className: c(
                "absolute inset-0 rounded-full transition-colors",
                n.checked ? "bg-success" : "bg-surface-active"
              ),
              "aria-hidden": !0
            }
          ),
          /* @__PURE__ */ t(
            "span",
            {
              className: c(
                "absolute top-1/2 left-1 -translate-y-1/2 transform rounded-full bg-white shadow-sm transition-transform",
                we[r],
                n.checked ? "translate-x-full" : "translate-x-0"
              ),
              "aria-hidden": !0
            }
          )
        ]
      }
    )
  ] })
);
ke.displayName = "Toggle";
export {
  Te as Accordion,
  Se as AccordionContent,
  Oe as AccordionGroup,
  Pe as AccordionTrigger,
  Le as Alert,
  $e as Badge,
  k as Button,
  te as Card,
  ce as ConfirmActionButton,
  Ge as Divider,
  De as Dropdown,
  v as Icon,
  G as InfoPopover,
  fe as Input,
  Be as Kbd,
  ae as Modal,
  ne as ModalBody,
  le as ModalFooter,
  oe as ModalHeader,
  ve as Select,
  He as Tab,
  Me as TabGroup,
  je as TabList,
  Re as TabPanel,
  x as Text,
  ye as Textarea,
  ke as Toggle
};
//# sourceMappingURL=index.js.map
