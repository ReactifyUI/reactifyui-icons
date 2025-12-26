export type IconState =
    | "default"

    // interaction
    | "hover"
    | "active"
    | "pressed"
    | "focused"
    | "selected"
    | "disabled"

    // async
    | "loading"
    | "syncing"
    | "processing"

    // feedback
    | "success"
    | "error"
    | "warning"
    | "info"

    // permission
    | "readonly"
    | "locked"
    | "unavailable"

    // attention
    | "highlighted"
    | "attention"
    | "muted"

    // navigation
    | "current"
    | "expanded"
    | "collapsed"
