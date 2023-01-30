export async function getUser(parent, args, contextValue, info) {
  const user = await contextValue.prisma.user.findMany({
    where: { email: args.email },
  });
  return user;
}
