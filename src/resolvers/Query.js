function users(parent, args, context, info) {
    return context.prisma.user.findMany();
}

function user(parent, args, context, info) {
    return context.prisma.user.findFirst({
        where: {
            id: args.id
        }
    })
}

module.exports = {
    users,
    user
};

