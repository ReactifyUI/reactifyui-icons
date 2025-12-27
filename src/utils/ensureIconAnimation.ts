let injected = false

export function ensureIconAnimations() {
    if (injected || typeof document === "undefined") return
    injected = true

    const style = document.createElement("style")
    style.setAttribute("data-reactifyui-icons", "animations")

    style.innerHTML = `
@keyframes rui-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes rui-spin-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

@keyframes rui-progress {
  0% { stroke-dashoffset: 100; }
  100% { stroke-dashoffset: 0; }
}

@keyframes rui-pulse {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes rui-ping {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(1.25); }
}

@keyframes rui-bounce {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-15%); }
}

@keyframes rui-shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}

@keyframes rui-wiggle {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

@keyframes rui-float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10%); }
}

@keyframes rui-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes rui-slide-up {
  from { transform: translateY(20%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes rui-slide-down {
  from { transform: translateY(-20%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
`

    document.head.appendChild(style)
}
