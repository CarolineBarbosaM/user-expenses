import join from 'joi';

const user = join.object({
    email: join.string().email().required(),
    password: join.string().min(4).required(),
})

const expenses = join.object({
    value: join.number().negative().required(),
    description: join.string().max(191).required(),
})

export = { user, expenses }