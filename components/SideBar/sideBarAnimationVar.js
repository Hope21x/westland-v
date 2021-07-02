export const socialContainer = {
    show: {
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 2,
            staggerChildren: .3,
            delayChildren: .6
        }
    }
}

export const item = {
    hidden: {
        y: 20,
        opacity: 0,

    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: .44,
        }
    },
    exit: {
        y: 500,
        opacity: 0,
        duration: 2,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: .3,
            staggerChildren: .55
        }
    }
}

export const rightSideVariant = {
    hidden: {
        width: '0vw',
    },
    show: {

        width: '',
        transition: {
            duration: .3,
            ease: [.215, .61, .355, 1],
        }
    },
    exit: {
        width: '0vw',
        transition: {
            delay: .35,
            duration: .4,
            ease: [.215, .61, .355, 1],
        }
    }

}

export const sideLeftVariant = {
    hidden: {
        opacity: 0,
    },
    show: {

        opacity: 1,
        transition: {
            delay: 1.3,
            ease: [.215, .61, .355, 1]

        }

    },
    exit: {
        transition: {
            delay: 1
        },
        opacity: 0
    }

}
export const container = {
    hidden: {
        right: 0,
        top: 0,
        bottom: 0,
        width: '0vw'


    },
    show: {
        width: '',
        transition: {
            ease: [.215, .61, .355, 1],
            delay: .16,
            duration: 1,

        }
    },
    exit: {
        width: '0vw',
        transition: {
            ease: [.25, .46, .45, .94],
            duration: .5

        }
    }

}
export const emailContainerItem = {
    hidden: {
        opacity: 0,
        x: 200,
        transition: {
        }
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: .35,
        }
    },
    exit: {
        x: 500,
        opacity: 0,
        duration: .6,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: .55,
            staggerChildren: .55
        }
    }
}