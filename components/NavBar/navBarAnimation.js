export const variants = {
    hidden: {
        width: '0vw'
    },
    show: {
        width: ''
    }
}

export const logoVariant = {
    hidden: {
        opacity: 0,
        x: -40,
        transition: {
            ease: [.6, .01, -.05, .95],
            staggerChildren: 1
        }
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
        duration: .8,
        delay: 1,
        ease: [.6, .01, -.05, .95],
        staggerChildren: 1
       }
    }
}
export const logoVariantContainer = {
    show: {
        transition: {
            ease: [.6, .01, -.05, .95],
            staggerChildren: .2
        }
    }
}
export const heightVariant = {
    hidden: {
        background: 'transparent'
    },
    show: {
        height: ' ',
        background: '#18181a',
        transition: {
            duration: 1,
            ease: [.6, .01, -.05, .95]
        }

    }

}
