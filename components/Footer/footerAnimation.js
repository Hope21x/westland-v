export const variants = {
    hidden: {
        height: 0
    },
    show: {
        height: 200
    }
}
export const socialcontainer = {
    show: {
        transition: {
            staggerChildren: 0.3
        }
    },
    hidden: {
        transition: {
            staggerChildren: 0.1
        }
    },


}
export const socialVariants = {
    hidden: {
        opacity: 0,
        y: 50

    },
    show: {
        opacity: 1,
        y: 0
    },
    exit: {
        y: -50,
        opacity: 0,


    }

}