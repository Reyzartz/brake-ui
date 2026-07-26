import { jsx as e, jsxs as d, Fragment as C } from "react/jsx-runtime";
import { clsx as l } from "clsx";
import { Info as I, AlertTriangle as S, XCircle as P, CheckCircle as L, X as B, ChevronDownIcon as M } from "lucide-react";
import { cva as h } from "class-variance-authority";
import { forwardRef as N, memo as j, useState as v, useEffect as A } from "react";
import { usePopper as V } from "react-popper";
const T = h("shrink-0", {
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
}), y = ({
  icon: r,
  size: t = "md",
  color: s = "default",
  className: a,
  filled: o = !1
}) => {
  const n = l(T({ size: t, color: s }), a);
  return /* @__PURE__ */ e(
    r,
    {
      className: n,
      fill: o ? "currentColor" : "none"
    }
  );
}, H = h("rounded px-3 py-2 text-xs border", {
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
}), D = {
  success: L,
  error: P,
  warning: S,
  info: I
}, he = ({
  variant: r = "info",
  children: t,
  showIcon: s = !0,
  className: a,
  ...o
}) => /* @__PURE__ */ e(
  "div",
  {
    className: l(
      "rounded px-3 py-2 text-xs",
      H({ variant: r }),
      a
    ),
    ...o,
    children: s ? /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e(y, { icon: D[r], size: "sm", color: r }),
      /* @__PURE__ */ e("span", { children: t })
    ] }) : t
  }
), R = h(
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
), ve = ({
  variant: r = "default",
  children: t,
  className: s,
  ...a
}) => {
  const o = l(R({ variant: r }), s);
  return /* @__PURE__ */ e("span", { className: o, ...a, children: t });
}, W = h(
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
), k = {
  sm: 14,
  md: 16,
  lg: 18
}, w = N(
  ({
    variant: r = "filled",
    color: t = "primary",
    size: s = "md",
    fullWidth: a = !1,
    icon: o,
    iconFilled: n = !1,
    iconPosition: c = "left",
    className: i,
    disabled: m,
    children: f,
    ...b
  }, p) => {
    const u = l(
      W({
        variant: r,
        color: t,
        size: s,
        fullWidth: a,
        iconOnly: o && !f
      }),
      i
    );
    return /* @__PURE__ */ d("button", { ref: p, className: u, disabled: m, ...b, children: [
      o && c === "left" && /* @__PURE__ */ e(
        o,
        {
          size: k[s],
          fill: n ? "currentColor" : "none"
        }
      ),
      f,
      o && c === "right" && /* @__PURE__ */ e(
        o,
        {
          size: k[s],
          fill: n ? "currentColor" : "none"
        }
      )
    ] });
  }
);
w.displayName = "Button";
const $ = h("rounded transition-colors list-none border", {
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
}), q = N(
  ({
    children: r,
    variant: t = "default",
    size: s = "md",
    hover: a = !1,
    clickable: o = !1,
    as: n = "div",
    autoScroll: c = !1,
    disabled: i = !1,
    onClick: m,
    className: f,
    ...b
  }, p) => {
    const u = l(
      $({
        variant: t,
        size: s,
        hover: a || !!m,
        clickable: o || !!m,
        disabled: i
      }),
      f
    );
    return /* @__PURE__ */ e(
      n,
      {
        ref: (g) => {
          c && g && (t === "success" || t === "selected") && g.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          }), typeof p == "function" ? p(g) : p && (p.current = g);
        },
        className: u,
        onClick: i ? void 0 : m,
        ...b,
        children: r
      }
    );
  }
);
q.displayName = "Card";
const F = h("", {
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
  variant: r = "body",
  color: t = "default",
  children: s,
  as: a,
  className: o,
  ...n
}) => {
  const c = a || (r === "h1" || r === "h2" || r === "h3" ? r : "p"), i = l(F({ variant: r, color: t }), o);
  return /* @__PURE__ */ e(c, { className: i, ...n, children: s });
}, X = {
  sm: "max-w-xs",
  md: "max-w-sm",
  lg: "max-w-md",
  xl: "max-w-lg"
}, _ = ({
  isOpen: r,
  onClose: t,
  children: s,
  maxWidth: a = "md",
  zIndex: o = 99999,
  className: n,
  ...c
}) => r ? /* @__PURE__ */ e(
  "div",
  {
    className: "fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm",
    style: { zIndex: o },
    onClick: t,
    ...c,
    children: /* @__PURE__ */ d(
      "div",
      {
        className: l(
          "bg-surface relative mx-3 w-full overflow-hidden rounded-lg shadow-xl",
          X[a],
          n
        ),
        onClick: (i) => i.stopPropagation(),
        children: [
          t && /* @__PURE__ */ e(
            w,
            {
              icon: B,
              onClick: t,
              className: l(
                "absolute",
                a === "sm" ? "top-2 right-2" : "top-1.5 right-1.5"
              ),
              variant: "ghost",
              size: a === "sm" ? "sm" : "md",
              color: "secondary"
            }
          ),
          s
        ]
      }
    )
  }
) : null, K = ({
  children: r,
  className: t,
  title: s,
  icon: a,
  ...o
}) => /* @__PURE__ */ d("div", { className: l("p-3", t), ...o, children: [
  /* @__PURE__ */ d("div", { className: "flex items-center gap-2 empty:hidden", children: [
    a && /* @__PURE__ */ e(y, { icon: a }),
    s && /* @__PURE__ */ e(x, { variant: "h3", children: s })
  ] }),
  r
] }), Z = ({
  children: r,
  className: t,
  borderless: s = !1,
  ...a
}) => /* @__PURE__ */ e(
  "div",
  {
    className: l(
      "overflow-auto px-3 py-3",
      s ? "pt-0" : "border-y",
      t
    ),
    style: { maxHeight: "70vh" },
    ...a,
    children: r
  }
), G = ({
  children: r,
  className: t,
  visible: s = !0,
  ...a
}) => /* @__PURE__ */ e(
  "div",
  {
    className: l(
      "bg-background-secondary flex justify-end gap-2 overflow-hidden px-2 transition-[max-height,opacity,padding] duration-200",
      t,
      s ? "max-h-14 py-2 opacity-100" : "max-h-0 py-0 opacity-0"
    ),
    ...a,
    children: r
  }
), J = j(
  ({
    title: r,
    message: t,
    confirmText: s = "Confirm",
    cancelText: a = "Cancel",
    onClick: o,
    onCancel: n,
    onConfirm: c,
    isDestructiveAction: i,
    ...m
  }) => {
    const [f, b] = v(!1), p = () => {
      o?.(), b(!0);
    }, u = () => {
      b(!1), n?.();
    }, g = () => {
      c(), b(!1);
    };
    return /* @__PURE__ */ d(C, { children: [
      /* @__PURE__ */ e(w, { onClick: p, ...m }),
      /* @__PURE__ */ d(_, { isOpen: f, maxWidth: "sm", children: [
        /* @__PURE__ */ e(K, { title: r }),
        /* @__PURE__ */ e(Z, { borderless: !0, children: /* @__PURE__ */ e(x, { variant: "body", color: "muted", children: t }) }),
        /* @__PURE__ */ d(G, { className: "flex-end flex gap-2", children: [
          /* @__PURE__ */ e(w, { onClick: u, color: "secondary", variant: "text", children: a }),
          /* @__PURE__ */ e(
            w,
            {
              onClick: g,
              color: i ? "danger" : "primary",
              children: s
            }
          )
        ] })
      ] })
    ] });
  }
);
J.displayName = "ConfirmActionButton";
const Q = {
  none: "",
  sm: "my-2",
  md: "my-4",
  lg: "my-6"
}, ye = ({
  orientation: r = "horizontal",
  spacing: t = "none",
  className: s,
  ...a
}) => r === "vertical" ? /* @__PURE__ */ e("div", { className: l("bg-border w-px", s), ...a }) : /* @__PURE__ */ e(
  "hr",
  {
    className: l(
      "border-border border-0 border-t",
      Q[t],
      s
    ),
    ...a
  }
), Ne = ({ items: r, trigger: t }) => {
  const [s, a] = v(!1), [o, n] = v(null), [c, i] = v(null), { styles: m, attributes: f } = V(o, c, {
    placement: "bottom-end",
    modifiers: [{ name: "offset", options: { offset: [0, 4] } }]
  });
  A(() => {
    if (!s) return;
    const u = (g) => {
      o && !o.contains(g.target) && c && !c.contains(g.target) && a(!1);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, [s, o, c]);
  const b = (u) => {
    u(), a(!1);
  };
  return /* @__PURE__ */ d(C, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: n,
        className: "shrink-0",
        onClick: (u) => {
          u.stopPropagation(), a(!s);
        },
        children: t
      }
    ),
    /* @__PURE__ */ e(
      "div",
      {
        ref: i,
        style: m.popper,
        ...f.popper,
        className: s ? "z-50" : "pointer-events-none invisible",
        children: /* @__PURE__ */ e("div", { className: "bg-surface min-w-30 rounded shadow-lg", children: r.map((u, g) => {
          const z = u.icon;
          return /* @__PURE__ */ d(
            "button",
            {
              className: "hover:bg-surface-hover flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left text-sm whitespace-pre first:rounded-t last:rounded-b",
              onClick: (O) => {
                O.stopPropagation(), b(u.onClick);
              },
              children: [
                z && /* @__PURE__ */ e(
                  y,
                  {
                    icon: z,
                    size: "sm",
                    color: u.variant === "danger" ? "error" : "default"
                  }
                ),
                /* @__PURE__ */ e(
                  x,
                  {
                    variant: "body",
                    color: u.variant === "danger" ? "error" : "default",
                    children: u.label
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
}, E = ({ content: r }) => {
  const [t, s] = v(!1), [a, o] = v(
    null
  ), [n, c] = v(null), [i, m] = v(null), { styles: f, attributes: b } = V(a, n, {
    placement: "top",
    modifiers: [
      { name: "arrow", options: { element: i } },
      { name: "offset", options: { offset: [0, 10] } }
    ]
  });
  return /* @__PURE__ */ d("span", { className: "inline-flex items-center", children: [
    /* @__PURE__ */ e(
      "button",
      {
        ref: o,
        type: "button",
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        onFocus: () => s(!0),
        onBlur: () => s(!1),
        className: "text-text-muted hover:text-text inline-flex transition-colors",
        tabIndex: -1,
        children: /* @__PURE__ */ e(I, { className: "h-3.5 w-3.5" })
      }
    ),
    /* @__PURE__ */ d(
      "div",
      {
        ref: c,
        style: f.popper,
        ...b.popper,
        className: t ? "z-50" : "pointer-events-none invisible",
        children: [
          /* @__PURE__ */ e("div", { className: "border-border bg-surface w-48 rounded-lg border px-2.5 py-2 shadow-lg", children: /* @__PURE__ */ e(x, { variant: "small", color: "muted", children: r }) }),
          /* @__PURE__ */ e("div", { ref: m, style: f.arrow, className: "absolute", children: /* @__PURE__ */ e("div", { className: "border-border bg-surface h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-b" }) })
        ]
      }
    )
  ] });
}, U = h(
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
), Y = {
  sm: "sm",
  md: "sm",
  lg: "md"
}, ee = {
  sm: "left-2.5",
  md: "left-3",
  lg: "left-4"
}, re = N(
  ({
    label: r,
    info: t,
    error: s,
    fullWidth: a = !0,
    size: o = "md",
    className: n,
    id: c,
    icon: i,
    ...m
  }, f) => {
    const b = c || r?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ d("div", { className: l(a && "w-full"), children: [
      (r || t) && /* @__PURE__ */ d("div", { className: "mb-1 flex items-center gap-1", children: [
        r && /* @__PURE__ */ e(x, { variant: "small", color: "muted", children: r }),
        t && /* @__PURE__ */ e(E, { content: t })
      ] }),
      /* @__PURE__ */ d("div", { className: "relative", children: [
        i && /* @__PURE__ */ e(
          y,
          {
            icon: i,
            size: Y[o],
            color: "muted",
            className: l(
              "pointer-events-none absolute top-1/2 -translate-y-1/2",
              ee[o]
            )
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            ref: f,
            id: b,
            className: l(
              U({
                size: o,
                hasError: !!s,
                fullWidth: a,
                hasIcon: !!i
              }),
              n
            ),
            ...m
          }
        )
      ] }),
      s && /* @__PURE__ */ e(x, { variant: "small", color: "error", className: "mt-1", children: s })
    ] });
  }
);
re.displayName = "Input";
const se = h(
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
), te = {
  sm: "xs",
  md: "sm",
  lg: "md"
}, we = ({
  size: r = "md",
  icon: t,
  children: s,
  className: a,
  ...o
}) => {
  const n = l(se({ size: r, iconOnly: !!t }), a);
  return /* @__PURE__ */ e("kbd", { className: n, ...o, children: t ? /* @__PURE__ */ e(y, { icon: t, size: te[r], color: "muted" }) : s });
}, ae = h(
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
), oe = {
  sm: "sm",
  md: "sm",
  lg: "md"
}, ne = {
  sm: "left-2.5",
  md: "left-3",
  lg: "left-4"
}, le = N(
  ({
    label: r,
    info: t,
    error: s,
    fullWidth: a = !0,
    size: o = "md",
    className: n,
    id: c,
    children: i,
    icon: m,
    ...f
  }, b) => {
    const p = c || r?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ d("div", { className: l("relative", a && "w-full"), children: [
      (r || t) && /* @__PURE__ */ d("div", { className: "mb-1 flex items-center gap-1", children: [
        r && /* @__PURE__ */ e(x, { variant: "small", color: "muted", children: r }),
        t && /* @__PURE__ */ e(E, { content: t })
      ] }),
      /* @__PURE__ */ d("div", { className: "relative", children: [
        m && /* @__PURE__ */ e(
          y,
          {
            icon: m,
            size: oe[o],
            color: "muted",
            className: l(
              "pointer-events-none absolute top-1/2 -translate-y-1/2",
              ne[o]
            )
          }
        ),
        /* @__PURE__ */ e(
          "select",
          {
            ref: b,
            id: p,
            className: l(
              ae({
                size: o,
                hasError: !!s,
                fullWidth: a,
                hasIcon: !!m
              }),
              n
            ),
            ...f,
            children: i
          }
        ),
        /* @__PURE__ */ e(
          y,
          {
            icon: M,
            size: "sm",
            color: "muted",
            className: "pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
          }
        )
      ] }),
      s && /* @__PURE__ */ e(x, { variant: "small", color: "error", className: "mt-1", children: s })
    ] });
  }
);
le.displayName = "Select";
const ce = N(
  ({
    label: r,
    error: t,
    fullWidth: s = !0,
    className: a,
    containerClassName: o,
    id: n,
    ...c
  }, i) => {
    const m = n || r?.toLowerCase().replace(/\s+/g, "-");
    return /* @__PURE__ */ d("div", { className: l(s && "w-full", o), children: [
      r && /* @__PURE__ */ e(x, { variant: "small", color: "muted", className: "mb-1 block", children: r }),
      /* @__PURE__ */ e(
        "textarea",
        {
          ref: i,
          id: m,
          className: l(
            "bg-surface text-text-secondary resize-none rounded border px-3 py-2 text-sm transition-all",
            "focus:bg-surface-active ring-inset focus:ring-1 focus:outline-none",
            "disabled:bg-surface-muted disabled:cursor-not-allowed disabled:opacity-60",
            t ? "bg-error-bg focus:ring-error border-error-border" : "focus:ring-primary border-border",
            s && "w-full",
            a
          ),
          ...c
        }
      ),
      t && typeof t == "string" && /* @__PURE__ */ e(x, { variant: "small", color: "error", className: "mt-1", children: t })
    ] });
  }
);
ce.displayName = "Textarea";
const ie = {
  sm: "w-8 h-4",
  md: "w-10 h-6",
  lg: "w-12 h-7"
}, de = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5"
}, me = N(
  ({ label: r, className: t, size: s = "md", fullWidth: a = !1, disabled: o, ...n }, c) => /* @__PURE__ */ d("label", { className: l("flex items-center gap-3", a && "w-full"), children: [
    r && /* @__PURE__ */ e(x, { variant: "small", color: "muted", className: "block", children: r }),
    /* @__PURE__ */ d(
      "div",
      {
        className: l(
          "relative inline-flex items-center",
          ie[s],
          o ? "cursor-not-allowed opacity-60" : "cursor-pointer",
          t
        ),
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: c,
              type: "checkbox",
              role: "switch",
              "aria-checked": n.checked,
              disabled: o,
              className: "sr-only",
              ...n
            }
          ),
          /* @__PURE__ */ e(
            "span",
            {
              className: l(
                "absolute inset-0 rounded-full transition-colors",
                n.checked ? "bg-success" : "bg-surface-active"
              ),
              "aria-hidden": !0
            }
          ),
          /* @__PURE__ */ e(
            "span",
            {
              className: l(
                "absolute top-1/2 left-1 -translate-y-1/2 transform rounded-full bg-white shadow-sm transition-transform",
                de[s],
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
me.displayName = "Toggle";
export {
  he as Alert,
  ve as Badge,
  w as Button,
  q as Card,
  J as ConfirmActionButton,
  ye as Divider,
  Ne as Dropdown,
  y as Icon,
  E as InfoPopover,
  re as Input,
  we as Kbd,
  _ as Modal,
  Z as ModalBody,
  G as ModalFooter,
  K as ModalHeader,
  le as Select,
  x as Text,
  ce as Textarea,
  me as Toggle
};
//# sourceMappingURL=index.js.map
