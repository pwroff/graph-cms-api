/**
 * Created by Leonid on 23/02/17.
 */

const resolvers = {
    Query: {
        posts: (_, params, ctx) => {
            return ['a', 'b', 'c']
        }
    },
    Mutation: {
        upvotePost: (_, {postId}, ctx) => {
            return postId+1;
        }
    }
};

export default resolvers;
