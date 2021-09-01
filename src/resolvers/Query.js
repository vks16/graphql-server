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


function videos(parent, args, context, info) {
    return context.prisma.video.findMany();
}

function video(parent, args, context, info) {
    return context.prisma.video.findFirst({
        $where: {
            id: args.id
        }
    });
}

module.exports = {
    users,
    user,
    videos,
    video
};

