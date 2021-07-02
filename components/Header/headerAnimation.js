export const container = {
    show: {
        transition: {
            staggerChildren: 0.3
        }
    }
}

export const item = {
    hidden: {
        opacity: 0,
        y: 55
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 1.8
        }
    }
}